import { z } from 'zod';

export const inquiryTypes = ['Transportanfrage', 'Spedition', 'Logistik', 'Regelmäßige Transporte', 'Sonstige Anfrage'] as const;
export const inquirySchema = z.object({
  company: z.string().trim().min(2).max(200),
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(60),
  inquiry_type: z.enum(inquiryTypes),
  pickup: z.string().trim().max(300),
  destination: z.string().trim().max(300),
  requested_date: z.string().refine(v => v === '' || /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v))),
  goods: z.string().trim().max(500),
  message: z.string().trim().min(10).max(5000),
  privacy_consent: z.literal(true),
  submission_id: z.string().uuid(),
  website: z.string().max(0),
});