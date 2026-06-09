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
              src={`${import.meta.env.BASE_URL}images/logos/logo-footer.png`}
              alt=""
              style={{ height: 48, width: 'auto', objectFit: 'contain' }}
            />
            <div className={styles.footer__brandTitle}>ASL Napoli 1 Centro</div>
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
                'Organigramma',
                { label: 'Distretti sanitari', href: '#' },
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
              Via Comunale del Principe 13/A — 80145 Napoli (NA)
              <br />
              C.F. / P.IVA 06328131211
              <br />
              PEC: aslnapoli1centro@pec.aslna1centro.it
              <br />
              +39 081 2541111
            </p>
            <a href="#" className={styles.footer__contactLink}>
              Segnala un problema del sito
            </a>
            <p className={styles.footer__urpNote}>
              Per reclami, orientamento ai servizi e richieste generali resta attivo l&apos;URP.
            </p>
          </div>
          <div>
            <div className={styles.footer__colTitle}>Seguici su</div>
            <div className={styles.footer__social}>
              {['facebook', 'instagram', 'youtube'].map((n) => (
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
