import { z } from "zod";

const contactFieldsSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  companyName: z.string().max(120).optional(),
  aiUseStage: z.string().max(80).optional(),
  currentTools: z.array(z.string().max(80)).optional(),
  workflowAreas: z.array(z.string().max(80)).optional(),
  assistantWish: z.string().max(1200).optional(),
  automationNeeds: z.string().max(1600).optional(),
});

export const contactFormSchema = contactFieldsSchema.extend({
  website: z.string().optional(),
  formStarted: z.coerce.number(),
});

export const contactApiSchema = contactFormSchema;

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactApiData = z.infer<typeof contactFieldsSchema>;
