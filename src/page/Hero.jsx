import { Eyebrow } from '../component/UI.jsx';
import styles from './Hero.module.css';

/**
 * PageHero — title strip (eyebrow + h1 + lead) used on top-level content pages.
 * Le pagine di dettaglio con hero più articolato (referti, come-fare-per, ospedale-del-mare)
 * mantengono il proprio markup inline.
 */
const PageHero = ({ eyebrow, eyebrowColor, title, lead, bgImage }) => (
  <div
    className={styles.wrap}
    style={bgImage ? {
      position: 'relative',
      backgroundImage: `url('${bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '72px 0 80px',
    } : undefined}
  >
    {bgImage && (
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(120deg, rgba(0,26,36,0.75) 0%, rgba(0,121,140,0.65) 100%)',
      }} />
    )}
    <div className="container" style={bgImage ? { position: 'relative' } : undefined}>
      {eyebrow && <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h1
        className={styles.title}
        style={bgImage ? { color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.25)' } : undefined}
      >{title}</h1>
      {lead && (
        <p
          className={styles.lead}
          style={bgImage ? { color: 'rgba(255,255,255,0.88)' } : undefined}
        >{lead}</p>
      )}
    </div>
  </div>
);

export { PageHero };
