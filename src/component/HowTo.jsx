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

  const tone = { accent: 'var(--bi-primary)', iconBg: 'var(--bi-primary)', iconFg: '#fff', hoverBg: 'var(--bi-primary-050)' };

  return (
    <Section style={{ backgroundColor: 'var(--bi-surface)' }} id="servizi">
      <SectionHeading
        title="Come fare per"
        subtitle="Scopri e approfondisci tutte le procedure offerte dall'ASL Napoli 1 Centro"
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
          const t = tone;
          return (
            <a
              key={i}
              href={s.href}
              style={{
                background: 'var(--bi-surface)',
                borderRadius: 16,
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: isMobile ? 'auto' : 210,
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                color: 'var(--bi-ink-900)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.background = t.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.background = 'var(--bi-surface)';
              }}
            >
              <div style={{ height: 4, background: t.accent, flexShrink: 0 }} />
              <div
                style={{
                  padding: isMobile ? 20 : 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: t.iconBg,
                    color: t.iconFg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name={s.icon} size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--ff-serif)',
                      fontSize: 19,
                      fontWeight: 600,
                      color: 'var(--bi-ink-900)',
                      marginBottom: 8,
                      lineHeight: 1.25,
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
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
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export { HowToGrid };
