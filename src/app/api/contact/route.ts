import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { contactApiSchema, type ContactApiData } from "@/lib/validation";

export const runtime = "nodejs";

const DISCORD_MESSAGE_LIMIT = 2000;
const CONTACT_SOURCE = "raidguild-ai-solutions-contact";
const MIN_FORM_ELAPSED_MS = 3000;
const MAX_FORM_ELAPSED_MS = 24 * 60 * 60 * 1000;
const FUTURE_FORM_TOLERANCE_MS = 60 * 1000;

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
  email: contactData.email,
  companyName: contactData.companyName,
  aiUseStage: contactData.aiUseStage,
  currentTools: contactData.currentTools,
  workflowAreas: contactData.workflowAreas,
  assistantWish: contactData.assistantWish,
  automationNeeds: contactData.automationNeeds,
  source: CONTACT_SOURCE,
});

const formatList = (items?: string[]) =>
  items && items.length > 0 ? items.join(", ") : "Not answered";

const formatOptional = (value?: string) => value || "Not answered";

const createSpamAcceptedResponse = () =>
  NextResponse.json(
    {
      success: true,
      message: "Contact request submitted successfully",
    },
    { status: 200 },
  );

const isSuspiciousSubmissionTime = (formStarted: number) => {
  const now = Date.now();
  const elapsed = now - formStarted;

  return (
    elapsed < MIN_FORM_ELAPSED_MS ||
    elapsed > MAX_FORM_ELAPSED_MS ||
    formStarted > now + FUTURE_FORM_TOLERANCE_MS
  );
};

const formatDiscordMessage = (summary: ContactSummary) => {
  const sections = [
    "**New RaidGuild AI Solutions contact request**",
    `**Source:** ${summary.source}`,
    `**Email:** ${summary.email}`,
    `**Company:** ${formatOptional(summary.companyName)}`,
    `**AI use stage:** ${formatOptional(summary.aiUseStage)}`,
    `**Current tools:** ${formatList(summary.currentTools)}`,
    `**Workflow areas:** ${formatList(summary.workflowAreas)}`,
    `**Computer-using assistant wish:**\n${formatOptional(summary.assistantWish)}`,
    `**Short note:**\n${formatOptional(summary.automationNeeds)}`,
  ];

  return truncate(sections.join("\n\n"), DISCORD_MESSAGE_LIMIT);
};

const formatEmail = (summary: ContactSummary) => {
  const text = [
    "New RaidGuild AI Solutions contact request",
    "",
    `Source: ${summary.source}`,
    `Email: ${summary.email}`,
    `Company: ${formatOptional(summary.companyName)}`,
    `AI use stage: ${formatOptional(summary.aiUseStage)}`,
    `Current tools: ${formatList(summary.currentTools)}`,
    `Workflow areas: ${formatList(summary.workflowAreas)}`,
    "",
    "Computer-using assistant wish:",
    formatOptional(summary.assistantWish),
    "",
    "Short note:",
    formatOptional(summary.automationNeeds),
  ].join("\n");

  const html = `
    <h1>New RaidGuild AI Solutions contact request</h1>
    <p><strong>Source:</strong> ${escapeHtml(summary.source)}</p>
    <p><strong>Email:</strong> ${escapeHtml(summary.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(formatOptional(summary.companyName))}</p>
    <p><strong>AI use stage:</strong> ${escapeHtml(formatOptional(summary.aiUseStage))}</p>
    <p><strong>Current tools:</strong> ${escapeHtml(formatList(summary.currentTools))}</p>
    <p><strong>Workflow areas:</strong> ${escapeHtml(formatList(summary.workflowAreas))}</p>
    <h2>Computer-using assistant wish</h2>
    <p>${escapeHtml(formatOptional(summary.assistantWish)).replaceAll("\n", "<br />")}</p>
    <h2>Short note</h2>
    <p>${escapeHtml(formatOptional(summary.automationNeeds)).replaceAll("\n", "<br />")}</p>
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
    subject: "New RaidGuild AI Solutions contact request",
    text,
    html,
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (typeof body?.website === "string" && body.website.trim()) {
      console.warn("Blocked contact form honeypot submission");
      return createSpamAcceptedResponse();
    }

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

    if (isSuspiciousSubmissionTime(validationResult.data.formStarted)) {
      console.warn("Blocked contact form timing submission");
      return createSpamAcceptedResponse();
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
