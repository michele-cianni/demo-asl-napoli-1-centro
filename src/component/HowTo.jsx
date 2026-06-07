import React from 'react';
import { Icon } from '../icons.jsx';
import { ArrowLink, Section, SectionHeading } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

// ─── Come fare per ───

const HowToGrid = () => {
  const { isMobile, isCompact } = useResponsive();
  const services = [
    {
      icon: 'calendar',
      title: 'Prenotare una visita',
      desc: 'CUP online, Farmacup e CUP distrettuali ASL',
      tone: 'primary',
      href: 'page-come-fare-per.html',
    },
    {
      icon: 'document',
      title: 'Ritirare un referto',
      desc: 'Accedi con SPID o CIE al FSE per scaricare gli esiti',
      tone: 'primary',
      href: 'page-referti.html',
    },
    {
      icon: 'users',
      title: 'Cambiare medico di base',
      desc: 'Scegli o revoca il tuo medico di medicina generale',
      tone: 'teal',
      href: '#',
    },
    {
      icon: 'shield',
      title: "Richiedere un'esenzione",
      desc: 'Per reddito, patologia o invalidità',
      tone: 'teal',
      href: '#',
    },
    {
      icon: 'pill',
      title: 'Assistenza farmaceutica',
      desc: 'Ricette dematerializzate, farmaci a distribuzione diretta',
      tone: 'primary',
      href: '#',
    },
    {
      icon: 'heart',
      title: 'Donare sangue o organi',
      desc: 'Centri trasfusionali e dichiarazione di volontà',
      tone: 'warm',
      href: '#',
    },
    {
      icon: 'hospital',
      title: 'Trovare una struttura',
      desc: 'Distretti, presidi ospedalieri, consultori, SERT',
      tone: 'teal',
      href: '#',
    },
    {
      icon: 'phone',
      title: 'Segnalare un problema del sito',
      desc: 'Redazione web: errori, link rotti, contenuti non aggiornati',
      tone: 'primary',
      href: 'page-redazione-web.html',
    },
  ];

  const tonesMap = {
    primary: { bg: 'var(--bi-primary-050)', fg: 'var(--bi-primary)' },
    teal: { bg: 'var(--bi-teal-100)', fg: 'var(--bi-teal-700)' },
    warm: { bg: 'var(--bi-warm-100)', fg: 'var(--bi-warm)' },
  };

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-surface)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/background/asl1.png')`}
      bgOverlay="rgba(255,255,255,0.82)"
      id="servizi"
    >
      <SectionHeading
        eyebrow="Come fare per"
        title="Percorsi guidati, passo dopo passo."
        subtitle="Scopri come svolgere le pratiche più comuni con l'ASL."
        action={<ArrowLink href="page-servizi.html">Vai a tutte le guide</ArrowLink>}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isCompact ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
        }}
      >
        {services.map((s, i) => {
          const t = tonesMap[s.tone];
          return (
            <a
              key={i}
              href={s.href}
              style={{
                background: 'var(--bi-surface)',
                border: '1px solid var(--bi-border)',
                borderRadius: 12,
                padding: isMobile ? 20 : 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minHeight: isMobile ? 'auto' : 200,
                transition: 'all 0.2s ease',
                color: 'var(--bi-ink-900)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--bi-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--bi-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: t.bg,
                  color: t.fg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name={s.icon} size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: 'var(--ff-serif)',
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--bi-ink-900)',
                    marginBottom: 6,
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--bi-ink-500)',
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </div>
              </div>
              <div
                style={{
                  color: 'var(--bi-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Scopri come <Icon name="arrow-right" size={14} />
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export { HowToGrid };
