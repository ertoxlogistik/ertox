import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ArrowDown, ArrowRight, Truck, Route as RouteIcon, PackageCheck, Boxes, MapPin, Check, ClipboardList, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InquiryForm } from '@/components/inquiry-form';
import { ContactLinks } from '@/components/site-shell';
import { pageHead } from '@/lib/seo';
import road from '@/assets/transport-road.webp';
import team from '@/assets/loading-team.webp';
import dispatch from '@/assets/dispatch-office.webp';
import terminal from '@/assets/freight-terminal.webp';
import warehouse from '@/assets/warehouse-staging.webp';
import company from '@/assets/company-yard.webp';
import teamwork from '@/assets/team-values.webp';
import roadDusk from '@/assets/road-dusk.webp';

const services = [
  ['Güterverkehr', 'Organisation und Durchführung von Gütertransporten für gewerbliche Auftraggeber. Für planbare Warenbewegungen ebenso wie für individuelle Transportanforderungen.', Truck],
  ['Spedition', 'Koordination von Transportabläufen von der Anfrage bis zur Zustellung. Strukturiert geplant, klar abgestimmt und zuverlässig abgewickelt.', RouteIcon],
  ['Transportorganisation', 'Wir koordinieren Abholung, Transport und Zustellung und berücksichtigen Ihre Zeitfenster und organisatorischen Anforderungen.', ClipboardList],
  ['Logistiklösungen', 'Praktikable Abläufe für wiederkehrende oder projektbezogene Warenbewegungen – abgestimmt auf den operativen Alltag Ihres Unternehmens.', Boxes],
  ['Abholung & Zustellung', 'Koordination von Warenabholungen und Zustellungen im Rahmen individuell abgestimmter Transportaufträge.', PackageCheck],
  ['Projektlogistik', 'Individuelle Transport- und Logistikleistungen für Projekte mit besonderen organisatorischen Anforderungen.', MoveUpRight],
] as const;
const steps = [
  ['Anfrage','Sie beschreiben Ihre Ware, die Strecke und Ihre Anforderungen.'],
  ['Planung','Wir stimmen Zeitfenster, Ladebedingungen und Durchführung ab.'],
  ['Abholung','Die Warenabholung wird entsprechend der Vereinbarung koordiniert.'],
  ['Transport','Die Warenbewegung erfolgt auf Grundlage der abgestimmten Planung.'],
  ['Zustellung','Die Zustellung wird mit den Beteiligten klar abgestimmt.'],
];
const values = [
  ['Zuverlässige Abstimmung','Klare Informationen und nachvollziehbare Abläufe bilden die Grundlage jedes Auftrags.'],
  ['Flexible Lösungen','Transportanforderungen unterscheiden sich. Wir betrachten jeden Auftrag individuell.'],
  ['Direkte Kommunikation','Kurze Kommunikationswege erleichtern die Abstimmung zwischen allen Beteiligten.'],
  ['B2B-Fokus','Unsere Leistungen richten sich an Unternehmen mit professionellen Anforderungen.'],
  ['Strukturierte Abläufe','Von der Anfrage bis zur Zustellung achten wir auf eine nachvollziehbare Organisation.'],
  ['Praxisorientierung','Unsere Lösungen sollen im operativen Alltag funktionieren – nicht nur auf dem Papier.'],
];
export const Route = createFileRoute('/')({
  head: () => ({ ...pageHead('Ertox GmbH | Transport, Spedition & Logistik in Blankenfelde-Mahlow', 'Ertox GmbH bietet professionelle Transport-, Speditions- und Logistiklösungen für gewerbliche Kunden. Zuverlässige Transportorganisation aus Blankenfelde-Mahlow.', '/'), scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context':'https://schema.org', '@type':'Organization', name:'Ertox GmbH', url:'https://ertox-logistik.de', email:'info@ertox-logistik.de', telephone:'+49 3379 582614', address:{'@type':'PostalAddress',streetAddress:'Mahlower Dorfstr. 6B',postalCode:'15831',addressLocality:'Blankenfelde-Mahlow',addressCountry:'DE'} }) }] }),
  component: Index,
});

function Index() {
  return <main>
    <section id="start" className="hero">
      <img className="hero-image" src={road} alt="Gütertransport-Lkw mit ERTOX-Logo auf dem Auflieger auf einer Autobahn" width={1920} height={1024} fetchPriority="high"/>
      <div className="hero-shade"/>
      <div className="container hero-content"><p className="eyebrow light"><span/>B2B-LOGISTIK AUS BERLIN-BRANDENBURG</p><h1>Transport. Spedition.<br/>Logistik.<br/><span>Klar organisiert.</span></h1><p className="hero-description">Waren bewegen braucht einen verlässlichen Plan.<br className="desktop-break"/> Ertox GmbH organisiert Transport- und Logistiklösungen, die zu Ihrem Unternehmen passen.</p><div className="hero-actions"><Button asChild className="large-button"><a href="#kontakt">Transport anfragen <ArrowUpRight/></a></Button><Button variant="ghost" asChild className="hero-secondary"><a href="#leistungen">Leistungen ansehen <ArrowRight/></a></Button></div><div className="hero-location"><MapPin size={16}/><span>Blankenfelde-Mahlow · Brandenburg</span></div></div>
      <a href="#leistungen" className="hero-scroll" aria-label="Zu unseren Leistungen"><span>WEITER ENTDECKEN</span><ArrowDown size={19}/></a>
      <div className="hero-side-label">ERTOX GMBH / TRANSPORT & LOGISTIK</div>
    </section>
    <div className="expertise-strip"><div className="container">{[['Güterverkehr',Truck],['Spedition',RouteIcon],['Transportorganisation',PackageCheck],['Logistiklösungen',Boxes]].map(([label,Icon]) => {const ItemIcon = Icon as typeof Truck; return <div key={String(label)}><ItemIcon size={21}/><span>{String(label)}</span><ArrowUpRight size={17}/></div>;})}</div></div>

    <section id="leistungen" className="section services-section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span/>01 / UNSERE LEISTUNGEN</p><h2>Ihre Ware.<br/>Unser klarer Plan.</h2></div><p>Vom einzelnen Transportauftrag bis zu regelmäßigen Warenbewegungen: Wir bringen Struktur in Ihre Logistik – individuell, direkt und praxisnah.</p></div><svg className="svc-defs" aria-hidden="true" focusable="false"><defs><linearGradient id="svcFace" gradientUnits="userSpaceOnUse" x1="3" y1="1" x2="21" y2="23"><stop offset="0" className="svc-stop-a"/><stop offset="0.55" className="svc-stop-b"/><stop offset="1" className="svc-stop-c"/></linearGradient></defs></svg><div className="services-grid">{services.map(([title,text,Icon],i) => <article className="service-item" key={title}><div className="service-top"><span className="service-icon"><Icon className="svc-face" size={33} strokeWidth={1.7} aria-hidden="true"/></span><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href="#kontakt" aria-label={`${title} anfragen`} className="service-link">Anfrage stellen <ArrowUpRight size={18}/></a></article>)}</div><div className="service-note"><span>Keine starren Standardlösungen. Sondern ein Ablauf, der zu Ihrem Auftrag passt.</span><a href="#kontakt">Sprechen wir darüber <ArrowRight size={19}/></a></div></div></section>

    <section id="transport" className="section transport-section"><div className="container"><p className="eyebrow light"><span/>02 / TRANSPORT IN DER PRAXIS</p><div className="section-heading"><h2>Mehr als die Strecke<br/>von A nach B.</h2><p>Ein zuverlässiger Transport beginnt lange vor der Abfahrt. Abholzeiten, Ladebedingungen, Transportweg und Zustellung müssen zusammenpassen.</p></div><div className="operation-images"><figure className="operation-main"><img src={team} alt="Logistikmitarbeiter prüfen verpackte Waren und stimmen die Beladung ab" width={1536} height={1024} loading="lazy"/><figcaption><span>01 / VORBEREITUNG & ABSTIMMUNG</span><ArrowUpRight/></figcaption></figure><figure><img src={terminal} alt="Ein Gabelstapler lädt verpackte Paletten in einen unbeschrifteten Gütertransporter" width={1536} height={1024} loading="lazy"/><figcaption><span>02 / BELADUNG & DURCHFÜHRUNG</span><ArrowUpRight/></figcaption></figure></div><div className="transport-bottom"><span className="big-arrow"><ArrowRight size={52} strokeWidth={1}/></span><h3>Jeder Schritt zählt.<br/>Nicht nur die Kilometer.</h3><p>Wir betrachten Transport als zusammenhängenden Prozess. Mit klarer Kommunikation zwischen Auftraggeber, Disposition und Durchführung.</p></div></div></section>

    <section id="logistik" className="section logistics-section"><div className="container split-layout"><div className="logistics-image"><img src={warehouse} alt="Mitarbeiter schiebt eine stretchumwickelte Palette durch ein Lager mit Regalen zu einer offenen Laderampe" width={1536} height={1024} loading="lazy"/><div className="image-label"><Boxes size={25}/><span>AUF IHRE ANFORDERUNGEN<br/>ABGESTIMMT.</span></div></div><div className="split-copy"><p className="eyebrow"><span/>03 / LOGISTIKLÖSUNGEN</p><h2>So individuell<br/>wie Ihr Bedarf.</h2><p>Transportbedarf entsteht in unterschiedlichsten Branchen. Deshalb setzen wir auf eine Planung, die sich an Ihrem Auftrag orientiert – nicht auf starre Standardlösungen.</p><p>Von einzelnen Warenbewegungen bis zu wiederkehrenden Transportanforderungen unterstützen wir gewerbliche Kunden bei der Organisation ihrer Logistik.</p><div className="use-cases">{['Handel & Industrie','Gewerbliche Warenbewegungen','Projektbezogene Transporte','Regelmäßige Lieferungen','Unternehmenslogistik'].map(item => <div key={item}><Check size={16}/>{item}</div>)}</div><Button variant="outline" asChild className="large-button"><a href="#kontakt">Logistikbedarf besprechen <ArrowUpRight/></a></Button></div></div></section>

    <section id="ablauf" className="section process-section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span/>04 / SO ARBEITEN WIR</p><h2>Ein Auftrag.<br/>Ein abgestimmter Ablauf.</h2></div><p>Gute Logistik ist kein Zufall. Sie entsteht, wenn jeder Beteiligte weiß, was wann zu tun ist.</p></div><div className="process-line">{steps.map(([title,text],i) => <article key={title}><div className="step-number"><span>0{i+1}</span>{i<4 && <ArrowRight size={21}/>}</div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="process-photo"><img src={dispatch} alt="Disponentin koordiniert einen Transport telefonisch und am Bildschirm" width={1536} height={1024} loading="lazy"/><div><p className="eyebrow light">VON ANFANG AN IM DIALOG</p><h3>Klare Kommunikation.<br/>Bessere Zusammenarbeit.</h3><a href="#kontakt">Ihre Anfrage ist der erste Schritt <ArrowUpRight size={20}/></a></div></div></div></section>

    <section className="section values-section"><div className="container"><p className="eyebrow light"><span/>05 / UNSER ANSPRUCH</p><div className="values-layout"><div><h2>Was für<br/>uns zählt.</h2><p className="values-intro">Logistik ist Teamarbeit. Deshalb stehen für uns die Menschen und die Abstimmung hinter jedem Transport im Mittelpunkt.</p><img src={teamwork} alt="Drei Logistikfachkräfte besprechen einen Auftrag am Tablet in einem Lagergang" width={1536} height={1024} loading="lazy"/></div><div className="values-list">{values.map(([title,text],i) => <article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={22}/></article>)}</div></div></div></section>

    <section id="unternehmen" className="section company-section"><div className="container split-layout"><div className="split-copy"><p className="eyebrow"><span/>06 / DAS UNTERNEHMEN</p><h2>ERTOX GMBH.<br/>In Brandenburg<br/>zu Hause.</h2><p>Die Ertox GmbH ist ein Unternehmen aus Blankenfelde-Mahlow mit Schwerpunkt auf Güterverkehr, Spedition, Transport und Logistik.</p><p>Von unserem Unternehmenssitz in der Region Berlin-Brandenburg aus organisieren wir Transport- und Logistikleistungen für gewerbliche Auftraggeber. Unser Anspruch: unkomplizierte Zusammenarbeit, frühzeitige Abstimmung und transparente Prozesse.</p><p className="company-detail">Das Unternehmen wurde 2023 gegründet und wird von Geschäftsführer Eray Akcay geführt.</p><div className="company-address"><MapPin size={23}/><address><strong>Ertox GmbH</strong><br/>Mahlower Dorfstr. 6B<br/>15831 Blankenfelde-Mahlow · Deutschland</address></div></div><div className="company-photo"><img src={company} alt="Zwei Logistikfachkräfte besprechen einen Auftrag mit Klemmbrett und Tablet neben einem Lkw auf einem Werkgelände" width={1536} height={1024} loading="lazy"/><div className="regional-label"><MapPin size={18}/><span>BERLIN-BRANDENBURG</span><ArrowUpRight size={20}/></div></div></div></section>

    <section id="kontakt" className="section contact-section"><div className="container contact-layout"><div className="contact-copy"><p className="eyebrow light"><span/>07 / LASSEN SIE UNS SPRECHEN</p><h2>Ihr Transport.<br/><span>Klar organisiert.</span></h2><p>Sie möchten einen Transport anfragen oder benötigen Unterstützung bei einer logistischen Aufgabe? Beschreiben Sie uns Ihre Anforderungen. Wir melden uns bei Ihnen zurück.</p><div className="contact-details"><ContactLinks/><address>Ertox GmbH<br/>Mahlower Dorfstr. 6B<br/>15831 Blankenfelde-Mahlow</address></div><img src={roadDusk} alt="Lkw mit ERTOX-Logo auf dem Auflieger und leuchtenden Rücklichtern auf einer Autobahn in der Dämmerung" width={1920} height={1024} loading="lazy"/></div><InquiryForm/></div></section>
  </main>;
}
