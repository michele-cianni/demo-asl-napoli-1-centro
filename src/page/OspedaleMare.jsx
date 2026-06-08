import React from 'react';
import { Icon } from '../icons.jsx';
import { Section, SectionHeading, Breadcrumb } from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

// ─── Pagina foglia — Ospedale del Mare di Ponticelli (PRD §5.6) ───
// Conforme al Modello AGID Tipologia Struttura (§5.6.2)
// URL: /strutture/ospedali/ospedale-del-mare/
// Breadcrumb: Home → Strutture → Ospedali → Ospedale del Mare

// ── Dati statici ──

const GALLERIA = [
  { label: 'Ingresso principale', span: 2 },
  { label: 'Reparto Cardiologia', span: 1 },
  { label: 'Sala operatoria', span: 1 },
  { label: 'Pronto Soccorso', span: 1 },
  { label: 'Laboratorio Analisi', span: 1 },
];

const SERVIZI = [
  {
    cat: 'Emergenza e Urgenza',
    items: [
      {
        nome: "U.O.S.D. Medicina d'Urgenza con Pronto Soccorso e OBI",
        desc: 'Assistenza di emergenza-urgenza 24/7 con Osservazione Breve Intensiva.',
        href: '#',
        ps: true,
      },
      {
        nome: 'U.O.S. Patologia Clinica e Emergenza/Urgenza',
        desc: 'Supporto diagnostico di laboratorio per le attività di emergenza.',
        href: '#',
      },
    ],
  },
  {
    cat: 'Chirurgia e Specialistica',
    items: [
      {
        nome: 'U.O.C. Anestesia e Terapia Intensiva',
        desc: 'Anestesia operatoria e gestione del paziente critico in terapia intensiva.',
        href: '#',
      },
      {
        nome: 'U.O.S.D. Chirurgia generale',
        desc: 'Interventi chirurgici in elezione e in urgenza.',
        href: '#',
      },
      {
        nome: 'U.O.C. Gastroenterologia ed Endoscopia Digestiva',
        desc: 'Diagnosi e cura delle patologie gastroenterologiche con endoscopia.',
        href: '#',
      },
      {
        nome: 'U.O.S.D. Ortopedia',
        desc: 'Trattamento chirurgico e conservativo delle patologie osteoarticolari.',
        href: '#',
      },
      {
        nome: 'U.O.C. Oculistica',
        desc: "Diagnosi e trattamento delle malattie dell'occhio.",
        href: '#',
      },
      {
        nome: 'U.O.S.D. Otorinolaringoiatria',
        desc: 'Patologie di orecchio, naso e gola in regime ambulatoriale e di degenza.',
        href: '#',
      },
      {
        nome: 'U.O.C. Piac Oncologico',
        desc: 'Percorsi integrati per la diagnosi e la cura dei pazienti oncologici.',
        href: '#',
      },
    ],
  },
  {
    cat: 'Medicina',
    items: [
      {
        nome: 'U.O.C. Attività Riabilitative',
        desc: 'Riabilitazione motoria e funzionale in regime di degenza e ambulatoriale.',
        href: '#',
      },
      {
        nome: 'U.O.S.D. Medicina Generale e Reumatologia',
        desc: 'Degenza internistica e gestione delle patologie reumatologiche.',
        href: '#',
      },
    ],
  },
  {
    cat: 'Servizi diagnostici e di supporto',
    items: [
      {
        nome: 'U.O.S.D. Radiologia',
        desc: 'Diagnostica per immagini: RX, TC, ecografia.',
        href: '#',
      },
      {
        nome: 'U.O.C. Medicina Trasfusionale',
        desc: 'Raccolta, lavorazione e distribuzione degli emocomponenti.',
        href: '#',
      },
      {
        nome: 'U.O.C. Farmacia Ospedaliera Area Nord',
        desc: 'Dispensazione e gestione del farmaco in ambito ospedaliero.',
        href: '#',
      },
    ],
  },
];

