import React from 'react';
import { Icon } from '../icons.jsx';
import styles from './Feedback.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── F3 — Valutazione chiarezza informativa (PRD §6.3, obbligatoria AGID) ───

const FeedbackWidget = () => {
  const [step, setStep] = React.useState('rating'); // rating | options | comment | thanks
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [comment, setComment] = React.useState('');

  const lowOptions = [
    'Indicazioni non chiare',
    'Indicazioni incomplete',
    'Confusione sulla corretta procedura',
    'Problemi tecnici',
    'Altro',
  ];

  const highOptions = [
    'Indicazioni chiare',
    'Indicazioni complete',
    'Chiarezza procedurale',
    'Nessun problema tecnico',
    'Altro',
  ];

  const isLow = rating <= 3;

  const toggleOption = (opt) =>
    setSelected((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));

  const handleStarClick = (r) => {
    setRating(r);
    setSelected([]);
    setComment('');
    setStep('options');
  };

  const handleReset = () => {
    setStep('rating');
    setRating(0);
    setHoverRating(0);
    setSelected([]);
    setComment('');
  };

  const eyebrow = (
    <div className={styles.eyebrow}>
      <span className={styles.eyebrow__bar} />
      Valutazione della pagina
    </div>
  );

  const starRecap = (
    <div className={styles.starsRecap}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={cx(styles.star, rating >= star && styles['star--on'])}>
          <Icon name="star" size={20} />
        </span>
      ))}
    </div>
  );

  if (step === 'thanks') {
    return (
      <div className={styles.wrap}>
        <div className="container">
          <div className={cx(styles.box, styles.thanks)}>
            <div className={styles.thanks__check}>
              <Icon name="check" size={24} />
            </div>
            <div>
              <div className={styles.thanks__title}>
                Grazie, il tuo parere ci aiuterà a migliorare il sito!
              </div>
              <div className={styles.thanks__body}>
                Il tuo contributo ci aiuta a migliorare la qualità delle informazioni sul sito
                dell&apos;ASL Napoli 3 Sud.
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
                flexShrink: 0,
                marginLeft: 'auto',
              }}
            >
              <button onClick={handleReset} className={styles.thanks__resetBtn}>
                Invia un altro feedback
              </button>
              <a
                href="page-redazione-web.html"
                style={{
                  fontSize: 13,
                  color: 'var(--bi-primary)',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Hai trovato un errore del sito? Scrivi alla redazione web →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className="container">
        <div className={styles.box}>
          {eyebrow}

          {step === 'rating' && (
            <>
              <div className={styles.title}>
                Quanto sono chiare le informazioni su questa pagina?
              </div>
              <div className={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`${star} stelle su 5`}
                    className={cx(
                      styles.starBtn,
                      (hoverRating || rating) >= star && styles['starBtn--on']
                    )}
                  >
                    <Icon name="star" size={32} />
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 'options' && (
            <div>
              {starRecap}
              <div className={cx(styles.title, styles['title--tight'])}>
                {isLow
                  ? 'Dove hai incontrato le maggiori difficoltà?'
                  : 'Quali sono stati gli aspetti che hai preferito?'}
              </div>
              <div className={styles.options}>
                {(isLow ? lowOptions : highOptions).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleOption(opt)}
                    className={cx(
                      styles.option,
                      selected.includes(opt) && styles['option--selected']
                    )}
                  >
                    {selected.includes(opt) && <Icon name="check" size={12} />}
                    {opt}
                  </button>
                ))}
              </div>
              {isLow && (
                <div
                  style={{
                    marginTop: 16,
                    padding: '14px 16px',
                    borderRadius: 12,
                    border: '1px solid var(--bi-primary-100)',
                    background: 'var(--bi-primary-050)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background: '#fff',
                      color: 'var(--bi-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon name="mail" size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'var(--bi-ink-900)',
                        marginBottom: 4,
                      }}
                    >
                      Vuoi segnalare un errore del sito?
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: 'var(--bi-ink-600)',
                        marginBottom: 6,
                      }}
                    >
                      Per link non funzionanti, contenuti da aggiornare o problemi di navigazione
                      puoi scrivere direttamente alla redazione web.
                    </div>
                    <a
                      href="page-redazione-web.html"
                      style={{
                        color: 'var(--bi-primary)',
                        fontSize: 13,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Apri la redazione web →
                    </a>
                  </div>
                </div>
              )}
              <div className={styles.actions}>
                <button onClick={() => setStep('comment')} className={styles.primaryBtn}>
                  Avanti
                  <Icon name="arrow-right" size={16} />
                </button>
                <button onClick={() => setStep('comment')} className={styles.linkBtn}>
                  Salta
                </button>
              </div>
            </div>
          )}

          {step === 'comment' && (
            <div>
              {starRecap}
              <div className={cx(styles.title, styles['title--tight'])}>
                Vuoi aggiungere altri dettagli?
              </div>
              {isLow && (
                <div
                  style={{
                    marginBottom: 16,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: 'var(--bi-ink-600)',
                  }}
                >
                  Se stai segnalando un errore del sito o un contenuto non aggiornato, puoi anche{' '}
                  <a
                    href="page-redazione-web.html"
                    style={{
                      color: 'var(--bi-primary)',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    contattare direttamente la redazione web
                  </a>
                  .
                </div>
              )}
              <div className={styles.field}>
                <label className={styles.label}>
                  Commento libero (opzionale)
                  <span className={styles.label__hint}>
                    {' '}
                    — max 500 caratteri. Non inserire dati personali.
                  </span>
                </label>
                <textarea
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className={styles.textarea}
                  placeholder="Descrivi liberamente la tua esperienza…"
                />
                <div className={styles.charCount}>{comment.length}/500 caratteri</div>
              </div>
              <div className={styles.actions}>
                <button onClick={() => setStep('thanks')} className={styles.primaryBtn}>
                  Invia feedback
                  <Icon name="arrow-right" size={16} />
                </button>
                <button onClick={handleReset} className={styles.linkBtn}>
                  Annulla
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { FeedbackWidget };
