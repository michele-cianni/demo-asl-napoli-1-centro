import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Section, SectionHeading } from './UI.jsx';

// ─── Screening e prevenzione ───
const Screening = () => {
  const programs = [
    {
      title: 'Screening mammografico',
      target: 'Donne 50–69 anni',
      period: 'Ogni 2 anni',
      desc: 'Mammografia bilaterale gratuita per la prevenzione del tumore al seno.',
      icon: 'heart',
      tone: 'warm',
    },
    {
      title: 'Screening colon-retto',
      target: 'Uomini e donne 50–74 anni',
      period: 'Ogni 2 anni',
      desc: 'Ricerca del sangue occulto nelle feci, con kit a domicilio.',
      icon: 'shield',
      tone: 'primary',
    },
    {
      title: 'Screening cervicale (HPV-DNA)',
      target: 'Donne 25–64 anni',
      period: 'Ogni 5 anni',
      desc: 'Test HPV-DNA o Pap-test a seconda della fascia di età.',
      icon: 'target',
      tone: 'teal',
    },
  ];

  const tonesMap = {
    primary: {
      bg: 'var(--bi-primary-050)',
      fg: 'var(--bi-primary)',
      accent: 'var(--bi-primary)',
    },
    teal: {
      bg: 'var(--bi-teal-100)',
      fg: 'var(--bi-teal-700)',
      accent: 'var(--bi-teal)',
    },
    warm: {
      bg: 'var(--bi-warm-100)',
      fg: 'var(--bi-warm)',
      accent: 'var(--bi-warm)',
    },
  };

  return (
    <Section bg="var(--bi-surface)" id="screening">
      <SectionHeading
        eyebrow="Prevenzione"
        title="Programmi di screening attivi"
        subtitle="La prevenzione salva vite. Tre programmi di screening gratuiti per la diagnosi precoce, su invito dell'ASL."
        action={
          <Button variant="outline" iconRight="arrow-right">
            Prenota uno screening
          </Button>
        }
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
      >
        {programs.map((p, i) => {
          const t = tonesMap[p.tone];
          return (
            <article
              key={i}
              style={{
                position: 'relative',
                background: 'var(--bi-surface)',
                border: '1px solid var(--bi-border)',
                borderRadius: 16,
                padding: 28,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minHeight: 320,
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  background: t.bg,
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: t.bg,
                  color: t.fg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name={p.icon} size={26} />
              </div>

              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <h3
                  style={{
                    margin: '0 0 8px',
                    fontFamily: 'var(--ff-serif)',
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: 'var(--bi-ink-900)',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: 'var(--bi-ink-500)',
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  {p.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  paddingTop: 16,
                  borderTop: '1px solid var(--bi-border)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--bi-ink-500)',
                      textTransform: 'uppercase',
                      letterSpacing: 0.6,
                      fontWeight: 700,
                    }}
                  >
                    Target
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--bi-ink-900)',
                    }}
                  >
                    {p.target}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--bi-ink-500)',
                      textTransform: 'uppercase',
                      letterSpacing: 0.6,
                      fontWeight: 700,
                    }}
                  >
                    Frequenza
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--bi-ink-900)',
                    }}
                  >
                    {p.period}
                  </div>
                </div>
              </div>

              <a
                href="#"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  color: t.accent,
                  fontWeight: 700,
                  fontSize: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                Scopri come aderire <Icon name="arrow-right" size={14} />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export { Screening };
