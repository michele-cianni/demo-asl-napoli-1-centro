import React from 'react';
import { Icon } from '../icons.jsx';
import {
  Button,
  Badge,
  ArrowLink,
  Section,
  SectionHeading,
  Breadcrumb,
  Eyebrow,
} from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';

// ─── Pagina Ritiro referti online (PRD §5.4 / F5) ───

// ── Badge autenticazione SPID/CIE/CNS ──
const AuthBadges = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
    {[
      { label: 'SPID', sub: 'Livello 2', color: '#003087' },
      { label: 'CIE', sub: 'con PIN', color: '#006633' },
      { label: 'CNS', sub: 'con PIN', color: '#8B0000' },
    ].map((a) => (
      <div
        key={a.label}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          borderRadius: 8,
          border: `1.5px solid ${a.color}22`,
          background: `${a.color}0A`,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            background: a.color,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 11,
            letterSpacing: 0.5,
          }}
        >
          {a.label}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#333' }}>{a.label}</div>
          <div style={{ fontSize: 11, color: '#777' }}>{a.sub}</div>
        </div>
      </div>
    ))}
  </div>
);

// ── Pagina Referti ──
const PageReferti = () => {
  const steps = [
    {
      icon: 'globe',
      n: 1,
      title: 'Autenticati sul portale regionale',
      desc: 'Accedi a FSE Campania con SPID livello 2, CIE con PIN o CNS. Se non hai ancora uno di questi strumenti, trovi le istruzioni nella sezione "Cosa serve" qui sotto.',
    },
    {
      icon: 'document',
      n: 2,
      title: "Seleziona il referto dall'elenco",
      desc: 'Nel tuo Fascicolo Sanitario trovi tutti i referti disponibili in ordine cronologico. Puoi filtrare per tipologia (laboratorio, radiologia, anatomia patologica, ecc.).',
    },
    {
      icon: 'download',
      n: 3,
      title: 'Scarica il PDF firmato digitalmente',
      desc: 'Il referto è un PDF con firma digitale del professionista sanitario. Ha lo stesso valore legale del documento cartaceo.',
    },
    {
      icon: 'shield',
      n: 4,
      title: 'Conserva o condividi come preferisci',
      desc: 'Puoi salvare il PDF sul tuo dispositivo, stamparlo o condividerlo con altri medici tramite il portale FSE.',
    },
  ];

  const tempi = [
    { tipo: 'Esami di laboratorio', tempi: '3–5 giorni lavorativi' },
    {
      tipo: 'Referti radiologici (Rx, TC, RMN)',
      tempi: '7–10 giorni lavorativi',
    },
    { tipo: 'Anatomia patologica', tempi: '15–20 giorni lavorativi' },
    {
      tipo: 'Cardiologia (ECG, ecocardiogramma)',
      tempi: '5–7 giorni lavorativi',
    },
    {
      tipo: 'Altre prestazioni specialistiche',
      tempi: '10–15 giorni lavorativi',
    },
  ];

  return (
    <div data-screen-label="04 Ritiro referti online" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader active="servizi" />
      <Breadcrumb
        items={[
          { label: 'Home', href: 'index.html' },
          { label: 'Servizi e prestazioni', href: 'page-servizi.html' },
          { label: 'Esami e analisi', href: '#' },
          { label: 'Ritiro referti online' },
        ]}
      />

      {/* Hero area pagina */}
      <div style={{ background: 'var(--bi-surface)', padding: '40px 0 32px' }}>
        <div className="container">
          <Eyebrow>Servizi e prestazioni › Esami e analisi</Eyebrow>
          <h1
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 500,
              lineHeight: 1.1,
              color: 'var(--bi-ink-900)',
              margin: '0 0 16px',
            }}
          >
            Ritiro referti online
          </h1>
          <p
            style={{
              fontSize: 17,
              color: 'var(--bi-ink-500)',
              maxWidth: 640,
              lineHeight: 1.6,
              margin: '0 0 28px',
            }}
          >
            Scarica in autonomia i referti dei tuoi esami tramite il Fascicolo Sanitario Elettronico
            della Regione Campania, senza recarti fisicamente in ASL.
          </p>

          {/* CTA primaria — autenticazione FSE Campania */}
          <div
            style={{
              padding: '32px 40px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, var(--bi-primary), var(--bi-primary-800))',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              marginBottom: 0,
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 19,
                  color: '#fff',
                  marginBottom: 6,
                }}
              >
                Accedi al Fascicolo Sanitario Elettronico
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.5,
                }}
              >
                Scegli il metodo di autenticazione — i tuoi referti saranno disponibili subito dopo
                l'accesso.
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Button variant="white" size="lg" icon="users">
                Accedi con SPID
              </Button>
              <Button variant="outlineWhite" size="lg" icon="users">
                Accedi con CIE
              </Button>
            </div>

            <div
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.6)',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: 14,
              }}
            >
              Non hai ancora SPID o CIE?{' '}
              <a href="#cosa-serve" style={{ color: '#fff', fontWeight: 600 }}>
                Scopri come ottenerli →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Section bg="var(--bi-surface)" pad="0 0 48px">
        <div>
          {/* ── A chi è rivolto ── */}
          <div style={{ marginBottom: 40, marginTop: 40 }}>
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                marginBottom: 12,
              }}
            >
              A chi è rivolto
            </h2>
            <ul
              style={{
                paddingLeft: 20,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                fontSize: 15,
                color: 'var(--bi-ink-700)',
                lineHeight: 1.5,
              }}
            >
              <li>
                Assistiti SSN iscritti all'ASL Napoli 1 Centro con Fascicolo Sanitario Elettronico
                attivo
              </li>
              <li>Caregiver con delega attiva per scaricare referti di un familiare</li>
            </ul>
          </div>

          {/* ── Come funziona (4 passi) ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                marginBottom: 24,
              }}
            >
              Come funziona
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 20,
                    paddingBottom: i < steps.length - 1 ? 24 : 0,
                    position: 'relative',
                  }}
                >
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 19,
                        top: 44,
                        bottom: 0,
                        width: 2,
                        background: 'var(--bi-primary-100)',
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: 'var(--bi-primary)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 17,
                      zIndex: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 17,
                        color: 'var(--bi-ink-900)',
                        marginBottom: 6,
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        color: 'var(--bi-ink-600)',
                        lineHeight: 1.65,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tempi di pubblicazione ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                marginBottom: 16,
              }}
            >
              Tempi di pubblicazione referti
            </h2>
            <p
              style={{
                fontSize: 14,
                color: 'var(--bi-ink-500)',
                marginBottom: 16,
                lineHeight: 1.6,
              }}
            >
              I tempi sono indicativi e calcolati dalla data di esecuzione della prestazione. Nei
              periodi di elevata attività possono subire variazioni.
            </p>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ background: 'var(--bi-primary-050)' }}>
                  {['Tipologia di esame', 'Disponibile online entro'].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '10px 14px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: 'var(--bi-primary-800)',
                        borderBottom: '2px solid var(--bi-primary-100)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tempi.map((r, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--bi-border)',
                      background: i % 2 === 0 ? 'var(--bi-surface)' : 'var(--bi-bg-alt)',
                    }}
                  >
                    <td
                      style={{
                        padding: '10px 14px',
                        color: 'var(--bi-ink-700)',
                      }}
                    >
                      {r.tipo}
                    </td>
                    <td
                      style={{
                        padding: '10px 14px',
                        fontWeight: 700,
                        color: 'var(--bi-primary)',
                      }}
                    >
                      {r.tempi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Cosa serve ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                marginBottom: 12,
              }}
            >
              Cosa serve
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                {
                  icon: 'globe',
                  text: "SPID livello 2 — se non ce l'hai, segui la guida per ottenerlo",
                },
                {
                  icon: 'users',
                  text: "CIE (Carta d'Identità Elettronica) con PIN — in alternativa a SPID",
                },
                {
                  icon: 'document',
                  text: 'CNS (Carta Nazionale dei Servizi) con PIN — in alternativa',
                },
                {
                  icon: 'shield',
                  text: 'Tessera sanitaria — per verificare il tuo codice fiscale',
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    borderRadius: 6,
                    background: 'var(--bi-primary-050)',
                    border: '1px solid var(--bi-primary-100)',
                  }}
                >
                  <Icon name={r.icon} size={18} color="var(--bi-primary)" />
                  <span style={{ fontSize: 15, color: 'var(--bi-ink-800)' }}>{r.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <a
                href="#"
                style={{
                  color: 'var(--bi-primary)',
                  fontWeight: 700,
                  fontSize: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                Come ottenere SPID <Icon name="arrow-right" size={14} />
              </a>
            </div>
          </div>

          {/* ── Problemi di accesso ── */}
          <div
            style={{
              marginBottom: 40,
              padding: '20px 24px',
              borderRadius: 8,
              background: 'var(--bi-warm-100)',
              border: '1.5px solid var(--bi-warm-100)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                margin: '0 0 10px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Icon name="info" size={22} color="var(--bi-warm)" /> Problemi di accesso o referto
              non trovato?
            </h2>
            <ul
              style={{
                paddingLeft: 20,
                margin: 0,
                fontSize: 14,
                color: 'var(--bi-ink-700)',
                lineHeight: 1.65,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <li>Verifica che il tuo SPID/CIE sia attivo e al livello corretto (L2).</li>
              <li>
                Controlla i tempi di pubblicazione nella tabella qui sopra: il referto potrebbe non
                essere ancora disponibile.
              </li>
              <li>Se il portale FSE è irraggiungibile, attendi qualche minuto e riprova.</li>
              <li>
                Se hai trovato un errore in questa pagina o un&apos;informazione da aggiornare,
                scrivi alla{' '}
                <a href="page-redazione-web.html" style={{ color: 'var(--bi-primary)' }}>
                  redazione web
                </a>{' '}
                oppure a <strong>redazione@aslnapoli1centro.it</strong>.
              </li>
              <li>
                Per problemi tecnici al portale regionale: numero verde <strong>800 012 333</strong>{' '}
                (gratuito).
              </li>
            </ul>
          </div>

          {/* ── Delega ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                marginBottom: 12,
              }}
            >
              Scaricare referti per un familiare (Delega)
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--bi-ink-600)',
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Se sei caregiver o genitore di un minore, puoi essere delegato a scaricare i referti
              di un familiare. La delega si attiva tramite il portale FSE Campania o presentandosi
              allo sportello con documento di identità e modulo di delega.
            </p>
            <a
              href="#"
              style={{
                color: 'var(--bi-primary)',
                fontWeight: 700,
                fontSize: 14,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              Scarica il modulo di delega (PDF) <Icon name="download" size={14} />
            </a>
          </div>

          {/* ── Ritiro cartaceo ── */}
          <div
            style={{
              marginBottom: 40,
              padding: '20px 24px',
              borderRadius: 8,
              background: 'var(--bi-bg-alt)',
              border: '1px solid var(--bi-border)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--bi-ink-900)',
                margin: '0 0 10px',
              }}
            >
              Ritiro cartaceo allo sportello
            </h2>
            <p
              style={{
                fontSize: 14,
                color: 'var(--bi-ink-600)',
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Se non disponi di strumenti digitali, puoi ritirare il referto direttamente allo
              sportello del presidio dove hai effettuato l'esame.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 12,
              }}
            >
              {[
                {
                  sede: 'Ospedale del Mare — Ponticelli',
                  orari: 'Lun–Ven 8:00–13:00 | Mar–Gio 14:30–17:00',
                },
                {
                  sede: 'P.O. San Giovanni Bosco — Napoli',
                  orari: 'Lun–Ven 8:00–13:30 | Mar–Gio 15:00–17:30',
                },
                {
                  sede: 'P.O. dei Pellegrini — Napoli',
                  orari: 'Lun–Ven 8:00–13:00 | Mer 14:30–16:30',
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 6,
                    background: 'var(--bi-surface)',
                    border: '1px solid var(--bi-border)',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: 'var(--bi-ink-900)',
                      marginBottom: 4,
                    }}
                  >
                    {loc.sede}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'var(--bi-ink-500)',
                      lineHeight: 1.5,
                    }}
                  >
                    {loc.orari}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Box privacy GDPR ── */}
          <div
            style={{
              marginBottom: 40,
              padding: '16px 20px',
              borderRadius: 8,
              background: 'var(--bi-ink-050, #f8f9fa)',
              border: '1px solid var(--bi-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <Icon
              name="shield"
              size={20}
              color="var(--bi-ink-500)"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: 'var(--bi-ink-700)',
                  marginBottom: 4,
                }}
              >
                Privacy e trattamento dei dati sanitari
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--bi-ink-500)',
                  lineHeight: 1.6,
                }}
              >
                I dati dei referti sono trattati ai sensi del Reg. UE 2016/679 (GDPR) e del D.Lgs.
                196/2003. L'accesso avviene in modo sicuro tramite autenticazione forte
                (SPID/CIE/CNS).{' '}
                <a href="#" style={{ color: 'var(--bi-primary)', fontWeight: 600 }}>
                  Informativa privacy completa
                </a>
              </div>
            </div>
          </div>

          {/* ── Contatti URP ── */}
          <div
            style={{
              marginBottom: 40,
              padding: '20px 24px',
              background: 'var(--bi-primary-050)',
              borderRadius: 8,
              border: '1px solid var(--bi-primary-100)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 20,
            }}
          >
            <Icon
              name="phone"
              size={24}
              color="var(--bi-primary)"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: 'var(--bi-ink-900)',
                  marginBottom: 6,
                }}
              >
                Contatti per assistenza al servizio e al sito
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'var(--bi-ink-600)',
                  lineHeight: 1.7,
                }}
              >
                <div>
                  <strong>URP ASL Napoli 1 Centro</strong> — 081 2541111 — Lun–Ven 9:00–13:00 |
                  Mar–Gio 15:00–17:00
                </div>
                <div>
                  <strong>Email URP:</strong> urp@aslnapoli1centro.it
                </div>
                <div>
                  <strong>Redazione web:</strong>{' '}
                  <a
                    href="page-redazione-web.html"
                    style={{ color: 'var(--bi-primary)', fontWeight: 600 }}
                  >
                    segnala errori del sito
                  </a>{' '}
                  — redazione@aslnapoli1centro.it
                </div>
                <div>
                  <strong>Supporto portale regionale:</strong> 800 012 333 (gratuito)
                </div>
              </div>
            </div>
          </div>

          {/* ── Tag correlati ── */}
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--bi-ink-500)',
                marginBottom: 10,
                textTransform: 'uppercase',
                letterSpacing: 0.8,
              }}
            >
              Argomenti correlati
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                'FSE Campania',
                'Esami di laboratorio',
                'Radiologia',
                'SPID',
                'CIE',
                'Anatomia patologica',
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  style={{
                    padding: '6px 14px',
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 600,
                    border: '1.5px solid var(--bi-border)',
                    background: 'var(--bi-surface)',
                    color: 'var(--bi-ink-700)',
                    textDecoration: 'none',
                  }}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

export { PageReferti };
