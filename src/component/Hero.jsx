import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Eyebrow } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Hero.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── Hero with search ───
const Hero = () => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const { isMobile } = useResponsive();

  const suggestions = [
    {
      label: 'Prenotare una visita specialistica',
      icon: 'calendar',
      cat: 'Servizio',
    },
    { label: 'Ritirare un referto online', icon: 'document', cat: 'Servizio' },
    { label: 'Cambio medico di base', icon: 'users', cat: 'Come fare per' },
    {
      label: 'Esenzione ticket per reddito',
      icon: 'document',
      cat: 'Come fare per',
    },
    {
      label: 'Distretto sanitario di Torre del Greco',
      icon: 'hospital',
      cat: 'Struttura',
    },
  ];

  const quick = [
    "Liste d'attesa",
    'CUP online',
    'Cambio medico',
    'Referti online',
    'Screening',
    'Vaccinazioni',
  ];

  const filtered = query
    ? suggestions.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : suggestions.slice(0, 4);

  return (
    <section className={styles.section}>
      {/* decorative geometry */}
      <div aria-hidden className={styles.decor1} />
      <div aria-hidden className={styles.decor2} />
      <div aria-hidden className={styles.decor3} />

      <div className={cx('container', styles.grid)}>
        {/* left — search & message */}
        <div className="animate-in">
          <Eyebrow>Servizio sanitario regionale</Eyebrow>
          <h1 className={styles.heading}>
            La salute dei cittadini, <em>a portata di mano.</em>
          </h1>
          <p className={styles.intro}>
            Prenota prestazioni, scarica referti, trova il presidio più vicino. Cerca un servizio o
            scopri come fare per.
          </p>

          {/* search box */}
          <div className={cx(styles.searchBox, focused && styles['searchBox--focused'])}>
            <div className={styles.searchRow}>
              <Icon name="search" size={22} color="var(--bi-primary)" />
              <input
                type="text"
                placeholder="Cerca un servizio, una prestazione o una struttura…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 200)}
                className={styles.searchInput}
              />
              {!isMobile && (
                <button className={styles.micBtn}>
                  <Icon name="microphone" size={18} />
                </button>
              )}
              <div style={{ width: isMobile ? '100%' : 'auto' }}>
                <Button variant="primary" iconRight="arrow-right" size="md" block={isMobile}>
                  Cerca
                </Button>
              </div>
            </div>

            {focused && (
              <div className={styles.dropdown}>
                <div className={styles.dropdown__label}>
                  {query ? `${filtered.length} risultati` : 'Suggerimenti'}
                </div>
                {filtered.map((s, i) => (
                  <a key={i} href="#" className={styles.suggestion}>
                    <span className={styles.suggestion__icon}>
                      <Icon name={s.icon} size={16} />
                    </span>
                    <span style={{ flex: 1 }}>{s.label}</span>
                    <span className={styles.suggestion__cat}>{s.cat}</span>
                    <Icon name="arrow-up-right" size={14} color="var(--bi-ink-500)" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* quick chips */}
          <div className={styles.chips}>
            <span className={styles.chips__label}>Ricerca rapida:</span>
            {quick.map((q) => (
              <a key={q} href="#" className={styles.chip}>
                {q}
              </a>
            ))}
          </div>
        </div>

        {/* right — hero visual: composed data card */}
        <HeroVisual />
      </div>
    </section>
  );
};

// Synthetic hero visual — placeholder image only
const HeroVisual = () => {
  const { isMobile } = useResponsive();

  const placeholder = (
    <img
      src={`${import.meta.env.BASE_URL}images/placeholder_1200x900 vers2.png`}
      alt="Medico con paziente"
      className={cx(
        styles.placeholder,
        styles[isMobile ? 'placeholder--mobile' : 'placeholder--desktop']
      )}
      style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
    />
  );

  if (isMobile) {
    return null;
  }

  return <div className={styles.visual}>{placeholder}</div>;
};

export { Hero };
