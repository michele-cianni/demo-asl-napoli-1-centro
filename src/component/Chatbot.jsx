import React from 'react';
import { Icon } from '../icons.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Chatbot.module.css';

// ─── Chatbot F4 — Assistente orientativo ASL (PRD §6.4) ───
// RF4.1 FAB fisso | RF4.2 solo opzioni, no free input iniziale
// RF4.3 disclaimer | RF4.4 branche "Prenotare" e "Referti" complete

// ── Albero di dialogo ──
const TREE = {
  root: {
    msg: "Ciao! Sono l'assistente ASL Napoli 1 Centro. Come posso aiutarti?",
    options: [
      { label: 'Prenotare una visita specialistica', next: 'prenota' },
      { label: 'Ritirare un referto', next: 'referti' },
      { label: 'Pagare il ticket', next: 'ticket' },
      { label: 'Trovare un presidio', next: 'presidio' },
      { label: 'Contatti e orari', next: 'contatti' },
      { label: 'Segnalare un problema del sito', next: 'sito_web' },
      { label: 'Altro', next: 'altro' },
    ],
  },
  prenota: {
    msg: "Per prenotare una visita specialistica hai bisogno dell'impegnativa (ricetta) del tuo medico di base. Ce l'hai?",
    options: [
      { label: "Sì, ho l'impegnativa", next: 'prenota_si' },
      { label: "No, non ce l'ho ancora", next: 'prenota_no' },
    ],
  },
  prenota_si: {
    msg: "Ottimo! Puoi prenotare in tre modi: online tramite il CUP regionale (il più rapido), per telefono ai CUP distrettuali (numeri sul sito aslnapoli1centro.it), oppure in farmacia abilitata FarmaciUp.",
    options: [
      { label: 'Vai alla guida completa', next: 'prenota_guida' },
      {
        label: 'Accedi al CUP regionale',
        next: 'prenota_cup',
        external: 'https://cup.regione.campania.it',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_no: {
    msg: "Per prenotare devi prima avere l'impegnativa (ricetta dematerializzata) del tuo medico di medicina generale o del pediatra di libera scelta. Contatta il tuo medico per richiederla.",
    options: [
      { label: "Come si chiede l'impegnativa", next: 'prenota_guida' },
      { label: 'Trova il mio medico di base', next: 'medico_base' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_guida: {
    msg: 'Nella guida "Come fare per prenotare" trovi tutti i passaggi, i tempi di attesa per classe di priorità (U/B/D/P) e i canali alternativi.',
    options: [
      {
        label: 'Apri la guida',
        next: 'link_prenota',
        internal: 'page-come-fare-per.html',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_cup: {
    msg: 'Ti sto reindirizzando al portale CUP Campania. Avrai bisogno di SPID livello 2 o CIE con PIN.',
    options: [{ label: "Torna all'inizio", next: 'root' }],
  },
  referti: {
    msg: 'I referti degli esami sono disponibili online tramite il Fascicolo Sanitario Elettronico (FSE) della Regione Campania. Hai SPID o CIE?',
    options: [
      { label: 'Sì, ho SPID o CIE', next: 'referti_si' },
      { label: 'No, non li ho', next: 'referti_no' },
      { label: 'Devo ritirare per un familiare', next: 'referti_delega' },
    ],
  },
  referti_si: {
    msg: 'Ottimo! Accedi al portale FSE Campania con SPID livello 2 o CIE con PIN. Trovi lì tutti i referti pubblicati dalla ASL.',
    options: [
      {
        label: 'Accedi al portale referti',
        next: 'link_referti',
        external: 'https://fse.regione.campania.it',
      },
      {
        label: 'Vai alla guida completa',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_no: {
    msg: "Senza SPID o CIE puoi ritirare il referto cartaceo allo sportello del presidio dove hai eseguito l'esame. Puoi anche richiedere assistenza per attivare SPID.",
    options: [
      { label: 'Dove ritirarlo allo sportello', next: 'referti_sportello' },
      { label: 'Come ottenere SPID', next: 'spid_info' },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_delega: {
    msg: 'Per scaricare referti per un familiare devi attivare la delega sul portale FSE oppure presentarsi allo sportello con il modulo di delega e il documento di identità.',
    options: [
      {
        label: 'Vai alla guida referti',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_guida: {
    msg: 'Nella pagina "Ritiro referti online" trovi la procedura completa, i tempi di pubblicazione e i presidi per il ritiro cartaceo.',
    options: [
      {
        label: 'Apri la pagina referti',
        next: 'link_referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_sportello: {
    msg: 'Puoi ritirare il referto cartaceo presso: Ospedale del Mare (Ponticelli), P.O. San Giovanni Bosco, P.O. dei Pellegrini. Portare tessera sanitaria.',
    options: [
      {
        label: 'Vedi orari dettagliati',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  ticket: {
    msg: 'Puoi pagare il ticket sanitario online tramite il portale PagoPA, in farmacia, al tabacchino abilitato oppure allo sportello cassa del presidio.',
    options: [
      {
        label: 'Paga online con PagoPA',
        next: 'link_pagopa',
        external: 'https://www.pagopa.gov.it',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  presidio: {
    msg: "L'ASL Napoli 1 Centro copre la città di Napoli con 10 distretti e 8 presidi ospedalieri: Ospedale del Mare (Ponticelli), P.O. San Giovanni Bosco, P.O. San Paolo (Fuorigrotta), P.O. dei Pellegrini, P.O. Loreto Mare, S.M. degli Incurabili/Ascalesi, Capilupi (Capri), P.S.I. di Barra.",
    options: [
      { label: 'Vedi tutti i presidi', next: 'link_presidi' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  link_presidi: {
    msg: "Puoi trovare l'elenco completo dei presidi e dei distretti sul sito ASL, oppure chiamando l'URP.",
    options: [
      { label: 'Contatta URP', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  contatti: {
    msg: 'Centralino ASL: 081 2541111\nURP (relazioni pubblico): 081 2541111 — Lun–Ven 9:00–13:00, Mar–Gio 15:00–17:00\nEmail URP: urp@aslnapoli1centro.it\nRedazione web: redazione@aslnapoli1centro.it\nCUP: consultare i numeri distrettuali sul sito aslnapoli1centro.it',
    options: [
      { label: 'Problema del sito o contenuto errato', next: 'sito_web' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  medico_base: {
    msg: 'Per trovare o cambiare il tuo medico di medicina generale, accedi alla sezione scelta/revoca sul portale FSE Campania o recati al distretto sanitario di competenza.',
    options: [
      {
        label: 'Vai al portale FSE',
        next: 'link_fse',
        external: 'https://fse.regione.campania.it',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  spid_info: {
    msg: 'SPID si ottiene gratuitamente tramite uno degli Identity Provider accreditati (Poste Italiane, Aruba, Intesa Sanpaolo ecc.). Il processo richiede circa 15 minuti online.',
    options: [
      {
        label: 'Scopri come ottenere SPID',
        next: 'link_spid',
        external: 'https://www.spid.gov.it/come-attivare-spid/',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  altro: {
    msg: 'Per richieste non in elenco, il modo piu efficace e contattare direttamente il nostro Ufficio Relazioni con il Pubblico. Se invece devi segnalare un errore del sito o un contenuto non aggiornato, contatta la redazione web.',
    options: [
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: 'Problemi del sito o contenuti online', next: 'sito_web' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  sito_web: {
    msg: 'Per errori del sito, pagine non aggiornate, link non funzionanti o difficolta di navigazione, il canale corretto e la redazione web. URP resta dedicato a informazioni generali, reclami e orientamento ai servizi.',
    options: [
      {
        label: 'Apri la redazione web',
        next: 'link_redazione',
        internal: 'page-redazione-web.html',
      },
      { label: 'Devo contattare URP', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  operatore: {
    msg: 'Per parlare con un operatore:\n• Telefono: 081 2541111\n• Lun–Ven 9:00–13:00 | Mar–Gio 15:00–17:00\n• Email: urp@aslnapoli1centro.it',
    options: [{ label: "Torna all'inizio", next: 'root' }],
  },
  // Nodi "foglia" con link: solo messaggio di redirect
  link_prenota: null,
  link_referti: null,
  link_referti_guida: null,
  link_pagopa: null,
  link_fse: null,
  link_spid: null,
  link_redazione: null,
};

// ── Chatbot component ──
const Chatbot = () => {
  const { isMobile } = useResponsive();
  const [open, setOpen] = React.useState(false);
  const [node, setNode] = React.useState('root');
  const [history, setHistory] = React.useState([]);
  const messagesEndRef = React.useRef(null);

  const currentNode = TREE[node] || TREE['root'];

  React.useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, history, node]);

  const handleOption = (opt) => {
    // Handle external link options
    if (opt.external) {
      window.open(opt.external, '_blank', 'noopener,noreferrer');
    }
    // Handle internal link options
    if (opt.internal) {
      window.location.href = opt.internal;
      return;
    }
    // Navigate to next node
    if (opt.next) {
      setHistory((h) => [...h, node]);
      setNode(opt.next);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setNode(prev);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Chiudi assistente' : 'Apri assistente virtuale'}
        className={styles.fab}
      >
        {open ? (
          <Icon name="close" size={20} color="#fff" />
        ) : (
          <Icon name="stethoscope" size={20} color="#fff" />
        )}
        {!open && !isMobile && 'Aiuto?'}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Assistente virtuale ASL"
          aria-modal="true"
          className={styles.panel}
        >
          <div className={styles.header}>
            <div className={styles.header__brand}>
              <div className={styles.header__avatar}>
                <Icon name="stethoscope" size={18} color="#fff" />
              </div>
              <div>
                <div className={styles.header__title}>Assistente ASL</div>
                <div className={styles.header__subtitle}>Napoli 1 Centro</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              className={styles.header__close}
            >
              <Icon name="close" size={18} color="rgba(255,255,255,0.85)" />
            </button>
          </div>

          <div className={styles.disclaimer}>
            <strong>Avviso:</strong> questo assistente fornisce solo informazioni di orientamento.
            Non fornisce consigli medici. <strong>In caso di emergenza, chiama il 118.</strong>
          </div>

          <div className={styles.body}>
            <div className={styles.message}>{currentNode && currentNode.msg}</div>

            {currentNode && currentNode.options && (
              <div className={styles.options}>
                {currentNode.options.map((opt, i) => (
                  <button key={i} onClick={() => handleOption(opt)} className={styles.option}>
                    <span>{opt.label}</span>
                    {opt.external ? (
                      <Icon name="external" size={12} color="var(--bi-primary)" />
                    ) : (
                      <Icon name="chevron-right" size={12} color="var(--bi-primary)" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className={styles.footer}>
            {history.length > 0 && (
              <button onClick={handleBack} className={styles.backBtn}>
                ← Torna
              </button>
            )}
            <a href="tel:0812541111" className={styles.callBtn}>
              <Icon name="phone" size={13} color="#fff" />
              Parla con un operatore
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export { Chatbot };
