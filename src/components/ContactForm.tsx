"use client";

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";

type SubmissionStatus = "idle" | "success" | "error";

type ContactFormProps = {
  apiEndpoint?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
};

const requiredMarker = (
  <span className="text-primary" aria-hidden="true">
    *
  </span>
);

const getDefaultValues = (): ContactFormData => ({
  email: "",
  companyName: "",
  aiUseStage: "",
  currentTools: [],
  workflowAreas: [],
  assistantWish: "",
  automationNeeds: "",
  website: "",
  formStarted: Date.now(),
});

const aiUseStages = [
  "Not using AI yet",
  "A few people are experimenting",
  "Teams use AI, but workflows are scattered",
  "We have approved tools, but limited adoption",
  "We are ready to formalize AI operations",
];

const toolOptions = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Grok",
  "Microsoft Copilot",
  "Google Workspace",
  "Notion",
  "Airtable",
  "Zapier / Make",
  "CRM",
  "Accounting tools",
];

const workflowOptions = [
  "Admin",
  "Sales",
  "Customer support",
  "Scheduling",
  "Marketing",
  "Finance",
  "Operations",
  "Reporting",
  "Field work",
];

export default function ContactForm({
  apiEndpoint = "/api/contact",
  title = "Book your readiness assessment",
  description = "Send your email and we will follow up. If you want, add a quick readiness snapshot so we can prepare a more specific first conversation.",
  submitLabel = "Talk to a Builder",
  successTitle = "Request received",
  successMessage = "Your request is in, and a member of the Guild will follow up by email.",
}: ContactFormProps) {
  const defaultValues = useRef<ContactFormData>(getDefaultValues());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultValues.current,
  });

  const selectedTools = form.watch("currentTools") || [];
  const selectedWorkflowAreas = form.watch("workflowAreas") || [];
  const selectedAiUseStage = form.watch("aiUseStage");

  const toggleArrayValue = (
    fieldName: "currentTools" | "workflowAreas",
    value: string,
  ) => {
    const currentValues = form.getValues(fieldName) || [];
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    form.setValue(fieldName, nextValues, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleSubmit = async (formData: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmissionStatus("error");
        setErrorMessage(
          result.error || "Failed to submit contact request. Please try again.",
        );
        return;
      }

      setSubmissionStatus("success");
      form.reset(getDefaultValues());
    } catch (error) {
      console.error("Error submitting contact request:", error);
      setSubmissionStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full border border-border bg-card/60 p-6 backdrop-blur-sm md:p-8">
      <div className="mb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h2 className="font-heading text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
          <input
            aria-hidden="true"
            autoComplete="off"
            className="hidden"
            tabIndex={-1}
            type="text"
            {...form.register("website")}
          />
          <input type="hidden" {...form.register("formStarted")} />

          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address {requiredMarker}</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email"
                      placeholder="Where can we reach you?"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company or team</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="organization"
                      placeholder="Optional"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="automationNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short note</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[120px]"
                      placeholder="Optional. Example: I just want to talk through whether this makes sense for our team."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="border border-border bg-background/25">
            <button
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              onClick={() => setAssessmentOpen((open) => !open)}
              type="button"
            >
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  Optional: Help Us Prepare
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Add a quick readiness snapshot if you want a more specific
                  first conversation.
                </p>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                  assessmentOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {assessmentOpen ? (
              <div className="space-y-6 border-t border-border px-4 py-5">
                <div>
                  <FormLabel>How is AI showing up today?</FormLabel>
                  <div className="mt-3 grid gap-2">
                    {aiUseStages.map((stage) => (
                      <button
                        key={stage}
                        className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${
                          selectedAiUseStage === stage
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                        }`}
                        onClick={() =>
                          form.setValue("aiUseStage", stage, {
                            shouldDirty: true,
                            shouldValidate: true,
                          })
                        }
                        type="button"
                      >
                        {stage}
                        {selectedAiUseStage === stage ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <FormLabel>What tools are already in the mix?</FormLabel>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {toolOptions.map((tool) => {
                      const selected = selectedTools.includes(tool);

                      return (
                        <button
                          key={tool}
                          className={`border px-3 py-2 font-mono text-xs transition-colors ${
                            selected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                          }`}
                          onClick={() => toggleArrayValue("currentTools", tool)}
                          type="button"
                        >
                          {tool}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <FormLabel>
                    AI tools can feel like having a computer expert on call.
                    Where would that help?
                  </FormLabel>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {workflowOptions.map((area) => {
                      const selected = selectedWorkflowAreas.includes(area);

                      return (
                        <button
                          key={area}
                          className={`border px-3 py-2 font-mono text-xs transition-colors ${
                            selected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                          }`}
                          onClick={() =>
                            toggleArrayValue("workflowAreas", area)
                          }
                          type="button"
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="assistantWish"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        If you had an assistant that was great with computers,
                        what would you ask for?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[120px]"
                          placeholder="Example: check email, update the CRM, make a quote, pull job details, send reminders, reconcile a spreadsheet..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}
          </div>

          {submissionStatus === "error" ? (
            <div className="border border-destructive/40 bg-destructive/10 p-4">
              <p className="text-sm text-destructive">{errorMessage}</p>
            </div>
          ) : null}

          {submissionStatus === "success" ? (
            <div className="border border-primary/40 bg-primary/10 p-4">
              <h3 className="font-heading text-lg font-semibold text-primary">
                {successTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {successMessage}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Just want to talk? Email is enough. The readiness snapshot is
              optional.
            </p>
            <Button
              className="sm:min-w-56"
              disabled={isSubmitting}
              size="lg"
              type="submit"
            >
              {isSubmitting ? "Sending..." : submitLabel}
              <Send aria-hidden="true" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