// ── 4. A chi è rivolto/a (campo AGID necessario) ──
const ACHIBlock = () => (
  <Section bg="var(--bi-bg-alt)" id="a-chi-e-rivolto">
    <div style={{ maxWidth: 720 }}>
      <SectionHeading title="A chi è rivolto" />
      <p style={{ fontSize: 16, color: 'var(--bi-ink-700)', lineHeight: 1.7, margin: '0 0 16px' }}>
        Il Presidio Ospedaliero di Ponticelli garantisce assistenza sanitaria di qualità a cittadini
        italiani e stranieri, residenti e non, rispettando sempre la dignità della persona.
      </p>
      <p style={{ fontSize: 16, color: 'var(--bi-ink-700)', lineHeight: 1.7, margin: '0 0 16px' }}>
        Grazie alle Unità Operative di Degenza e ai Servizi Diagnostici moderni, l'ospedale offre
        cure mediche, diagnosi accurate e percorsi terapeutici integrati per pazienti di tutte le
        età.
      </p>
      <p style={{ fontSize: 16, color: 'var(--bi-ink-700)', lineHeight: 1.7, margin: '0 0 20px' }}>
        I presidi ospedalieri rappresentano un punto di riferimento per la salute del territorio,
        con personale qualificato, tecnologie avanzate e servizi organizzati per garantire cure
        sicure, tempestive e accessibili.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['Tutti i cittadini', 'Anziani', 'Donne', 'Bambini', 'Persone con disabilità'].map(
          (chip) => (
            <span
              key={chip}
              style={{
                padding: '6px 14px',
                borderRadius: 99,
                background: 'var(--bi-primary-050)',
                color: 'var(--bi-primary-800)',
                fontSize: 13,
                fontWeight: 600,
                border: '1px solid var(--bi-primary-100)',
              }}
            >
              {chip}
            </span>
          )
        )}
      </div>
    </div>
  </Section>
);

