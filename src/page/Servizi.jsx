import { useState } from 'react';
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
      badge: 'Prenota online',
      tone: 'warm',
      title: 'Prenota una visita online',
      desc: 'Accedi al portale CUP e prenota la tua prestazione in pochi click, senza code allo sportello.',
      image: 'servizi-prenotaibli.jpg',
    },
    {
      badge: 'Prevenzione',
      tone: 'teal',
      title: 'Screening mammografico — inviti in corso',
      desc: 'Se hai ricevuto una lettera di invito, prenota la mammografia gratuita. Salva la tua salute.',
      image: 'mammografia.jpg',
    },
    {
      badge: 'Medicina di base',
      tone: 'primary',
      title: 'Trova il tuo medico o pediatra',
      desc: 'Cerca e scegli il medico di medicina generale o il pediatra di libera scelta nella tua zona.',
      image: 'medici-e-pediatri.png',
    },
  ];

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-surface)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/tutti-i-servizi-dell-asl.png')`}
      bgOverlay="rgba(255,255,255,0.55)"
      id="servizi-evidenza"
    >
      <SectionHeading title="In evidenza" />
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
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--bi-primary)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--bi-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${item.image}`}
                alt={item.title}
                style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
              />
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
                    fontFamily: 'var(--ff-serif)',
                    fontWeight: 600,
                    fontSize: 18,
                    color: 'var(--bi-ink-900)',
                    marginBottom: 8,
                    lineHeight: 1.3,
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
    <Section style={{ backgroundColor: 'var(--bi-bg-alt)' }} id="categorie">
      <SectionHeading title="Esplora per categoria" />
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
              alignItems: 'center',
              gap: 20,
              padding: '24px',
              borderRadius: 10,
              background: 'var(--bi-surface)',
              border: '1px solid var(--bi-border)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow 0.22s, transform 0.22s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                'inset 0 0 0 2px var(--bi-primary), 0 8px 28px rgba(0,121,140,0.12)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'var(--bi-primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              }}
            >
              <Icon name={cat.icon} size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--ff-serif)',
                  fontWeight: 600,
                  fontSize: 17,
                  color: 'var(--bi-ink-900)',
                  marginBottom: 4,
                  lineHeight: 1.3,
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
            <Icon name="arrow-right" size={16} color="var(--bi-primary)" />
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
    <Section
      bg="var(--bi-bg)"
      pad={{ desktop: '40px 0', compact: '32px 0', mobile: '32px 0' }}
      id="parliamo-di"
    >
      <h2
        style={{
          fontFamily: 'var(--ff-serif)',
          fontSize: 'clamp(24px, 2.2vw, 30px)',
          fontWeight: 500,
          lineHeight: 1.12,
          letterSpacing: '-0.3px',
          color: 'var(--bi-ink-900)',
          margin: '0 0 16px',
        }}
      >
        Parliamo di
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
        }}
      >
        {topics.map((t) => (
          <a
            key={t}
            href="#"
            style={{
              padding: '5px 14px',
              borderRadius: 99,
              border: '2px solid var(--bi-primary)',
              background: 'var(--bi-surface)',
              color: 'var(--bi-primary)',
              fontWeight: 600,
              fontSize: 13,
              textDecoration: 'none',
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bi-primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bi-surface)';
              e.currentTarget.style.color = 'var(--bi-primary)';
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
  const { isMobile, isCompact } = useResponsive();
  const [hoveredIdx, setHoveredIdx] = useState(null);
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
    <Section
      bg="var(--bi-surface)"
      bgImage={`url('${import.meta.env.BASE_URL}images/servizi-e-prestazioni.png')`}
      bgOverlay="rgba(255,255,255,0.55)"
      id="come-fare-per-servizi"
    >
      <SectionHeading
        title="Come fare per"
        subtitle="Percorsi guidati per le pratiche più richieste legate ai servizi e alle prestazioni."
        subtitleStyle={{ color: 'var(--bi-ink-700)' }}
        action={<ArrowLink href="#">Tutte le guide</ArrowLink>}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isCompact ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
          gap: 16,
        }}
      >
        {guides.map((g, i) => {
          const isHov = hoveredIdx === i;
          return (
            <a
              key={i}
              href={g.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                padding: '24px',
                borderRadius: 10,
                border: `1px solid ${isHov ? 'var(--bi-primary)' : 'var(--bi-border)'}`,
                background: isHov ? 'var(--bi-primary)' : 'var(--bi-surface)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                boxShadow: isHov ? '0 8px 28px rgba(0,121,140,0.18)' : 'none',
                transform: isHov ? 'translateY(-3px)' : 'translateY(0)',
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: isHov ? 'rgba(255,255,255,0.35)' : 'var(--bi-ink-300)',
                  transition: 'color 0.2s',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: isHov ? 'rgba(255,255,255,0.18)' : 'var(--bi-primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
              >
                <Icon name={g.icon} size={22} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-serif)',
                  fontWeight: 600,
                  fontSize: 16,
                  color: isHov ? '#fff' : 'var(--bi-ink-900)',
                  lineHeight: 1.35,
                  flex: 1,
                  transition: 'color 0.2s',
                }}
              >
                {g.title}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Icon
                  name="arrow-right"
                  size={16}
                  color={isHov ? '#fff' : 'var(--bi-primary)'}
                />
              </div>
            </a>
          );
        })}
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
