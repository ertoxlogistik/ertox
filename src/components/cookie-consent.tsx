import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { readChoice, saveChoices, onConsentChange } from '@/lib/consent';

export function CookieConsent() {
  const [visible,setVisible] = useState(false);
  const [settings,setSettings] = useState(false);
  const [analytics,setAnalytics] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [gpc,setGpc] = useState(false);
  useEffect(() => {
    setGpc((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true);
    // The requested first-visit notice is shown globally, not only in consent regions.
    setVisible(readChoice('analytics') === null);
    const open = () => { setAnalytics(readChoice('analytics') === 'granted'); setSettings(true); setVisible(true); };
    window.addEventListener('open-cookie-settings',open);
    const unsubscribe = onConsentChange(() => setAnalytics(readChoice('analytics') === 'granted'));
    return () => { window.removeEventListener('open-cookie-settings',open); unsubscribe(); };
  },[]);
  useEffect(() => { if (visible) ref.current?.focus({ preventScroll: true }); },[visible]);
  function save(value: boolean) { saveChoices({ analytics: value ? 'granted' : 'denied', advertising: 'denied' }); setVisible(false); setSettings(false); }
  if (!visible) return null;
  return <aside className="consent-panel" aria-label="Cookie-Einstellungen"><div ref={ref} tabIndex={-1} className="consent-content"><div className="consent-title"><ShieldCheck size={20}/><h2>{settings ? 'Ihre Datenschutz-Einstellungen' : 'Ihre Privatsphäre zählt.'}</h2>{settings && <Button size="icon" variant="ghost" aria-label="Einstellungen schließen" onClick={() => { setSettings(false); if(readChoice('analytics')) setVisible(false); }}><X/></Button>}</div><p>Wir zählen Seitenbesuche ohne Cookies und ohne Sie zu identifizieren. Mit Ihrer Zustimmung messen wir auch Klicks. Ihre Auswahl können Sie jederzeit ändern. <Link to="/datenschutz">Datenschutz</Link></p>{settings && <div className="consent-categories"><div><strong>Notwendig</strong><span>Immer aktiv · Betrieb und gespeicherte Auswahl</span></div><div><label htmlFor="consent-statistics"><strong>Statistik</strong><span>Besuchsmessung, bereitgestellt von Lovable</span></label><input id="consent-statistics" type="checkbox" role="switch" checked={analytics && !gpc} disabled={gpc} onChange={e => setAnalytics(e.target.checked)}/></div><div><strong>Funktional</strong><span>Keine zusätzlichen Technologien eingebunden</span></div><div><strong>Marketing</strong><span>Keine Marketing-Technologien eingebunden</span></div>{gpc && <p>Das Datenschutzsignal Ihres Browsers gilt. Optionale Messungen bleiben ausgeschaltet.</p>}</div>}<div className="consent-actions"><Button variant="outline" onClick={() => save(false)}>Nur notwendige</Button><Button variant="outline" onClick={() => save(true)}>Alle akzeptieren</Button>{settings ? <Button onClick={() => save(analytics)}>Auswahl speichern</Button> : <Button variant="ghost" onClick={() => { setAnalytics(readChoice('analytics') === 'granted'); setSettings(true); }}>Einstellungen</Button>}</div></div></aside>;
}