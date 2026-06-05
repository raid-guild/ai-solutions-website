import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { contactApiSchema, type ContactApiData } from "@/lib/validation";

export const runtime = "nodejs";

const DISCORD_MESSAGE_LIMIT = 2000;
const CONTACT_SOURCE = "system-weaver-contact";

type ContactSummary = ContactApiData & {
  source: typeof CONTACT_SOURCE;
};

const getEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`${key} is not configured`);
  }

  return value;
};

const truncate = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return value;

  return `${value.slice(0, maxLength - 3)}...`;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const createSummary = (contactData: ContactApiData): ContactSummary => ({
  ...contactData,
  source: CONTACT_SOURCE,
});

const formatDiscordMessage = (summary: ContactSummary) => {
  const sections = [
    "**New System Weaver contact request**",
    `**Source:** ${summary.source}`,
    `**Email:** ${summary.email}`,
    `**Automation needs:**\n${summary.automationNeeds}`,
  ];

  return truncate(sections.join("\n\n"), DISCORD_MESSAGE_LIMIT);
};

const formatEmail = (summary: ContactSummary) => {
  const text = [
    "New System Weaver contact request",
    "",
    `Source: ${summary.source}`,
    `Email: ${summary.email}`,
    "",
    "Automation needs:",
    summary.automationNeeds,
  ].join("\n");

  const html = `
    <h1>New System Weaver contact request</h1>
    <p><strong>Source:</strong> ${escapeHtml(summary.source)}</p>
    <p><strong>Email:</strong> ${escapeHtml(summary.email)}</p>
    <h2>Automation needs</h2>
    <p>${escapeHtml(summary.automationNeeds).replaceAll("\n", "<br />")}</p>
  `;

  return { text, html };
};

const sendDiscordMessage = async (content: string) => {
  const botToken = getEnv("DISCORD_BOT_TOKEN");
  const channelId = getEnv("DISCORD_CONSULTATION_CHANNEL_ID");

  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bot ${botToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        allowed_mentions: { parse: [] },
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Discord notification failed: ${details}`);
  }
};

const sendContactEmail = async (summary: ContactSummary) => {
  const apiKey = getEnv("SENDGRID_API_KEY");
  const from = getEnv("SENDGRID_FROM_EMAIL");
  const recipients = getEnv("SENDGRID_TO_EMAILS")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    throw new Error("SENDGRID_TO_EMAILS must include at least one recipient");
  }

  sgMail.setApiKey(apiKey);

  const { text, html } = formatEmail(summary);

  await sgMail.send({
    to: recipients,
    from,
    replyTo: summary.email,
    subject: "New System Weaver contact request",
    text,
    html,
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = contactApiSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue: z.ZodIssue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: errors,
        },
        { status: 400 },
      );
    }

    const summary = createSummary(validationResult.data);
    const discordMessage = formatDiscordMessage(summary);
    const notificationResults = await Promise.allSettled([
      sendDiscordMessage(discordMessage),
      sendContactEmail(summary),
    ]);

    const failedNotifications = notificationResults
      .map((result, index) => ({
        result,
        service: index === 0 ? "discord" : "sendgrid",
      }))
      .filter(({ result }) => result.status === "rejected");

    if (failedNotifications.length > 0) {
      console.error(
        "Contact notification failures:",
        failedNotifications.map(({ result, service }) => ({
          service,
          reason:
            result.status === "rejected" && result.reason instanceof Error
              ? result.reason.message
              : result,
        })),
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to submit contact request",
          details: failedNotifications.map(({ service }) => ({
            service,
            message: "Notification failed",
          })),
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          discord: true,
          email: true,
        },
        message: "Contact request submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting contact request:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit contact request",
      },
      { status: 500 },
    );
  }
}
