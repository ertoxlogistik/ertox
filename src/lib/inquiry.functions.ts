import { createServerFn } from '@tanstack/react-start';
import { inquirySchema } from './inquiry';

export const submitInquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    // This public form may only create validated inquiries. It never exposes stored data.
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data.email.toLowerCase()));
    const rateKey = Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2, '0')).join('');
    const { data: allowed, error: rateError } = await supabaseAdmin.rpc('allow_transport_inquiry', { rate_key: rateKey });
    if (rateError || !allowed) throw new Error('Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.');
    const { website: _website, ...row } = data;
    const { error } = await supabaseAdmin.from('transport_inquiries').insert({ ...row, requested_date: row.requested_date || null });
    if (error && error.code !== '23505') throw new Error('Ihre Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.');
    return { success: true };
  });