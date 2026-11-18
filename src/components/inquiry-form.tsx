import { useState, type FormEvent } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { inquirySchema, inquiryTypes } from '@/lib/inquiry';
import { submitInquiry } from '@/lib/inquiry.functions';

export function InquiryForm() {
  const send = useServerFn(submitInquiry);
  const [status,setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error,setError] = useState('');
  const [id,setId] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const submissionId = id || crypto.randomUUID(); setId(submissionId);
    const parsed = inquirySchema.safeParse({ ...values, privacy_consent: values['privacy_consent'] === 'on', submission_id: submissionId });
    if (!parsed.success) { setError('Bitte prüfen Sie Ihre Angaben und ergänzen Sie mindestens 10 Zeichen bei den Transportdetails.'); setStatus('error'); return; }
    setStatus('sending');
    try { await send({ data: parsed.data }); setStatus('success'); } catch { setStatus('error'); setError('Ihre Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.'); }
  }
  if (status === 'success') return <div className="inquiry-success" role="status"><CheckCircle2 size={44}/><h3>Vielen Dank für Ihre Anfrage.</h3><p>Ihre Transportdetails wurden übermittelt. Wir melden uns bei Ihnen zurück.</p><Button variant="outline" onClick={() => {setStatus('idle');setId('');}}>Weitere Anfrage stellen</Button></div>;
  return <form className="inquiry-form" onSubmit={submit}><div className="form-top"><h3>Transport anfragen</h3><span>* Pflichtfelder</span></div><div className="form-grid">{[['company','Unternehmen *','text'],['name','Vorname / Nachname *','text'],['email','E-Mail *','email'],['phone','Telefon','tel']].map(([name,label,type]) => <label key={name} htmlFor={name}>{label}<input id={name} name={name} type={type} required={name !== 'phone'} maxLength={name==='phone'?60:254} autoComplete={name==='company'?'organization':name==='name'?'name':name==='email'?'email':'tel'}/></label>)}<label className="span-two" htmlFor="inquiry_type">Art der Anfrage *<select id="inquiry_type" name="inquiry_type">{inquiryTypes.map(type => <option key={type}>{type}</option>)}</select></label>{[['pickup','Abholort','text'],['destination','Zielort','text'],['requested_date','Gewünschter Termin','date'],['goods','Art / Menge der Ware','text']].map(([name,label,type]) => <label key={name} htmlFor={name}>{label}<input id={name} name={name} type={type} maxLength={500}/></label>)}<label htmlFor="message" className="span-two">Nachricht / Transportdetails *<textarea id="message" name="message" rows={4} minLength={10} maxLength={5000} required placeholder="Was möchten Sie von wo nach wo transportieren?"/></label></div><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label><label className="privacy-check"><input type="checkbox" name="privacy_consent" required/><span>Ich habe die <Link to="/datenschutz">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.</span></label>{status === 'error' && <p role="alert" className="form-error">{error}</p>}<Button type="submit" disabled={status==='sending'} className="submit-button">{status==='sending' ? <>Wird übermittelt <Loader2 className="animate-spin"/></> : <>Anfrage senden <ArrowUpRight/></>}</Button></form>;
}