// ── 5. Dove (campo AGID necessario) ──
const DoveBlock = () => {
  const { isMobile } = useResponsive();
  return (
    <Section bg="var(--bi-surface)" id="dove">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHeading title="Dove" />
          <div
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'var(--bi-primary-050)',
                color: 'var(--bi-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name="hospital" size={20} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: 'var(--bi-ink-900)',
                  lineHeight: 1.4,
                }}
              >
                Via Enrico Russo, 11
                <br />
                80147 Ponticelli, Napoli (NA)
              </div>
              <div style={{ fontSize: 13, color: 'var(--bi-ink-500)', marginTop: 6 }}>
                Distretto Sanitario 32 — Barra/San Giovanni/Ponticelli
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Via+Enrico+Russo+Ponticelli+Napoli"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              background: 'var(--bi-primary)',
              color: '#fff',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            <Icon name="hospital" size={15} />
            Apri in mappa
            <Icon name="external" size={13} />
          </a>
        </div>

        {/* Mappa placeholder */}
        {!isMobile && (
          <div
            className="placeholder-img"
            style={{
              aspectRatio: '4/3',
              borderRadius: 12,
              fontSize: 12,
              color: 'var(--bi-primary-800)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <Icon name="hospital" size={36} />
            <div style={{ fontWeight: 700 }}>Mappa — Via Enrico Russo, Ponticelli</div>
            <div style={{ opacity: 0.7, fontSize: 11 }}>
              OpenStreetMap / Leaflet.js — da integrare
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

// ── 6. Come accedere (campo AGID necessario — assorbe auto/treno/accessibilità/parcheggi) ──
const ComeAccedereBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-bg-alt)" id="come-accedere">
    <SectionHeading title="Come accedere" />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: isMobile ? 16 : 28,
        marginBottom: 24,
      }}
    >
      {[
        {
          icon: 'car',
          title: 'In auto',
          items: [
            'Tangenziale di Napoli, uscita Ponticelli',
            "Via Enrico Russo: 500 m dall'uscita",
            'Parcheggio convenzionato in Via Circumvallazione (gratuito 2h)',
          ],
        },
        {
          icon: 'train',
          title: 'Treno e mezzi pubblici',
          items: [
            'Metro linea 1 — stazione Brin (15 min a piedi)',
            'ANM linee 154/156 — fermata Ospedale del Mare',
            'ANM linea 195 — fermata Ponticelli',
          ],
        },
        {
          icon: 'accessibility',
          title: 'Accessibilità',
          items: [
            "4 posti disabili riservati all'ingresso principale",
            'Rampe e ascensori in tutti i padiglioni',
            'Sportello URP con induttore magnetico',
          ],
        },
      ].map((s, i) => (
        <div key={i}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'var(--bi-primary-050)',
                color: 'var(--bi-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name={s.icon} size={18} />
            </div>
            <h4
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                color: 'var(--bi-ink-900)',
              }}
            >
              {s.title}
            </h4>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            {s.items.map((item, j) => (
              <li
                key={j}
                style={{
                  fontSize: 14,
                  color: 'var(--bi-ink-700)',
                  lineHeight: 1.5,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div
      style={{
        padding: '14px 18px',
        background: 'var(--bi-primary-050)',
        borderRadius: 8,
        fontSize: 13,
        color: 'var(--bi-primary-800)',
      }}
    >
      Per prenotare una visita specialistica consulta la pagina{' '}
      <a href="page-come-fare-per.html" style={{ color: 'var(--bi-primary)', fontWeight: 700 }}>
        Come fare per prenotare una visita
      </a>
      .
    </div>
  </Section>
  );
};

// ── 7. Orari di apertura (campo AGID necessario) ──
const OrariAperturaBlock = () => {
  const { isMobile } = useResponsive();
  return (
    <Section bg="var(--bi-surface)" id="orari">
      <div style={{ maxWidth: 680 }}>
        <SectionHeading title="Orari di apertura" />
        <div
          style={{
            background: 'var(--bi-bg-alt)',
            border: '1px solid var(--bi-border)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {[
            {
              servizio: 'Centralino / Accettazione',
              orari: '24 ore su 24, 7 giorni su 7',
            },
            { servizio: 'Pronto Soccorso', orari: '24 ore su 24, 7 giorni su 7' },
            {
              servizio: 'Ambulatori specialistici',
              orari: 'Lunedì–Venerdì 8:00–18:00 · Sabato 8:00–13:00',
            },
            {
              servizio: 'Diagnostica per immagini (urgenza)',
              orari: '24 ore su 24, 7 giorni su 7',
            },
            {
              servizio: 'Laboratorio Analisi (prelievi)',
              orari: 'Lunedì–Sabato 7:00–12:30',
            },
            { servizio: 'URP ospedaliero', orari: 'Lunedì–Venerdì 9:00–13:00' },
            {
              servizio: 'Orari di visita ai degenti',
              orari: '11:00–12:30 e 15:30–17:30 (feriali) · 10:00–12:00 e 15:00–17:00 (festivi)',
            },
          ].map((row, i, arr) => (
            <div
              key={i}
              style={{
                display: isMobile ? 'flex' : 'grid',
                flexDirection: 'column',
                gridTemplateColumns: '1.4fr 1.6fr',
                gap: isMobile ? 8 : undefined,
                padding: '14px 24px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'var(--bi-surface)',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: 'var(--bi-ink-900)',
                }}
              >
                {row.servizio}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: isMobile ? 'var(--bi-ink-500)' : 'var(--bi-ink-700)',
                }}
              >
                {row.orari}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            padding: '12px 16px',
            background: 'var(--bi-primary-050)',
            borderRadius: 8,
            fontSize: 13,
            color: 'var(--bi-primary-800)',
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <Icon name="alert" size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          Terapia Intensiva e Neonatologia seguono orari speciali — contattare il reparto
          direttamente.
        </div>
      </div>
    </Section>
  );
};

// ── 8. Contatti (campo AGID necessario, max 255 car. per item) ──
const ContattiBlock = () => {
  const { isMobile } = useResponsive();
  return (
    <Section bg="var(--bi-bg-alt)" id="contatti">
      <SectionHeading title="Contatti" />
      <div
        style={{
          background: 'var(--bi-surface)',
          border: '1px solid var(--bi-border)',
          borderRadius: 12,
          overflow: 'hidden',
          maxWidth: 640,
        }}
      >
        {[
          { label: 'Centralino', tel: '081 1959 1111', orari: '24h/24' },
          {
            label: 'URP ospedaliero',
            tel: '081 1959 2150',
            orari: 'Lun–Ven 9:00–13:00',
          },
          {
            label: 'Email istituzionale',
            email: 'ospedale.delmare@aslnapoli1centro.it',
          },
          { label: 'PEC', pec: 'ospedaledelmare@pec.aslna1centro.it' },
        ].map((n, i, arr) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
              gap: isMobile ? 8 : 24,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--bi-ink-900)',
                }}
              >
                {n.label}
              </div>
              {n.orari && (
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--bi-ink-500)',
                    marginTop: 2,
                  }}
                >
                  {n.orari}
                </div>
              )}
            </div>
            {n.tel ? (
              <a
                href={`tel:${n.tel.replace(/\s/g, '')}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--bi-primary)',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                <Icon name="phone" size={15} />
                {n.tel}
              </a>
            ) : n.email ? (
              <a
                href={`mailto:${n.email}`}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--bi-primary)',
                  textDecoration: 'none',
                }}
              >
                {n.email}
              </a>
            ) : (
              <span style={{ fontSize: 14, color: 'var(--bi-ink-700)' }}>{n.pec}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

// ── 9. Servizi e prestazioni (campo AGID necessario — Card Services) ──
const ServiziBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-surface)" id="servizi">
    <SectionHeading
      title="Servizi e prestazioni"
      subtitle="Servizi erogati dall'Ospedale del Mare."
    />
    {SERVIZI.map((cat) => (
      <div key={cat.cat} style={{ marginBottom: 36 }}>
        <h3
          style={{
            fontFamily: 'var(--ff-sans)',
            fontSize: 13,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: 'var(--bi-primary)',
            borderBottom: '2px solid var(--bi-primary-100)',
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          {cat.cat}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {cat.items.map((s) => (
            <a
              key={s.nome}
              href={s.href}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                padding: '16px 20px',
                background: 'var(--bi-bg-alt)',
                border: s.ps ? '2px solid #C62828' : '1px solid var(--bi-border)',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: s.ps ? '#FFEBEE' : 'var(--bi-primary-050)',
                  color: s.ps ? '#C62828' : 'var(--bi-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name={s.ps ? 'alert' : 'stethoscope'} size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: s.ps ? '#C62828' : 'var(--bi-ink-900)',
                    lineHeight: 1.3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  {s.nome}
                  {s.ps && (
                    <span
                      style={{
                        padding: '2px 7px',
                        background: '#C62828',
                        color: '#fff',
                        borderRadius: 4,
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      24/7
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--bi-ink-500)',
                    marginTop: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {s.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    ))}
  </Section>
  );
};

// ── 10. Responsabile della struttura (campo AGID necessario — Card People) ──
const ResponsabileBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-bg-alt)" id="responsabile">
    <SectionHeading title="Responsabile della struttura" />
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 12 : 20,
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: isMobile ? '16px' : '24px',
        background: 'var(--bi-surface)',
        border: '1px solid var(--bi-border)',
        borderRadius: 12,
        maxWidth: isMobile ? '100%' : 480,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          flexShrink: 0,
          background: 'var(--bi-primary-100)',
          color: 'var(--bi-primary-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 700,
          fontFamily: 'var(--ff-sans)',
        }}
      >
        MB
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--bi-ink-900)' }}>
          Dott.ssa Alessandra Gimigliano
        </div>
        <div style={{ fontSize: 14, color: 'var(--bi-ink-500)', marginTop: 4 }}>
          Direzione medica di presidio — Ospedale del Mare
        </div>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 10,
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--bi-primary)',
            textDecoration: 'none',
          }}
        >
          Scheda persona <Icon name="external" size={12} />
        </a>
      </div>
    </div>
  </Section>
  );
};

// ── 10b. URP ──
const UrpBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-surface)" id="urp">
    <SectionHeading title="Ufficio Relazioni con il Pubblico (URP)" />
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 12 : 20,
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: isMobile ? '16px' : '24px',
        background: 'var(--bi-bg-alt)',
        border: '1px solid var(--bi-border)',
        borderRadius: 12,
        maxWidth: isMobile ? '100%' : 480,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          flexShrink: 0,
          background: 'var(--bi-primary-100)',
          color: 'var(--bi-primary-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 700,
          fontFamily: 'var(--ff-sans)',
        }}
      >
        CA
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--bi-ink-900)' }}>
          Dott.ssa Cira Ascione
        </div>
        <div style={{ fontSize: 14, color: 'var(--bi-ink-500)', marginTop: 4 }}>
          Responsabile URP — Ospedale del Mare
        </div>
        <a
          href="tel:08118434924"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 10,
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--bi-primary)',
            textDecoration: 'none',
          }}
        >
          <Icon name="phone" size={13} /> 081 184 34924
        </a>
        <div style={{ fontSize: 13, color: 'var(--bi-ink-500)', marginTop: 6 }}>
          Lunedì–Venerdì 09:00–10:30
        </div>
      </div>
    </div>
  </Section>
  );
};

// ── 10c. CUP ──
const CupBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-bg-alt)" id="cup">
    <SectionHeading title="Centro Unico di Prenotazione (CUP)" />
    <div style={{ maxWidth: 540 }}>
      {[
        { label: 'Telefono', value: '08118434926', tel: true },
        { label: 'Email', value: 'direzionesanitaria@aslnapoli1centro.it', email: true },
        { label: 'Lunedì–Venerdì', value: '08:30–15:00' },
        { label: 'Sabato', value: '08:00–11:00' },
      ].map((row, i, arr) => (
        <div
          key={i}
          style={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: 'column',
            gridTemplateColumns: '1.4fr 1.6fr',
            gap: isMobile ? 4 : 12,
            padding: isMobile ? '12px 0' : '14px 0',
            borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <span style={{ fontSize: 14, color: 'var(--bi-ink-500)', fontWeight: 500 }}>
            {row.label}
          </span>
          {row.tel ? (
            <a
              href={`tel:${row.value}`}
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--bi-primary)',
                textDecoration: 'none',
              }}
            >
              {row.value}
            </a>
          ) : row.email ? (
            <a
              href={`mailto:${row.value}`}
              style={{
                fontSize: 14,
                color: 'var(--bi-primary)',
                textDecoration: 'none',
                wordBreak: 'break-all',
              }}
            >
              {row.value}
            </a>
          ) : (
            <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--bi-ink-900)' }}>
              {row.value}
            </span>
          )}
        </div>
      ))}
    </div>
  </Section>
  );
};

// ── 10d. Cartella clinica ──
const CartellaClinicaBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-surface)" id="cartella-clinica">
    <SectionHeading title="Cartella clinica" />
    <div style={{ maxWidth: isMobile ? '100%' : 680, display: 'flex', flexDirection: 'column', gap: isMobile ? 14 : 20 }}>
      <div>
        <p style={{ fontSize: 15, color: 'var(--bi-ink-700)', margin: '0 0 8px', lineHeight: 1.6 }}>
          La richiesta può essere effettuata via mail allegando:
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: 20,
            fontSize: 15,
            color: 'var(--bi-ink-700)',
            lineHeight: 1.8,
          }}
        >
          <li>modulo compilato</li>
          <li>eventuale delega</li>
          <li>copia del documento di riconoscimento del richiedente e/o delegato</li>
        </ul>
      </div>
      <p style={{ fontSize: 15, color: 'var(--bi-ink-700)', margin: 0, lineHeight: 1.6 }}>
        Per il ritiro è necessario esibire il documento originale valido. In caso di delega, occorre
        presentare anche la documentazione del paziente e del delegato.
      </p>
      <div>
        <div style={{ fontSize: 13, color: 'var(--bi-ink-500)', marginBottom: 6 }}>
          Email richiesta
        </div>
        <a
          href="mailto:direzionesanitaria@aslnapoli1centro.it"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: 'var(--bi-primary)',
            textDecoration: 'none',
          }}
        >
          direzionesanitaria@aslnapoli1centro.it
        </a>
      </div>
      <div style={{ maxWidth: 540 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--bi-ink-700)', marginBottom: 8 }}>
          Orari ritiro
        </div>
        {[
          { sportello: 'Presso il C.U.P.', orari: 'Lunedì–Venerdì 09:00–13:00' },
          { sportello: "Presso l'ufficio archivio", orari: 'Martedì e Giovedì 11:00–12:30' },
        ].map((row, i, arr) => (
          <div
            key={i}
            style={{
              display: isMobile ? 'flex' : 'grid',
              flexDirection: 'column',
              gridTemplateColumns: '1.4fr 1.6fr',
              gap: isMobile ? 4 : 12,
              padding: isMobile ? '12px 0' : '14px 0',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
            }}
          >
            <span style={{ fontSize: 14, color: 'var(--bi-ink-500)', fontWeight: 500 }}>
              {row.sportello}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--bi-ink-900)' }}>
              {row.orari}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Section>
  );
};

// ── 11a. Direzione Medica di Presidio ──
const DirMedicaBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-bg-alt)" id="direzione-medica">
    <SectionHeading title="U.O.C. Direzione Medica di Presidio" />
    <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <p style={{ fontSize: 15, color: 'var(--bi-ink-700)', margin: 0, lineHeight: 1.6 }}>
        La Direzione Medica di Presidio svolge funzioni igienico-sanitarie, organizzative e
        gestionali. Coordina i servizi ospedalieri per garantire l'efficienza delle prestazioni e la
        tutela del paziente.
      </p>
      <div style={{ maxWidth: 540 }}>
        {[
          { servizio: 'Segreteria di Direzione', tel: '08118434902' },
          { servizio: 'Sala Morgue', tel: '08118434983' },
        ].map((row, i, arr) => (
          <div
            key={i}
            style={{
              display: isMobile ? 'flex' : 'grid',
              flexDirection: 'column',
              gridTemplateColumns: '1.4fr 1.6fr',
              gap: isMobile ? 4 : 12,
              padding: isMobile ? '12px 0' : '14px 0',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
            }}
          >
            <span style={{ fontSize: 14, color: 'var(--bi-ink-500)', fontWeight: 500 }}>
              {row.servizio}
            </span>
            <a
              href={`tel:${row.tel}`}
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--bi-primary)',
                textDecoration: 'none',
              }}
            >
              {row.tel}
            </a>
          </div>
        ))}
      </div>
    </div>
  </Section>
  );
};

// ── 11b. SAO ──
const SaoBlock = () => {
  const { isMobile } = useResponsive();
  return (
  <Section bg="var(--bi-surface)" id="sao">
    <SectionHeading title="U.O.C. Servizi Amministrativi Ospedalieri Area Nord – SAO" />
    <div style={{ maxWidth: 740 }}>
      {[
        { servizio: 'Segreteria di Direzione', tel: '08118437075' },
        {
          servizio: 'Gestione richieste dagli Affari Legali per contenzioso lavoro',
          tel: '08118437075',
        },
        { servizio: 'Gestione specialisti ambulatoriali', tel: '08118437094' },
        {
          servizio:
            'Gestione rimborso ticket, Gestione cassa, Recupero codici bianchi, Gestione NSIS, Gestione liquidazione, Gestione SAP',
          tel: '08118437124',
        },
      ].map((row, i, arr) => (
        <div
          key={i}
          style={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: 'column',
            gridTemplateColumns: '2fr 1fr',
            gap: isMobile ? 4 : 12,
            padding: isMobile ? '12px 0' : '14px 0',
            borderBottom: i < arr.length - 1 ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <span style={{ fontSize: 14, color: 'var(--bi-ink-700)', lineHeight: 1.5 }}>
            {row.servizio}
          </span>
          <a
            href={`tel:${row.tel}`}
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--bi-primary)',
              textDecoration: 'none',
            }}
          >
            {row.tel}
          </a>
        </div>
      ))}
    </div>
  </Section>
  );
};

// ── 11. Galleria (campo AGID opzionale, incluso — griglia 3 colonne desktop) ──
const GalleriaBlock = () => {
  const { isMobile, isCompact } = useResponsive();
  return (
    <Section bg="var(--bi-surface)" id="galleria">
      <SectionHeading title="Galleria" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isCompact ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: 12,
          alignItems: 'start',
        }}
      >
        {GALLERIA.map((g, i) => (
          <div
            key={i}
            className="placeholder-img"
            style={{
              gridColumn: isMobile
                ? 'span 1'
                : isCompact
                ? `span ${Math.min(g.span, 2)}`
                : `span ${Math.min(g.span, 3)}`,
              aspectRatio: !isMobile && !isCompact && g.span === 2 ? '16/7' : '16/9',
              borderRadius: 10,
              fontSize: 11,
              color: 'var(--bi-primary-800)',
            }}
          >
            FOTO REALE · {g.label}
          </div>
        ))}
      </div>
    </Section>
  );
};

// ── Pagina principale ──
const PageOspedaleMare = () => (
  <div
    data-screen-label="06 Ospedale del Mare — pagina foglia"
    style={{ background: 'var(--bi-bg)' }}
  >
    <TopBar />
    <BrandRow />
    <StickyHeader activeItem="strutture" />

    {/* ── Breadcrumb ── */}
    <Breadcrumb
      items={[
        { label: 'Home', href: 'index.html' },
        { label: 'Strutture', href: '#' },
        { label: 'Ospedali', href: 'page-ospedali.html' },
        { label: 'Ospedale del Mare' },
      ]}
    />

    {/* ── 3. Hero — Nome (H1), Descrizione breve, Immagine, Dove ── */}
    <div
      style={{
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${import.meta.env.BASE_URL}images/corsia.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(0,26,36,0.82) 0%, rgba(0,121,140,0.82) 100%)',
        }}
      />
      <div className="container" style={{ position: 'relative', padding: '64px 0 56px' }}>
        <div style={{ maxWidth: 640 }}>
          {/* Campo: Nome della struttura (H1) */}
          <h1
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 500,
              lineHeight: 1.1,
              margin: '0 0 8px',
              color: '#fff',
            }}
          >
            Ospedale del Mare
          </h1>

          {/* Campo: Tipo presidio + servizi erogati */}
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.4,
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 6px',
              textTransform: 'uppercase',
            }}
          >
            P.O. di II livello con Pronto Soccorso
          </p>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 6px',
              lineHeight: 1.5,
            }}
          >
            L'assistenza ospedaliera viene erogata attraverso:
          </p>
          <ul
            style={{
              margin: '0 0 16px',
              paddingLeft: 20,
              fontSize: 15,
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
            }}
          >
            <li>Ricovero ordinario</li>
            <li>Ricovero a ciclo diurno</li>
            <li>Specialistica ambulatoriale</li>
            <li>Pronto soccorso</li>
          </ul>

          {/* Campo: Dove — indirizzo e contatti rapidi */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              fontSize: 13,
              color: 'rgba(255,255,255,0.72)',
              marginBottom: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="hospital" size={13} />
              <span>
                <strong style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Sede</strong>
                &nbsp; Via Enrico Russo, 11 — Ponticelli, Napoli
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="phone" size={13} />
              <span>
                <strong style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>
                  Centralino
                </strong>
                &nbsp; 081 1959 1111
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="mail" size={13} />
              <span>
                <strong style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Email</strong>
                &nbsp; direzionesanitaria@aslnapoli1centro.it
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="mail" size={13} />
              <span>
                <strong style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>PEC</strong>
                &nbsp; direzionesanitaria@pec.aslna1centro.it
              </span>
            </div>
          </div>

          {/* Link rapidi */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#dove"
              style={{
                padding: '10px 18px',
                border: '1.5px solid rgba(255,255,255,0.6)',
                borderRadius: 6,
                color: '#fff',
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Icon name="hospital" size={14} /> Dove
            </a>
            <a
              href="#contatti"
              style={{
                padding: '10px 18px',
                border: '1.5px solid rgba(255,255,255,0.6)',
                borderRadius: 6,
                color: '#fff',
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Icon name="phone" size={14} /> Contatti
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* ── 4. A chi è rivolto/a ── */}
    <ACHIBlock />

    {/* ── 5. Dove ── */}
    <DoveBlock />

    {/* ── 6. Come accedere ── */}
    <ComeAccedereBlock />

    {/* ── 7. Orari di apertura ── */}
    <OrariAperturaBlock />

    {/* ── 8. Contatti ── */}
    <ContattiBlock />

    {/* ── 9. Servizi e prestazioni ── */}
    <ServiziBlock />

    {/* ── 10. Responsabile della struttura ── */}
    <ResponsabileBlock />

    {/* ── 10b. URP ── */}
    <UrpBlock />

    {/* ── 10c. CUP ── */}
    <CupBlock />

    {/* ── 10d. Cartella clinica ── */}
    <CartellaClinicaBlock />

    {/* ── 11a. Direzione Medica di Presidio ── */}
    <DirMedicaBlock />

    {/* ── 11b. SAO ── */}
    <SaoBlock />

    {/* ── 11. Galleria ── */}
    <GalleriaBlock />

    {/* ── 12. Ultimo aggiornamento (campo AGID necessario) ── */}
    <div className="container" style={{ padding: '20px 0 8px' }}>
      <p style={{ fontSize: 13, color: 'var(--bi-ink-500)', margin: 0 }}>
        Ultimo aggiornamento: 22 aprile 2026
      </p>
    </div>

    {/* ── 13. [F3] Valutazione chiarezza informativa ── */}
    <FeedbackWidget />

    {/* ── 14. Footer ── */}
    <Footer />
  </div>
);

export { PageOspedaleMare };
