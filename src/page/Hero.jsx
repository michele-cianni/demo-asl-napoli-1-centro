import { Eyebrow } from '../component/UI.jsx';
import styles from './Hero.module.css';

/**
 * PageHero — title strip (eyebrow + h1 + lead) used on top-level content pages.
 * Le pagine di dettaglio con hero più articolato (referti, come-fare-per, maresca)
 * mantengono il proprio markup inline.
 */
const PageHero = ({ eyebrow, eyebrowColor, title, lead }) => (
  <div className={styles.wrap}>
    <div className="container">
      {eyebrow && <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h1 className={styles.title}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  </div>
);

export { PageHero };
