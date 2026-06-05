import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  automationNeeds: z.string().min(10, {
    message: "Please describe your automation needs in at least 10 characters.",
  }),
});

export const contactApiSchema = contactFormSchema;

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactApiData = z.infer<typeof contactApiSchema>;
