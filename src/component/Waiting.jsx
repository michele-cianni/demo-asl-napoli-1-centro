import React from 'react';
import { Icon } from '../icons.jsx';
import { Section, SectionHeading, ArrowLink } from './UI.jsx';
import styles from './Waiting.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── Waiting lists + CUP widget ───

const WaitingLists = () => {
  const [tab, setTab] = React.useState('B');
  const priorities = [
    { id: 'U', label: 'U · Urgente', subtitle: 'entro 72 ore' },
    { id: 'B', label: 'B · Breve', subtitle: 'entro 10 giorni' },
    { id: 'D', label: 'D · Differita', subtitle: 'entro 30–60 giorni' },
    { id: 'P', label: 'P · Programmata', subtitle: 'entro 120 giorni' },
  ];
  const rows = {
    U: [
      { svc: 'Elettrocardiogramma', avg: 1, max: 2, target: 3, ok: true },
      { svc: 'Visita cardiologica', avg: 2, max: 3, target: 3, ok: true },
      { svc: 'Ecografia addome', avg: 2, max: 3, target: 3, ok: true },
    ],
    B: [
      { svc: 'Visita dermatologica', avg: 7, max: 9, target: 10, ok: true },
      { svc: 'Visita oculistica', avg: 8, max: 11, target: 10, ok: false },
      { svc: 'Mammografia', avg: 6, max: 8, target: 10, ok: true },
      { svc: 'Ecografia tiroide', avg: 9, max: 10, target: 10, ok: true },
      { svc: 'Visita ortopedica', avg: 10, max: 13, target: 10, ok: false },
    ],
    D: [
      { svc: 'Colonscopia', avg: 22, max: 28, target: 60, ok: true },
      { svc: 'Gastroscopia', avg: 18, max: 24, target: 60, ok: true },
      { svc: 'Risonanza ginocchio', avg: 34, max: 42, target: 60, ok: true },
      { svc: 'TC torace con mdc', avg: 41, max: 52, target: 60, ok: true },
    ],
    P: [
      {
        svc: 'Visita endocrinologica',
        avg: 68,
        max: 85,
        target: 120,
        ok: true,
      },
      { svc: 'Visita reumatologica', avg: 95, max: 118, target: 120, ok: true },
      { svc: 'Densitometria MOC', avg: 55, max: 70, target: 120, ok: true },
    ],
  };
  const active = rows[tab];
  const maxTarget = Math.max(...active.map((r) => Math.max(r.max, r.target)));

  return (
    <Section bg="var(--bi-bg-alt)" id="liste-attesa">
      <SectionHeading
        eyebrow="Trasparenza"
        title="Liste d'attesa aggiornate al 18 aprile 2026"
        subtitle="Tempi medi di attesa per le prestazioni ambulatoriali erogate dall'ASL Napoli 1 Centro, aggiornati ogni lunedì."
        action={<ArrowLink>Scarica il report completo</ArrowLink>}
      />

      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {priorities.map((p) => {
            const isActive = tab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setTab(p.id)}
                className={cx(styles.tab, isActive && styles['tab--active'])}
              >
                <div className={cx(styles.tab__label, isActive && styles['tab__label--active'])}>
                  {p.label}
                </div>
                <div className={styles.tab__sub}>{p.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Header row */}
        <div className={styles.tableHead}>
          <div>Prestazione</div>
          <div>Tempo medio vs soglia regionale</div>
          <div className={styles.tableHead__right}>Media</div>
          <div className={styles.tableHead__right}>Soglia</div>
        </div>

        {/* Rows */}
        <div>
          {active.map((r, i) => (
            <div key={i} className={styles.tableRow}>
              <div className={styles.row__svc}>
                <Icon name="stethoscope" size={16} color="var(--bi-ink-500)" />
                {r.svc}
              </div>
              <div className={styles.row__barWrap}>
                <div
                  className={cx(
                    styles.row__barFill,
                    r.ok ? styles['row__barFill--ok'] : styles['row__barFill--warn']
                  )}
                  style={{ width: `${(r.avg / maxTarget) * 100}%` }}
                />
                <div
                  className={styles.row__barThreshold}
                  style={{ left: `${(r.target / maxTarget) * 100}%` }}
                />
              </div>
              <div
                className={cx(
                  styles.row__avg,
                  r.ok ? styles['row__avg--ok'] : styles['row__avg--warn']
                )}
              >
                {r.avg} gg
              </div>
              <div className={styles.row__target}>{r.target} gg</div>
            </div>
          ))}
        </div>

        {/* Footer legend */}
        <div className={styles.legend}>
          <div className={styles.legend__items}>
            <span className={styles.legend__item}>
              <span className={styles.legend__dotSuccess} /> Entro soglia
            </span>
            <span className={styles.legend__item}>
              <span className={styles.legend__dotWarn} /> Oltre soglia
            </span>
            <span className={styles.legend__item}>
              <span className={styles.legend__dotThreshold} /> Soglia regionale
            </span>
          </div>
          <span>Fonte: Agenas · Dati 2026 Q2</span>
        </div>
      </div>
    </Section>
  );
};

export { WaitingLists };
