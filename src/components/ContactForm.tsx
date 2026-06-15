"use client";

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
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
  automationNeeds: "",
  website: "",
  formStarted: Date.now(),
});

export default function ContactForm({
  apiEndpoint = "/api/contact",
  title = "Start the conversation",
  description = "Tell us what operational drag you want to turn into a working system.",
  submitLabel = "Send request",
  successTitle = "Request received",
  successMessage = "Your request is in, and a member of the Guild will follow up by email.",
}: ContactFormProps) {
  const defaultValues = useRef<ContactFormData>(getDefaultValues());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultValues.current,
  });

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
            name="automationNeeds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should we help automate? {requiredMarker}</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[220px]"
                    placeholder="Tell us what coordination, workflow, or operational problems your system should solve."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button
            className="w-full rounded-sm font-heading text-xs uppercase tracking-wider sm:w-auto sm:min-w-56"
            disabled={isSubmitting}
            size="lg"
            type="submit"
          >
            {isSubmitting ? "Sending..." : submitLabel}
            <Send aria-hidden="true" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
