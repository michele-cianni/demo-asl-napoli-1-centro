import React, { useState } from 'react';
import { Icon } from '../icons.jsx';
import { Button, Section, Eyebrow, Breadcrumb } from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './RedazioneWeb.module.css';

// ─── Form di contatto alla redazione web ───

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    oggetto: '',
    messaggio: '',
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <div className={styles.success__icon}>
            <Icon name="check" size={28} />
          </div>
          <div className={styles.success__title}>Messaggio inviato!</div>
          <div className={styles.success__body}>
            Grazie per averci scritto. Ti risponderemo entro 5 giorni lavorativi.
          </div>
          <button className={styles.success__reset} onClick={() => setSent(false)}>
            Invia un altro messaggio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__title}>Compila il modulo</div>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="rw-nome">
              Nome <span className={styles.label__required}>*</span>
            </label>
            <input
              id="rw-nome"
              name="nome"
              type="text"
              required
              autoComplete="given-name"
              className={styles.input}
              value={form.nome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="rw-cognome">
              Cognome <span className={styles.label__required}>*</span>
            </label>
            <input
              id="rw-cognome"
              name="cognome"
              type="text"
              required
              autoComplete="family-name"
              className={styles.input}
              value={form.cognome}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="rw-email">
            Email <span className={styles.label__required}>*</span>
          </label>
          <input
            id="rw-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={styles.input}
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="rw-oggetto">
            Oggetto <span className={styles.label__required}>*</span>
          </label>
          <select
            id="rw-oggetto"
            name="oggetto"
            required
            className={styles.select}
            value={form.oggetto}
            onChange={handleChange}
          >
            <option value="">— Seleziona —</option>
            <option value="errore">Errore nel contenuto</option>
            <option value="aggiornamento">Aggiornamento informazioni</option>
            <option value="link">Link o documento non funzionante</option>
            <option value="navigazione">Problema di navigazione</option>
            <option value="proposta">Proposta di contenuto</option>
            <option value="altro">Altro</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="rw-messaggio">
            Messaggio <span className={styles.label__required}>*</span>
          </label>
          <textarea
            id="rw-messaggio"
            name="messaggio"
            required
            rows={5}
            className={styles.textarea}
            placeholder="Descrivi la tua richiesta…"
            value={form.messaggio}
            onChange={handleChange}
          />
        </div>

        <p className={styles.privacy}>
          I dati inseriti saranno trattati esclusivamente per rispondere alla tua richiesta, nel
          rispetto del <a href="#">Regolamento UE 2016/679 (GDPR)</a> e della normativa vigente in
          materia di protezione dei dati personali.
        </p>

        <Button variant="primary" size="lg" block>
          Invia messaggio
        </Button>
      </form>
    </div>
  );
};

// ─── Colonna informativa ───

const InfoColumn = ({ isMobile }) => (
  <div>
    <Eyebrow>Redazione web</Eyebrow>
    <h1
      style={{
        fontFamily: 'var(--ff-serif)',
        fontSize: isMobile ? '28px' : '36px',
        fontWeight: 600,
        color: 'var(--bi-ink-900)',
        lineHeight: 1.2,
        margin: '12px 0 20px',
      }}
    >
      Scrivi alla redazione
    </h1>
    <p className={styles.info__desc}>
      La redazione web dell&apos;ASL Napoli 3 Sud cura i contenuti del sito istituzionale. Usa
      questa sezione per segnalare errori del sito, informazioni non aggiornate, link non
      funzionanti o difficolta di navigazione. Per reclami, orientamento ai servizi e richieste
      amministrative resta invece il canale URP.
    </p>
    <div
      style={{
        marginBottom: 20,
        padding: isMobile ? '16px 18px' : '18px 20px',
        borderRadius: 16,
        background: 'var(--bi-primary-050)',
        border: '1px solid var(--bi-primary-100)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--bi-ink-900)',
          marginBottom: 10,
        }}
      >
        <Icon name="check" size={16} color="var(--bi-primary)" />
        Quando usare questa sezione
      </div>
      <ul
        style={{
          margin: 0,
          paddingLeft: 18,
          color: 'var(--bi-ink-600)',
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        {[
          'Errore in una pagina o in un contenuto pubblicato',
          'Link non funzionante o documento non raggiungibile',
          'Informazioni da aggiornare o correggere',
          'Problemi di navigazione o modulo poco chiaro',
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <div
      style={{
        marginBottom: 24,
        padding: '16px 18px',
        borderRadius: 16,
        background: 'var(--bi-surface)',
        border: '1px solid var(--bi-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--bi-ink-900)',
          marginBottom: 6,
        }}
      >
        <Icon name="info" size={16} color="var(--bi-primary)" />
        Redazione web o URP?
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.65,
          color: 'var(--bi-ink-600)',
        }}
      >
        Scrivi alla redazione web se il problema riguarda il portale o i suoi contenuti. Contatta
        URP se ti serve assistenza generale, orientamento ai servizi o vuoi presentare un reclamo.
      </p>
    </div>
    <ul className={styles.info__metaList} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li className={styles.info__metaItem}>
        <span className={styles.info__metaIcon}>
          <Icon name="clock" size={20} />
        </span>
        <div>
          <div className={styles.info__metaLabel}>Tempi di risposta</div>
          <div className={styles.info__metaValue}>Entro 5 giorni lavorativi</div>
        </div>
      </li>
      <li className={styles.info__metaItem}>
        <span className={styles.info__metaIcon}>
          <Icon name="mail" size={20} />
        </span>
        <div>
          <div className={styles.info__metaLabel}>Email diretta</div>
          <div className={styles.info__metaValue}>
            <a href="mailto:redazione@aslnapoli3sud.it" className={styles.info__metaLink}>
              redazione@aslnapoli3sud.it
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

// ─── Pagina completa ───

const PageRedazioneWeb = () => {
  const { isMobile } = useResponsive();

  return (
    <div data-screen-label="Redazione web" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader active="" />
      <Breadcrumb items={[{ label: 'Home', href: 'index.html' }, { label: 'Redazione web' }]} />

      <Section pad={isMobile ? '40px 0 64px' : '56px 0 80px'}>
        <div className={styles.grid}>
          <InfoColumn isMobile={isMobile} />
          <ContactForm />
        </div>
      </Section>

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

export { PageRedazioneWeb };
