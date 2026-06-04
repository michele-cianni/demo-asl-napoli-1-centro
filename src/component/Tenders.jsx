import React from 'react';
import { Icon } from '../icons.jsx';
import { ArrowLink, Section, SectionHeading } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

// ─── Bandi e concorsi (PRD §5.1 blocco 10) ───

const Tenders = () => {
  const { isMobile, isCompact } = useResponsive();
  const bandi = [
    {
      type: 'Bando di gara',
      tone: 'primary',
      date: 'Scade il 15 maggio 2026',
      title: 'Fornitura di dispositivi medici monouso per i presidi ospedalieri — CIG 94827XXXX',
      tag: 'Forniture',
    },
    {
      type: 'Bando di gara',
      tone: 'primary',
      date: 'Scade il 28 maggio 2026',
      title: 'Affidamento del servizio di manutenzione degli impianti termici — lotto unico',
      tag: 'Servizi',
    },
    {
      type: 'Bando di gara',
      tone: 'primary',
      date: 'Scade il 5 giugno 2026',
      title: 'Acquisizione di sistemi di videosorveglianza per i Distretti Sanitari',
      tag: 'Lavori',
    },
  ];

  const concorsi = [
    {
      type: 'Concorso pubblico',
      tone: 'teal',
      date: 'Scade il 30 maggio 2026',
      title: 'Concorso per 24 posti di Collaboratore Professionale Sanitario — Infermiere (cat. D)',
      tag: 'Infermieristica',
    },
    {
      type: 'Avviso di mobilità',
      tone: 'teal',
      date: 'Scade il 20 maggio 2026',
      title: 'Mobilità volontaria per n. 4 posti di Assistente Amministrativo (cat. C)',
      tag: 'Amministrativo',
    },
    {
      type: 'Concorso pubblico',
      tone: 'teal',
      date: 'Scade il 10 giugno 2026',
      title: 'Selezione pubblica per 6 posti di Dirigente Medico — disciplina Medicina Interna',
      tag: 'Dirigenza Medica',
    },
  ];

  const ItemRow = ({ item }) => {
    const toneMap = {
      primary: { bg: 'var(--bi-primary-100)', fg: 'var(--bi-primary-800)' },
      teal: { bg: 'var(--bi-teal-100)', fg: 'var(--bi-teal-700)' },
    };
    const t = toneMap[item.tone];
    return (
      <a
        href="#"
        style={{
          display: 'block',
          padding: '16px 0',
          borderBottom: '1px solid var(--bi-border)',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 99,
              background: t.bg,
              color: t.fg,
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 0.4,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            {item.type}
          </span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--bi-ink-900)',
                lineHeight: 1.4,
                marginBottom: 4,
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'var(--bi-ink-500)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              <Icon name="clock" size={13} />
              {item.date}
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: 99,
                  background: 'var(--bi-ink-100)',
                  color: 'var(--bi-ink-600)',
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {item.tag}
              </span>
            </div>
          </div>
          <Icon
            name="arrow-right"
            size={16}
            color="var(--bi-primary)"
            style={{ flexShrink: 0, marginTop: 4 }}
          />
        </div>
      </a>
    );
  };

  return (
    <Section
      style={{
        backgroundColor: 'var(--bi-surface)',
        backgroundImage: `url('${import.meta.env.BASE_URL}images/background/sotto%20bandi%20e%20concorsi.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="bandi-concorsi"
    >
      <SectionHeading
        eyebrow="ASL Comunica"
        title="Bandi e concorsi"
        subtitle="Ultimi avvisi pubblicati dall'ASL Napoli 3 Sud."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
          gap: isCompact ? 32 : 48,
        }}
      >
        {/* Bandi di gara */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              gap: 12,
              marginBottom: 4,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--ff-serif)',
                fontWeight: 500,
                fontSize: 22,
                margin: 0,
                color: 'var(--bi-ink-900)',
              }}
            >
              Bandi di gara
            </h3>
            <ArrowLink href="#">Tutti i bandi</ArrowLink>
          </div>
          {bandi.map((item, i) => (
            <ItemRow key={i} item={item} />
          ))}
        </div>

        {/* Concorsi */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              gap: 12,
              marginBottom: 4,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--ff-serif)',
                fontWeight: 500,
                fontSize: 22,
                margin: 0,
                color: 'var(--bi-ink-900)',
              }}
            >
              Concorsi e selezioni
            </h3>
            <ArrowLink href="#">Tutti i concorsi</ArrowLink>
          </div>
          {concorsi.map((item, i) => (
            <ItemRow key={i} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export { Tenders };
