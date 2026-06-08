import { Icon } from '../icons.jsx';
import { ArrowLink, Section, SectionHeading, Breadcrumb } from '../component/UI.jsx';
import { PageHero } from './Hero.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FSEBand } from '../component/FSEBand.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

// ─── Pagina Servizi e prestazioni (PRD §5.2) ───

// (Breadcrumb è definito in ui.jsx)

// ── Servizi in evidenza ──
const ServicesHighlights = () => {
  const { isMobile, isCompact } = useResponsive();
  const items = [
    {
      badge: 'Campagna vaccinale',
      tone: 'warm',
      title: 'Vaccino antinfluenzale 2026–2027',
      desc: "Prenotazioni aperte per over 60 e categorie a rischio presso tutti i distretti dell'ASL.",
      icon: 'shield',
    },
    {
      badge: 'Prevenzione',
      tone: 'teal',
      title: 'Screening mammografico — inviti in corso',
      desc: 'Se hai ricevuto una lettera di invito, prenota la mammografia gratuita.',
      icon: 'heart',
    },
    {
      badge: 'Novità',
      tone: 'primary',
      title: 'Nuovo ambulatorio terapia del dolore',
      desc: "Dal 5 maggio attivo all'Ospedale del Mare di Ponticelli.",
      icon: 'stethoscope',
    },
  ];

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-surface)' }}
      id="servizi-evidenza"
    >
      <SectionHeading
        eyebrow="In evidenza"
        title="Servizi prioritari del momento"
        subtitle="Selezione editoriale aggiornata dalla redazione ASL."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isCompact ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
          gap: isMobile ? 16 : 24,
        }}
      >
        {items.map((item, i) => {
          return (
            <a
              key={i}
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--bi-border)',
                borderRadius: 8,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 0.15s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div
                style={{
                  width: '100%',
                  height: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  background: 'var(--bi-ink-100)',
                  color: 'var(--bi-ink-300)',
                }}
              >
                <Icon name={item.icon} size={40} />
                <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.6, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  Immagine placeholder
                </span>
              </div>
              <div
                style={{
                  padding: '20px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--bi-surface)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    padding: '3px 10px',
                    borderRadius: 99,
                    marginBottom: 10,
                    background: 'var(--bi-primary-100)',
                    color: 'var(--bi-primary-800)',
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 0.4,
                  }}
                >
                  {item.badge}
                </span>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: 'var(--bi-ink-900)',
                    marginBottom: 8,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: 'var(--bi-ink-500)',
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {item.desc}
                </div>
                <div
                  style={{
                    marginTop: 16,
                    color: 'var(--bi-primary)',
                    fontWeight: 700,
                    fontSize: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  Scopri di più <Icon name="arrow-right" size={14} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

// ── Esplora per categoria ──
const CategoryGrid = () => {
  const cats = [
    {
      icon: 'stethoscope',
      title: 'Visite specialistiche',
      desc: 'Cardiologia, ortopedia, dermatologia e altre specialità.',
    },
    {
      icon: 'document',
      title: 'Esami e analisi',
      desc: 'Esami di laboratorio, diagnostica per immagini, prelievi.',
    },
    {
      icon: 'shield',
      title: 'Prevenzione e vaccini',
      desc: 'Screening oncologici, vaccinazioni e programmi di prevenzione.',
    },
    {
      icon: 'heart',
      title: 'Percorsi di cura e assistenza',
      desc: 'ADI, cure palliative, riabilitazione e percorsi cronicità.',
    },
    {
      icon: 'target',
      title: 'Igiene pubblica e animali',
      desc: 'Sanità veterinaria, igiene degli alimenti, igiene ambientale.',
    },
    {
      icon: 'pill',
      title: 'Interventi di chirurgia',
      desc: 'Chirurgia programmata e day surgery nei presidi ASL.',
    },
    {
      icon: 'ambulance',
      title: 'Pronto Soccorso',
      desc: 'Presidi di Pronto Soccorso presenti nel territorio ASL Napoli 1 Centro.',
    },
  ];

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-bg-alt)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/tutti-i-servizi-dell-asl.png')`}
      bgOverlay="rgba(255,255,255,0.82)"
      id="categorie"
    >
      <SectionHeading
        eyebrow="Esplora per categoria"
        title="Tutti i servizi dell'ASL"
        subtitle="Scegli la categoria per trovare le prestazioni di tuo interesse."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {cats.map((cat, i) => (
          <a
            key={i}
            href="#"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              padding: '20px',
              borderRadius: 8,
              background: 'var(--bi-surface)',
              border: '1px solid var(--bi-border)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'var(--bi-primary-050)',
                color: 'var(--bi-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name={cat.icon} size={22} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: 'var(--bi-ink-900)',
                  marginBottom: 4,
                }}
              >
                {cat.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--bi-ink-500)',
                  lineHeight: 1.5,
                }}
              >
                {cat.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

// ── Tag cloud "Parliamo di" ──
const TopicCloud = () => {
  const topics = [
    'Diabete',
    'Oncologia',
    'Maternità',
    'Cardiologia',
    'Ortopedia',
    'Salute mentale',
    'Pediatria',
    'Allergologia',
    'Neurologia',
    'Riabilitazione',
    'Oculistica',
    'Otorinolaringoiatria',
    'Dermatologia',
    'Endocrinologia',
    'Urologia',
  ];

  return (
    <Section bg="var(--bi-bg-alt)" id="parliamo-di">
      <SectionHeading
        eyebrow="Parliamo di"
        title="Argomenti correlati"
        subtitle="Esplora i contenuti per tema clinico o area di interesse."
        align="center"
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        {topics.map((t) => (
          <a
            key={t}
            href="#"
            style={{
              padding: '8px 18px',
              borderRadius: 99,
              border: '1.5px solid var(--bi-border)',
              background: 'var(--bi-surface)',
              color: 'var(--bi-ink-700)',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bi-primary-050)';
              e.currentTarget.style.borderColor = 'var(--bi-primary)';
              e.currentTarget.style.color = 'var(--bi-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bi-surface)';
              e.currentTarget.style.borderColor = 'var(--bi-border)';
              e.currentTarget.style.color = 'var(--bi-ink-700)';
            }}
          >
            {t}
          </a>
        ))}
      </div>
    </Section>
  );
};

// ── Come fare per (richiamo) ──
const ServicesHowTo = () => {
  const guides = [
    {
      icon: 'calendar',
      title: 'Prenotare una visita specialistica',
      href: 'page-come-fare-per.html',
    },
    {
      icon: 'document',
      title: 'Ritirare un referto online',
      href: 'page-referti.html',
    },
    { icon: 'users', title: 'Cambiare il medico di base', href: '#' },
    { icon: 'shield', title: "Richiedere un'esenzione ticket", href: '#' },
    { icon: 'pill', title: 'Assistenza farmaceutica', href: '#' },
    { icon: 'heart', title: 'Iscrizione al SSN', href: '#' },
  ];

  return (
    <Section bg="var(--bi-surface)" id="come-fare-per-servizi">
      <SectionHeading
        eyebrow="Come fare per"
        title="Guide passo-passo correlate"
        subtitle="Percorsi guidati per le pratiche più richieste legate ai servizi e alle prestazioni."
        action={<ArrowLink href="#">Tutte le guide</ArrowLink>}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 12,
        }}
      >
        {guides.map((g, i) => (
          <a
            key={i}
            href={g.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 18px',
              borderRadius: 6,
              border: '1px solid var(--bi-border)',
              background: 'var(--bi-surface)',
              textDecoration: 'none',
              color: 'var(--bi-ink-900)',
              fontWeight: 600,
              fontSize: 14,
              transition: 'background 0.12s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bi-primary-050)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bi-surface)')}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'var(--bi-primary-050)',
                color: 'var(--bi-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name={g.icon} size={18} />
            </span>
            <span style={{ flex: 1, lineHeight: 1.4 }}>{g.title}</span>
            <Icon name="arrow-right" size={14} color="var(--bi-primary)" />
          </a>
        ))}
      </div>
    </Section>
  );
};

// ── Pagina completa ──
const PageServizi = () => (
  <div data-screen-label="02 Servizi e prestazioni" style={{ background: 'var(--bi-bg)' }}>
    <TopBar />
    <BrandRow />
    <StickyHeader active="servizi" />
    <Breadcrumb
      items={[{ label: 'Home', href: 'index.html' }, { label: 'Servizi e prestazioni' }]}
    />

    <PageHero
      title="Servizi e prestazioni"
      lead="Scopri tutte le prestazioni sanitarie erogate dall'ASL Napoli 1 Centro: visite specialistiche, esami diagnostici, screening, chirurgia e molto altro."
    />

    <ServicesHighlights />
    <CategoryGrid />
    <ServicesHowTo />
    <FSEBand />
    <TopicCloud />
    <FeedbackWidget />
    <Footer />
  </div>
);

export { PageServizi };
