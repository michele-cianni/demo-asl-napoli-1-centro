import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Badge, ArrowLink, Section, SectionHeading } from './UI.jsx';
import styles from './News.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── In evidenza (news) + Strutture ───

const News = () => {
  const items = [
    {
      badge: 'Notizie',
      badgeTone: 'primary',
      date: '1 giugno 2026',
      title: 'San Giovanni Bosco: Radiologia aperta anche di sera, sabato e domenica pomeriggio',
      desc: "Il Presidio Ospedaliero San Giovanni Bosco amplia gli orari del servizio di Radiologia per ridurre i tempi d'attesa.",
      readTime: '2 min',
      imgLabel: 'Radiologia San Giovanni Bosco',
      img: `${import.meta.env.BASE_URL}images/radiologia.png`,
    },
    {
      badge: 'Donazione',
      badgeTone: 'primary',
      date: '28 maggio 2026',
      title: 'Dona il sangue. Un semplice gesto, un dono prezioso.',
      desc: 'I centri trasfusionali della ASL Napoli 1 Centro sono aperti ogni mattina. Bastano 30 minuti per salvare fino a 3 vite.',
      readTime: '1 min',
      imgLabel: 'Donazione sangue',
      img: `${import.meta.env.BASE_URL}images/dona-sangue.png`,
    },
    {
      badge: 'Salute',
      badgeTone: 'primary',
      date: '5 giugno 2026',
      title: 'In aumento i casi di Epatite A',
      desc: 'La ASL Napoli 1 Centro invita la cittadinanza a seguire le norme igieniche di base. Disponibile la vaccinazione nei centri vaccinali del territorio.',
      readTime: '2 min',
      imgLabel: 'Epatite A',
      img: `${import.meta.env.BASE_URL}images/epatite.png`,
    },
  ];
  const featured = items[0];
  const secondary = items.slice(1);

  return (
    <Section
      pad={{ desktop: '28px 0 40px', compact: '24px 0 32px', mobile: '20px 0 28px' }}
      bg="#ffffff"
      id="news"
    >
      <SectionHeading
        title="In evidenza"
        action={<ArrowLink>Tutte le notizie</ArrowLink>}
      />

      <div className={styles.news__layout}>
        <a href="#" className={cx(styles.news__card, styles['news__card--featured'])}>
          <div className={styles.news__cardBody}>
            <div className={styles.news__cardContent}>
              <div className={styles.news__cardMeta}>
                <Badge tone={featured.badgeTone}>{featured.badge}</Badge>
              </div>
              <h3 className={styles.news__cardTitle}>{featured.title}</h3>
              <p className={styles.news__cardDesc}>{featured.desc}</p>
            </div>
          </div>
          <div className={styles.news__imageWrap}>
            <img src={featured.img} alt={featured.imgLabel} className={styles.news__image} />
          </div>
        </a>

        <div className={styles.news__secondaryRow}>
          {secondary.map((item, i) => (
            <a key={i} href="#" className={cx(styles.news__card, styles['news__card--secondary'])}>
              <div className={styles.news__cardBody}>
                <div className={styles.news__cardContent}>
                  <div className={styles.news__cardMeta}>
                    <Badge tone={item.badgeTone}>{item.badge}</Badge>
                  </div>
                  <h3 className={styles.news__cardTitle}>{item.title}</h3>
                  <p className={styles.news__cardDesc}>{item.desc}</p>
                </div>
              </div>
              <div className={styles.news__imageWrap}>
                <img src={item.img} alt={item.imgLabel} className={styles.news__image} />
              </div>
            </a>
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
      name: 'P.O. S.M. Loreto Nuovo',
      city: 'Napoli',
      beds: 150,
      depts: 10,
      phone: '081 2542701',
    },
    {
      name: 'Presidio Capilupi',
      city: 'Capri',
      beds: 60,
      depts: 6,
      phone: '081 2541296',
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
