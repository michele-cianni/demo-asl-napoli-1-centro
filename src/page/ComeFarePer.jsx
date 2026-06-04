import React from 'react';
import { Icon } from '../icons.jsx';
import { Breadcrumb, Eyebrow } from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';

// ─── Pagina "Come fare per: Prenotare una visita specialistica" (PRD §5.3) ───

const useWindowWidth = () => {
  const [w, setW] = React.useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  React.useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return w;
};

// ── Video player placeholder ──
const VideoPlayer = () => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div style={{ marginBottom: 40 }}>
      {/* Player */}
      <div
        onClick={() => setPlaying((p) => !p)}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          background: '#001a2e',
          borderRadius: 10,
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/screen_come_fare_per.png`}
          alt="Come fare per prenotare una visita"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: playing ? 0.25 : 0.55,
            transition: 'opacity 0.3s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: playing ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              transition: 'all 0.2s',
            }}
          >
            {playing ? (
              <div
                style={{
                  width: 20,
                  height: 20,
                  border: '4px solid #fff',
                  borderLeft: 'none',
                  borderRight: 'none',
                }}
              />
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--bi-primary)">
                <path d="M7 4v16l13-8z" />
              </svg>
            )}
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {playing ? 'In riproduzione…' : 'Come prenotare una visita specialistica'}
          </div>
        </div>
        {/* Badge durata */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '3px 9px',
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          4:30
        </div>
        {/* Badge sottotitoli */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '3px 9px',
            borderRadius: 4,
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Icon name="accessibility" size={12} color="#fff" />
          CC
        </div>
      </div>

      {/* Meta row sotto il video */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 20,
          marginTop: 14,
          padding: '10px 0',
          borderBottom: '1px solid var(--bi-border)',
          fontSize: 13,
          color: 'var(--bi-ink-500)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="clock" size={14} /> 4 min 30 sec
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="calendar" size={14} /> Aggiornato il 15 marzo 2026
        </span>
        <span style={{ color: 'var(--bi-primary)', fontWeight: 600 }}>
          Trascrizione disponibile ↓
        </span>
        <span
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <a
            href="#"
            style={{
              color: 'var(--bi-ink-400)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              textDecoration: 'none',
            }}
          >
            <Icon name="facebook" size={16} /> Condividi
          </a>
          <a
            href="#"
            style={{
              color: 'var(--bi-ink-400)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              textDecoration: 'none',
            }}
          >
            <Icon name="x" size={16} />
          </a>
          <a
            href="#"
            style={{
              color: 'var(--bi-ink-400)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              textDecoration: 'none',
            }}
          >
            <Icon name="mail" size={16} />
          </a>
        </span>
      </div>
    </div>
  );
};

// ── Accordion FAQ ──
const Accordion = ({ items }) => {
  const [open, setOpen] = React.useState(null);
  return (
    <div
      style={{
        border: '1px solid var(--bi-border)',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: i < items.length - 1 ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: 'var(--bi-surface)',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: 600,
              fontSize: 15,
              color: 'var(--bi-ink-900)',
              fontFamily: 'var(--ff-sans)',
            }}
          >
            {item.q}
            <Icon
              name={open === i ? 'chevron-down' : 'chevron-right'}
              size={18}
              color="var(--bi-primary)"
            />
          </button>
          {open === i && (
            <div
              style={{
                padding: '0 20px 16px',
                fontSize: 14,
                color: 'var(--bi-ink-600)',
                lineHeight: 1.65,
                background: 'var(--bi-primary-050)',
              }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ── Indice sidebar ──
const Indice = ({ items }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div
      style={{
        border: '1px solid var(--bi-border)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--bi-surface)',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          background: 'var(--bi-primary-050)',
          border: 'none',
          borderBottom: open ? '1px solid var(--bi-border)' : 'none',
          cursor: 'pointer',
          fontFamily: 'var(--ff-sans)',
          fontWeight: 700,
          fontSize: 16,
          color: 'var(--bi-ink-900)',
        }}
      >
        Indice
        <Icon name={open ? 'chevron-down' : 'chevron-right'} size={18} color="var(--bi-primary)" />
      </button>
      {open && (
        <nav style={{ padding: '8px 0' }}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                display: 'block',
                padding: '7px 16px',
                fontSize: 14,
                color: 'var(--bi-ink-700)',
                textDecoration: 'none',
                lineHeight: 1.4,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bi-primary-050)';
                e.currentTarget.style.color = 'var(--bi-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--bi-ink-700)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

// ── Sezione heading helper ──
const SectionH2 = ({ children }) => (
  <h2
    style={{
      fontFamily: 'var(--ff-serif)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--bi-ink-900)',
      marginBottom: 16,
      marginTop: 0,
    }}
  >
    {children}
  </h2>
);

// ── Pagina principale ──
const PageComeFarePer = () => {
  const isMobile = useWindowWidth() < 768;

  const steps = [
    {
      n: 1,
      title: "Ottieni l'impegnativa dal tuo medico di base",
      desc: 'Chiedi al tuo medico di medicina generale la ricetta dematerializzata (RDE) per la prestazione specialistica di cui hai bisogno. Il medico la inserisce direttamente nel sistema: non ti serve la versione cartacea.',
    },
    {
      n: 2,
      title: 'Scegli come prenotare',
      desc: 'Puoi prenotare in tre modi: online tramite il CUP regionale (il più rapido), telefonicamente al numero verde gratuito 800 019 774, oppure di persona in farmacia abilitata FarmaciUp o allo sportello CUP ASL.',
    },
    {
      n: 3,
      title: 'Accedi al CUP regionale e seleziona la prestazione',
      desc: "Sul portale CUP Campania, autenticati con SPID livello 2 o CIE. Inserisci il codice fiscale e il numero di ricetta (NRE) indicato sull'impegnativa. Scegli la data, l'ora e il presidio preferiti tra quelli disponibili.",
    },
    {
      n: 4,
      title: "Conferma l'appuntamento e ricevi la notifica",
      desc: "Dopo la conferma ricevi un SMS e/o email con i dettagli dell'appuntamento: data, ora, luogo, indicazioni su cosa portare. Ricorda di presentarti con la tessera sanitaria e, se previsto, con la quota di ticket.",
      cta: true,
    },
  ];

  const [openSteps, setOpenSteps] = React.useState(steps.map(() => false));
  const allOpen = openSteps.every(Boolean);
  const toggleAll = () => setOpenSteps(steps.map(() => !allOpen));
  const toggleStep = (i) => setOpenSteps((s) => s.map((v, idx) => (idx === i ? !v : v)));

  const faq = [
    {
      q: 'Posso prenotare senza SPID o CIE?',
      a: 'Sì. Puoi prenotare telefonicamente al numero verde 800 019 774 (gratuito, attivo lun-ven 8:00–19:00, sab 8:00–13:00) oppure recandoti di persona presso gli sportelli CUP o le farmacie abilitate FarmaciUp.',
    },
    {
      q: 'Come faccio a disdire o spostare un appuntamento?',
      a: "Puoi disdire o spostare l'appuntamento almeno 24 ore prima tramite lo stesso portale CUP, per telefono oppure in farmacia. La disdetta tardiva può comportare l'addebito del ticket.",
    },
    {
      q: 'La ricetta medica ha una scadenza?',
      a: 'Le ricette dematerializzate (RDE) sono valide 30 giorni dalla data di emissione. Dopo la scadenza il numero di ricetta non è più prenotabile e devi chiedere al medico una nuova impegnativa.',
    },
    {
      q: 'Cosa succede se sono esente dal ticket?',
      a: "Durante la prenotazione puoi indicare il codice di esenzione (per reddito, patologia o invalidità). Il sistema CUP riconosce l'esenzione automaticamente se sei già registrato. In caso di dubbi porta la documentazione di esenzione all'appuntamento.",
    },
    {
      q: 'Posso prenotare per un familiare?',
      a: 'Sì, tramite il CUP telefonico o in farmacia puoi prenotare anche per un familiare. Online, se hai la delega attivata sul portale FSE Campania, puoi operare per conto di chi deleghi.',
    },
  ];

  const docs = [
    {
      title: 'Modulo di delega FSE Campania',
      desc: 'Modulo per attivare la delega di accesso al fascicolo sanitario elettronico per un familiare.',
      size: 'PDF — 124 KB',
    },
    {
      title: 'Tabella delle esenzioni ticket 2025',
      desc: 'Elenco aggiornato dei codici di esenzione per reddito, patologia e invalidità.',
      size: 'PDF — 89 KB',
    },
    {
      title: "Guida all'uso del portale CUP",
      desc: 'Istruzioni passo dopo passo per prenotare una visita specialistica tramite il portale CUP Campania.',
      size: 'PDF — 210 KB',
    },
  ];

  const indiceItems = [
    { id: 'panoramica', label: 'Panoramica' },
    { id: 'a-chi-e-rivolto', label: 'A chi è rivolto' },
    { id: 'cosa-serve', label: 'Cosa serve' },
    { id: 'come-si-fa', label: 'Come si fa' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'tempi-scadenze', label: 'Tempi e scadenze' },
    { id: 'costi', label: 'Costi' },
    { id: 'maggiori-informazioni', label: 'Maggiori informazioni' },
    { id: 'canali-alternativi', label: 'Canali alternativi' },
    { id: 'contatti', label: 'Contatti URP' },
  ];

  return (
    <div
      data-screen-label="03 Come fare per — Prenotare una visita"
      style={{
        backgroundColor: 'var(--bi-bg)',
      }}
    >
      <TopBar />
      <BrandRow />
      <StickyHeader active="come-fare-per" />
      <Breadcrumb
        items={[
          { label: 'Home', href: 'index.html' },
          { label: 'Come fare per', href: '#' },
          { label: 'Prenotare una visita specialistica' },
        ]}
      />

      {/* ── Hero title ── */}
      <div style={{ background: 'var(--bi-surface)', padding: '40px 0 32px' }}>
        <div className="container">
          <Eyebrow>Come fare per</Eyebrow>
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
            Prenotare una visita specialistica
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--bi-ink-500)',
              maxWidth: 640,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Scopri come prenotare una visita con uno specialista ASL partendo dall&apos;impegnativa del
            tuo medico di base, passo dopo passo. Il video in primo piano ti guida in 4 minuti.
          </p>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ background: 'var(--bi-surface)', borderTop: '1px solid var(--bi-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 24 : 40,
              alignItems: 'flex-start',
              padding: '32px 0 64px',
            }}
          >
            {/* ── Sidebar Indice ── */}
            <aside
              style={{
                width: isMobile ? '100%' : 256,
                flexShrink: 0,
                position: isMobile ? 'relative' : 'sticky',
                top: isMobile ? 'auto' : 88,
              }}
            >
              <Indice items={indiceItems} />
            </aside>

            {/* ── Main content ── */}
            <main style={{ flex: 1, minWidth: 0 }}>
              {/* ── Panoramica (video) ── */}
              <section id="panoramica" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <VideoPlayer />
              </section>

              {/* ── A chi è rivolto ── */}
              <section id="a-chi-e-rivolto" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>A chi è rivolto</SectionH2>
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
                    Cittadini iscritti al SSN con prescrizione (impegnativa) del medico di medicina
                    generale o del pediatra
                  </li>
                  <li>Pazienti esenti per reddito, patologia o invalidità</li>
                  <li>Pazienti non esenti soggetti al pagamento del ticket sanitario</li>
                  <li>Caregiver con delega attiva sul portale FSE Campania</li>
                </ul>
              </section>

              {/* ── Cosa serve ── */}
              <section id="cosa-serve" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Cosa serve</SectionH2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    {
                      icon: 'document',
                      text: 'Impegnativa elettronica (RDE) rilasciata dal medico di base',
                    },
                    { icon: 'users', text: 'Tessera sanitaria (Codice Fiscale)' },
                    {
                      icon: 'shield',
                      text: 'Documentazione di esenzione (se applicabile)',
                    },
                    {
                      icon: 'globe',
                      text: 'SPID livello 2 o CIE (per prenotazione online)',
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
              </section>

              {/* ── Come si fa (passi numerati con expand/collapse) ── */}
              <section id="come-si-fa" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Come si fa</SectionH2>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--bi-ink-500)',
                    marginBottom: 16,
                    marginTop: -8,
                  }}
                >
                  Qui vengono elencati i passi da seguire per effettuare questa procedura.
                </p>

                {/* Apri / chiudi tutti */}
                <button
                  onClick={toggleAll}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--ff-sans)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: 'var(--bi-ink-700)',
                    padding: '0 0 20px 0',
                  }}
                >
                  {allOpen ? 'Chiudi tutti gli step' : 'Apri tutti gli step'}
                  <Icon
                    name={allOpen ? 'chevron-down' : 'chevron-right'}
                    size={16}
                    color="var(--bi-primary)"
                  />
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 20,
                        paddingBottom: i < steps.length - 1 ? 4 : 0,
                        position: 'relative',
                      }}
                    >
                      {/* Linea verticale di connessione */}
                      {i < steps.length - 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 21,
                            top: 44,
                            bottom: 0,
                            width: 2,
                            background: 'var(--bi-primary-100)',
                          }}
                        />
                      )}
                      {/* Numero */}
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 6,
                          flexShrink: 0,
                          border: '2px solid var(--bi-primary-100)',
                          background: 'var(--bi-surface)',
                          color: 'var(--bi-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: 20,
                          fontFamily: 'var(--ff-sans)',
                          zIndex: 1,
                        }}
                      >
                        {s.n}
                      </div>
                      <div
                        style={{
                          flex: 1,
                          paddingBottom: 24,
                          borderBottom:
                            i < steps.length - 1 ? '1px solid var(--bi-border)' : 'none',
                          marginBottom: i < steps.length - 1 ? 0 : 0,
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 18,
                            color: 'var(--bi-ink-900)',
                            marginBottom: 4,
                            lineHeight: 1.3,
                            paddingTop: 8,
                          }}
                        >
                          {s.title}
                        </div>
                        {/* Mostra / nascondi dettagli */}
                        <button
                          onClick={() => toggleStep(i)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'var(--ff-sans)',
                            fontSize: 13,
                            color: 'var(--bi-ink-500)',
                            padding: '4px 0 8px 0',
                          }}
                        >
                          <Icon
                            name={openSteps[i] ? 'chevron-down' : 'chevron-right'}
                            size={14}
                            color="var(--bi-primary)"
                          />
                          {openSteps[i] ? 'Nascondi dettagli' : 'Mostra dettagli'}
                        </button>
                        {openSteps[i] && (
                          <>
                            <div
                              style={{
                                fontSize: 15,
                                color: 'var(--bi-ink-600)',
                                lineHeight: 1.65,
                                marginBottom: s.cta ? 16 : 0,
                              }}
                            >
                              {s.desc}
                            </div>
                            {s.cta && (
                              <a
                                href="https://cup.regione.campania.it"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 8,
                                  marginTop: 4,
                                  padding: '12px 24px',
                                  borderRadius: 4,
                                  background: 'var(--bi-primary)',
                                  color: '#fff',
                                  fontWeight: 700,
                                  fontSize: 15,
                                  textDecoration: 'none',
                                }}
                              >
                                Vai al CUP regionale
                                <Icon name="external" size={16} color="#fff" />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Documenti ── */}
              <section id="documenti" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Documenti</SectionH2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: 16,
                  }}
                >
                  {docs.map((doc, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        padding: '18px 20px',
                        borderRadius: 6,
                        border: '1px solid var(--bi-border)',
                        background: 'var(--bi-surface)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <Icon
                          name="document"
                          size={20}
                          color="var(--bi-primary)"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        <a
                          href="#"
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: 'var(--bi-ink-900)',
                            textDecoration: 'underline',
                            textDecorationColor: 'var(--bi-primary-100)',
                            lineHeight: 1.4,
                          }}
                        >
                          {doc.title}
                        </a>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 13,
                          color: 'var(--bi-ink-500)',
                          lineHeight: 1.5,
                        }}
                      >
                        {doc.desc}
                      </p>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: 12,
                          fontWeight: 600,
                          color: 'var(--bi-ink-500)',
                          background: 'var(--bi-bg-alt)',
                          padding: '2px 8px',
                          borderRadius: 4,
                          alignSelf: 'flex-start',
                        }}
                      >
                        {doc.size}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Tempi e scadenze ── */}
              <section id="tempi-scadenze" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Tempi e scadenze</SectionH2>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: 14,
                  }}
                >
                  <thead>
                    <tr style={{ background: 'var(--bi-primary-050)' }}>
                      {['Classe priorità', 'Sigla', 'Entro', 'Descrizione'].map((h) => (
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
                    {[
                      [
                        'Urgente',
                        'U',
                        '72 ore',
                        'Condizione clinica che potrebbe aggravarsi rapidamente',
                      ],
                      [
                        'Breve',
                        'B',
                        '10 giorni',
                        'Condizione rilevante ma non immediatamente pericolosa',
                      ],
                      [
                        'Differita',
                        'D',
                        '30–60 gg',
                        'Condizione non urgente, valutazione programmata',
                      ],
                      [
                        'Programmata',
                        'P',
                        '120 gg',
                        'Prestazione di routine o controllo di follow-up',
                      ],
                    ].map(([cls, sig, entro, desc], i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: '1px solid var(--bi-border)',
                          background: i % 2 === 0 ? 'var(--bi-surface)' : 'var(--bi-bg-alt)',
                        }}
                      >
                        <td style={{ padding: '10px 14px', fontWeight: 600 }}>{cls}</td>
                        <td style={{ padding: '10px 14px' }}>
                          <span
                            style={{
                              padding: '2px 8px',
                              background: 'var(--bi-primary-100)',
                              color: 'var(--bi-primary-800)',
                              borderRadius: 4,
                              fontWeight: 700,
                            }}
                          >
                            {sig}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: '10px 14px',
                            color: 'var(--bi-primary)',
                            fontWeight: 700,
                          }}
                        >
                          {entro}
                        </td>
                        <td
                          style={{
                            padding: '10px 14px',
                            color: 'var(--bi-ink-500)',
                          }}
                        >
                          {desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              {/* ── Costi ── */}
              <section id="costi" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <div
                  style={{
                    padding: '20px 24px',
                    background: 'var(--bi-bg-alt)',
                    borderRadius: 8,
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
                    Costi
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--bi-ink-600)',
                      lineHeight: 1.6,
                      margin: '0 0 12px',
                    }}
                  >
                    L'importo del ticket dipende dalla prestazione richiesta e dalla tua situazione
                    reddituale. Il pagamento si effettua online (CUP), in farmacia, tramite app,
                    oppure allo sportello prima della visita.
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
                    Come fare per pagare il ticket <Icon name="arrow-right" size={14} />
                  </a>
                </div>
              </section>

              {/* ── FAQ accordion ── */}
              <section id="maggiori-informazioni" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Maggiori informazioni</SectionH2>
                <Accordion items={faq} />
              </section>

              {/* ── Canali alternativi ── */}
              <section id="canali-alternativi" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <SectionH2>Canali alternativi di prenotazione</SectionH2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 14,
                  }}
                >
                  {[
                    {
                      icon: 'phone',
                      title: 'CUP Telefonico',
                      detail: '800 019 774 — gratuito\nLun-Ven 8:00–19:00 | Sab 8:00–13:00',
                    },
                    {
                      icon: 'pill',
                      title: 'Farmacie FarmaciUp',
                      detail: 'Oltre 300 farmacie abilitate sul territorio ASL',
                    },
                    {
                      icon: 'globe',
                      title: 'App Campania Salute',
                      detail: 'Disponibile per iOS e Android — prenotazione 24/7',
                    },
                    {
                      icon: 'hospital',
                      title: 'Sportello CUP ASL',
                      detail: 'Presso i presidi ospedalieri e i distretti sanitari',
                    },
                  ].map((ch, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px',
                        borderRadius: 8,
                        background: 'var(--bi-surface)',
                        border: '1px solid var(--bi-border)',
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
                          marginBottom: 10,
                        }}
                      >
                        <Icon name={ch.icon} size={18} />
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: 'var(--bi-ink-900)',
                          marginBottom: 4,
                        }}
                      >
                        {ch.title}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: 'var(--bi-ink-500)',
                          lineHeight: 1.5,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {ch.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Contatti URP ── */}
              <section id="contatti" style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <div
                  style={{
                    padding: '20px 24px',
                    background: 'var(--bi-surface)',
                    borderRadius: 8,
                    border: '1px solid var(--bi-border)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 20,
                  }}
                >
                  <Icon
                    name="mail"
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
                      Redazione web
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: 'var(--bi-ink-600)',
                        lineHeight: 1.7,
                      }}
                    >
                      <div>
                        Per errori del sito, link non funzionanti o informazioni da aggiornare contatta
                        la redazione web.
                      </div>
                      <div>
                        <strong>Email:</strong> redazione@aslnapoli3sud.it
                      </div>
                      <div>
                        <a
                          href="page-redazione-web.html"
                          style={{ color: 'var(--bi-primary)', fontWeight: 700 }}
                        >
                          Apri la sezione redazione web
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: 16,
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
                      Ufficio Relazioni con il Pubblico (URP)
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: 'var(--bi-ink-600)',
                        lineHeight: 1.7,
                      }}
                    >
                      <div>
                        Per segnalazioni encomi e reclami, e per informazioni sui servizi sanitari o pratiche personali contatta l&apos;Ufficio Relazioni con il Pubblico.
                      </div>
                      <div>
                        <strong>Tel.</strong> 081 8722111 — Lun-Ven 9:00–13:00 | Mar-Gio 15:00–17:00
                      </div>
                      <div>
                        <strong>Email:</strong> urp@aslnapoli3sud.it
                      </div>
                      <div>
                        <strong>Sede:</strong> Via Acquaviva 109, Castellammare di Stabia (NA)
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Ultimo aggiornamento ── */}
              <div style={{ marginBottom: 32 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--bi-ink-400)',
                    marginBottom: 2,
                  }}
                >
                  Ultimo aggiornamento
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'var(--bi-ink-600)',
                  }}
                >
                  Questa pagina è stata aggiornata il 15 marzo 2026
                </div>
              </div>

              {/* ── Tag correlati ── */}
              <div style={{ marginBottom: 16 }}>
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
                    'Esami diagnostici',
                    'Ticket sanitario',
                    'Esenzioni',
                    'Medico di base',
                    'SPID',
                    'FSE',
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
            </main>
          </div>
        </div>
      </div>

      {/* ── Condividi band ── */}
      <div
        style={{
          background: 'var(--bi-bg-alt)',
          borderTop: '1px solid var(--bi-border)',
          borderBottom: '1px solid var(--bi-border)',
          padding: '24px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          <span style={{ fontSize: 14, color: 'var(--bi-ink-500)' }}>
            Hai trovato utile questa pagina?
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {[
              { icon: 'facebook', label: 'Facebook' },
              { icon: 'x', label: 'X' },
              { icon: 'mail', label: 'Email' },
            ].map(({ icon, label }) => (
              <a
                key={icon}
                href="#"
                title={`Condividi su ${label}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--bi-ink-700)',
                  textDecoration: 'none',
                }}
              >
                <Icon name={icon} size={16} color="var(--bi-ink-500)" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

export { PageComeFarePer };
