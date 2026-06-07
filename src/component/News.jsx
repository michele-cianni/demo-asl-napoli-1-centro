import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Badge, ArrowLink, Section, SectionHeading } from './UI.jsx';
import styles from './News.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── In evidenza (news) + Strutture ───

const News = () => {
  const items = [
    {
      badge: 'Avviso',
      badgeTone: 'warm',
      date: '18 aprile 2026',
      title: 'Nuovo ambulatorio per la terapia del dolore a Ponticelli',
      desc: "Dal 5 maggio apre il nuovo centro di II livello all'Ospedale del Mare. Visite su prenotazione CUP.",
      readTime: '2 min',
      imgLabel: 'Ambulatorio terapia del dolore · 800×480',
      img: `${import.meta.env.BASE_URL}images/terapia_dolore_castellammare.png`,
    },
    {
      badge: 'Bando',
      badgeTone: 'primary',
      date: '15 aprile 2026',
      title: 'Concorso pubblico per 24 posti di Infermiere',
      desc: 'Scadenza presentazione domande: 30 maggio 2026. Requisiti e modulistica disponibili sul portale aziendale.',
      readTime: '3 min',
      imgLabel: 'Concorso infermieri · 800×480',
      img: `${import.meta.env.BASE_URL}images/concorso_pubblico.png`,
    },
    {
      badge: 'Salute',
      badgeTone: 'teal',
      date: '12 aprile 2026',
      title: 'Giornata mondiale della voce: visite gratuite il 16 aprile',
      desc: "Otorinolaringoiatria aperta al pubblico presso 4 presidi dell'ASL. Accesso diretto senza prenotazione.",
      readTime: '1 min',
      imgLabel: 'Giornata mondiale della voce · 800×480',
      img: `${import.meta.env.BASE_URL}images/giornata_voce.png`,
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = items.length;

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const item = items[current];

  return (
    <Section
      pad={{ desktop: '28px 0 40px', compact: '24px 0 32px', mobile: '20px 0 28px' }}
      style={{ backgroundColor: 'var(--bi-bg-alt)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/background/asl1napoli.png')`}
      id="news"
    >
      <SectionHeading
        eyebrow="ASL comunica"
        title="In evidenza"
        subtitle="Avvisi, notizie, campagne e bandi dell'azienda sanitaria."
        action={<ArrowLink>Tutte le notizie</ArrowLink>}
      />

      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <a key={current} href="#" className={styles.carousel__card}>
          <img
            src={item.img}
            alt={item.imgLabel}
            style={{ width: '100%', aspectRatio: '16/5', objectFit: 'cover', display: 'block' }}
          />
          <div className={styles.news__cardBody}>
            <div className={styles.news__cardContent}>
              <div className={styles.news__cardMeta}>
                <Badge tone={item.badgeTone}>{item.badge}</Badge>
                <span className={styles.news__cardDate}>
                  {item.date} · {item.readTime} di lettura
                </span>
              </div>
              <h3 className={styles.news__cardTitle}>{item.title}</h3>
              <p className={styles.news__cardDesc}>{item.desc}</p>
            </div>
          </div>
        </a>

        <button
          onClick={prev}
          aria-label="Precedente"
          className={cx(styles.carousel__arrow, styles['carousel__arrow--prev'])}
        >
          <Icon name="chevron-down" size={20} style={{ transform: 'rotate(90deg)' }} />
        </button>
        <button
          onClick={next}
          aria-label="Successivo"
          className={cx(styles.carousel__arrow, styles['carousel__arrow--next'])}
        >
          <Icon name="chevron-down" size={20} style={{ transform: 'rotate(-90deg)' }} />
        </button>

        <div className={styles.carousel__dots}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Vai alla slide ${i + 1}`}
              className={cx(styles.carousel__dot, i === current && styles['carousel__dot--active'])}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

// ─── Strutture — presidi e distretti ───
const Facilities = () => {
  const tabs = ['Presidi ospedalieri', 'Distretti sanitari', 'Consultori', 'Punti prelievo'];
  const [active, setActive] = React.useState(0);
  const presidi = [
    {
      name: 'Ospedale del Mare',
      city: 'Ponticelli, Napoli',
      beds: 450,
      depts: 20,
      phone: '081 1959 1111',
    },
    {
      name: 'P.O. San Giovanni Bosco',
      city: 'Napoli',
      beds: 280,
      depts: 16,
      phone: '081 2544111',
    },
    {
      name: 'P.O. San Paolo',
      city: 'Fuorigrotta, Napoli',
      beds: 230,
      depts: 14,
      phone: '081 2544200',
    },
    {
      name: 'P.O. dei Pellegrini',
      city: 'Napoli',
      beds: 180,
      depts: 12,
      phone: '081 2543111',
    },
    {
      name: 'P.O. Loreto Mare',
      city: 'Napoli',
      beds: 150,
      depts: 10,
      phone: '081 2549111',
    },
    {
      name: 'S.M. degli Incurabili',
      city: 'Napoli',
      beds: 120,
      depts: 8,
      phone: '081 2542111',
    },
  ];

  return (
    <Section bg="var(--bi-surface)" id="strutture">
      <SectionHeading
        eyebrow="Sul territorio"
        title="Presidi e distretti dell'ASL"
        subtitle="Strutture al servizio di circa 1 milione di cittadini nella città di Napoli e nell'isola di Capri."
        action={
          <Button variant="outline" icon="location">
            Mappa interattiva
          </Button>
        }
      />

      {/* tabs */}
      <div className={styles.fac__tabsRow}>
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={cx(styles.fac__tab, active === i && styles['fac__tab--active'])}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.fac__grid}>
        {presidi.map((p, i) => (
          <a key={i} href="#" className={styles.fac__card}>
            <div className={styles.fac__cardHead}>
              <span className={styles.fac__icon}>
                <Icon name="hospital" size={20} />
              </span>
              <div style={{ flex: 1 }}>
                <div className={styles.fac__cardName}>{p.name}</div>
                <div className={styles.fac__cardCity}>
                  <Icon name="location" size={12} /> {p.city}
                </div>
              </div>
            </div>
            <div className={styles.fac__cardStats}>
              <div>
                <div className={styles.fac__statValue}>{p.beds}</div>
                <div className={styles.fac__statLabel}>Posti letto</div>
              </div>
              <div>
                <div className={styles.fac__statValue}>{p.depts}</div>
                <div className={styles.fac__statLabel}>Reparti</div>
              </div>
              <div className={styles.fac__statPhone}>
                <Icon name="phone" size={12} /> {p.phone}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export { News, Facilities };
