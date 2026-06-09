import React from 'react';
import { Icon } from '../icons.jsx';
import { Section, SectionHeading } from './UI.jsx';

// ─── "Tutto per" — Pagine aggregatrici per categorie di utenza (PRD §5.1 blocco 8) ───

const AudienceGrid = () => {
  const audiences = [
    {
      icon: 'users',
      label: 'Anziani',
      desc: 'Assistenza domiciliare, prevenzione, vaccinazioni e servizi dedicati agli over 65.',
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
    {
      icon: 'star',
      label: 'Giovani',
      desc: 'Salute mentale, consultori, vaccinazioni e medicina dello sport.',
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
    {
      icon: 'heart',
      label: 'Donne',
      desc: 'Screening oncologici, percorsi nascita, consultori e salute di genere.',
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
    {
      icon: 'stethoscope',
      label: 'Bambini',
      desc: "Pediatria di base, vaccinazioni dell'infanzia, consultori familiari.",
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
    {
      icon: 'shield',
      label: 'Caregiver',
      desc: 'Supporto a chi assiste un familiare: deleghe, ADI, sportello ascolto.',
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
    {
      icon: 'accessibility',
      label: 'Persone con disabilità',
      desc: 'Accertamento invalidità, ausili e presidi, centri diurni e residenziali.',
      color: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
      iconFg: '#fff',
      hoverBg: 'var(--bi-primary-050)',
    },
  ];

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-bg)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/tutto-per.png')`}
      bgOverlay="rgba(255,255,255,0.28)"
      id="tutto-per"
    >
      <SectionHeading
        title="Dedicato a"
        subtitle="Scopri i servizi, le strutture e le novità per tipologia di utente"
        subtitleStyle={{ color: 'var(--bi-ink-700)' }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {audiences.map((a, i) => (
          <a
            key={i}
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bi-surface)',
              borderRadius: 16,
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.background = a.hoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.background = 'var(--bi-surface)';
            }}
          >
            <div style={{ height: 4, background: a.accent, flexShrink: 0 }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: '20px 24px',
                flex: 1,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: a.color,
                  color: a.iconFg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={a.icon} size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'var(--bi-ink-900)',
                    marginBottom: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {a.label}
                  <Icon name="arrow-right" size={16} color="var(--bi-primary)" />
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: 'var(--bi-ink-500)',
                    lineHeight: 1.5,
                  }}
                >
                  {a.desc}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export { AudienceGrid };
