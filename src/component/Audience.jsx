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
      bg: 'var(--bi-primary-050)',
    },
    {
      icon: 'star',
      label: 'Giovani',
      desc: 'Salute mentale, consultori, vaccinazioni e medicina dello sport.',
      color: 'var(--bi-teal-700)',
      bg: 'var(--bi-teal-100)',
    },
    {
      icon: 'heart',
      label: 'Donne',
      desc: 'Screening oncologici, percorsi nascita, consultori e salute di genere.',
      color: 'var(--bi-warm)',
      bg: 'var(--bi-warm-100)',
    },
    {
      icon: 'stethoscope',
      label: 'Bambini',
      desc: "Pediatria di base, vaccinazioni dell'infanzia, consultori familiari.",
      color: 'var(--bi-primary)',
      bg: 'var(--bi-primary-050)',
    },
    {
      icon: 'shield',
      label: 'Caregiver',
      desc: 'Supporto a chi assiste un familiare: deleghe, ADI, sportello ascolto.',
      color: 'var(--bi-teal-700)',
      bg: 'var(--bi-teal-100)',
    },
    {
      icon: 'accessibility',
      label: 'Persone con disabilità',
      desc: 'Accertamento invalidità, ausili e presidi, centri diurni e residenziali.',
      color: 'var(--bi-warm)',
      bg: 'var(--bi-warm-100)',
    },
  ];

  return (
    <Section bg="var(--bi-bg-alt)" id="tutto-per">
      <SectionHeading
        eyebrow="Tutto per"
        title="Informazioni pensate per te"
        subtitle="Percorsi e contenuti organizzati per categoria di utente, così trovi subito ciò che riguarda la tua situazione."
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
              alignItems: 'flex-start',
              gap: 16,
              padding: '20px 24px',
              background: 'var(--bi-surface)',
              borderRadius: 8,
              border: '1px solid var(--bi-border)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
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
                background: a.bg,
                color: a.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name={a.icon} size={22} />
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
          </a>
        ))}
      </div>
    </Section>
  );
};

export { AudienceGrid };
