import { Icon } from '../icons.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Footer.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── Footer ───
const Footer = () => {
  const { isMobile } = useResponsive();

  return (
    <footer className={styles.footer}>
      <div className={cx('container', styles.footer__inner)}>
        {/* Logo row */}
        <div className={styles.footer__logos}>
          <div className={styles.footer__brand}>
            <img
              src={`${import.meta.env.BASE_URL}images/logos/asl-napoli-3-sud-bianco.png`}
              alt="ASL Napoli 3 Sud"
              style={{ height: 48, width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {!isMobile && <div className={styles.footer__sep} />}

          <div className={styles.footer__brand}>
            <img
              src={`${import.meta.env.BASE_URL}images/logos/regione-campania.svg`}
              alt="Regione Campania"
              style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
            <div className={styles.footer__brandTitle}>Portale Regione Campania</div>
          </div>
        </div>

        {/* 3 nav columns */}
        <div className={styles.footer__cols}>
          {[
            {
              title: 'Area Informativa',
              links: ['Servizi e prestazioni', 'Come fare per', 'Strutture', 'ASL Comunica'],
            },
            {
              title: 'Area Istituzionale',
              links: [
                'Organizzazione',
                { label: 'Distretti sanitari', href: 'page-distretti.html' },
                'Documenti',
                'Personale',
                'Lavora con noi',
                'Ufficio Relazioni con il Pubblico (URP)',
                'Centro Unico Prenotazioni (CUP)',
              ],
            },
            {
              title: 'Trasparenza',
              links: ['Amministrazione trasparente', 'Albo pretorio', 'Carta dei servizi'],
            },
          ].map((col, i) => (
            <div key={i}>
              <div className={styles.footer__colTitle}>{col.title}</div>
              <ul className={styles.footer__list}>
                {col.links.map((l) => {
                  const label = typeof l === 'string' ? l : l.label;
                  const href = typeof l === 'string' ? '#' : l.href;
                  return (
                    <li key={label}>
                      <a href={href} className={styles.footer__link}>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CONTATTI + SEGUICI SU */}
        <div className={styles.footer__contactRow}>
          <div>
            <div className={styles.footer__colTitle}>Contatti</div>
            <p className={styles.footer__contactText}>
              Via Marconi, 66 — 80059 Torre del Greco (NA)
              <br />
              C.F. / P.IVA 06321661211
              <br />
              PEC: protocollo@pec.aslnapoli3sud.it
              <br />
              +39 081 8727111
            </p>
            <a href="page-redazione-web.html" className={styles.footer__contactLink}>
              Segnala un problema del sito
            </a>
            <p
              style={{
                margin: '12px 0 0',
                fontSize: 13,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              Per reclami, orientamento ai servizi e richieste generali resta attivo l&apos;URP.
            </p>
          </div>
          <div>
            <div className={styles.footer__colTitle}>Seguici su</div>
            <div className={styles.footer__social}>
              {['facebook', 'instagram', 'x', 'youtube', 'linkedin', 'whatsapp', 'rss'].map((n) => (
                <a key={n} href="#" className={styles.footer__socialLink}>
                  <Icon name={n} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={cx('container', styles.footer__legal)}>
          <div className={styles.footer__legalList}>
            {[
              'Dichiarazione di accessibilità',
              'FAQ',
              'Informativa cookie',
              'Informativa privacy',
              'Note legali',
              'Mappa del sito',
            ].map((l) => (
              <a key={l} href="#" className={styles.footer__legalLink}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
