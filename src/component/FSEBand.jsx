import { Button } from './UI.jsx';
import styles from './FSEBand.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

const FSEBand = () => (
  <section className={styles.band}>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('${import.meta.env.BASE_URL}images/background/fascicolo-sanitario.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.18,
      }}
    />
    <div className={cx('container', styles.band__center)}>
      <h2 className={styles.band__title}>Fascicolo Sanitario Elettronico (FSE)</h2>
      <p className={styles.band__intro}>
        Paga online, prenota visite e ritira referti direttamente sul tuo Fascicolo Sanitario
        Elettronico
      </p>
      <div className={styles.band__buttons}>
        <Button variant="outlineWhite" size="lg" href="#">
          Vai al servizio
        </Button>
      </div>
    </div>
  </section>
);

export { FSEBand };
