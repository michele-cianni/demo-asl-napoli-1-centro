import React from 'react';
import { Icon } from '../icons.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './UI.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── Button ───
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconRight,
  onClick,
  as = 'button',
  href,
  block,
}) => {
  const { isCompact } = useResponsive();
  const resolvedSize = isCompact && (size === 'lg' || size === 'xl') ? 'md' : size;
  const iconSize = resolvedSize === 'lg' || resolvedSize === 'xl' ? 20 : 16;

  const className = cx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${resolvedSize}`],
    block && styles['button--block'],
    (block || isCompact) && styles['button--wrap']
  );

  const content = (
    <>
      {icon && <Icon name={icon} size={iconSize} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={iconSize} />}
    </>
  );

  if (as === 'a' || href)
    return (
      <a href={href || '#'} onClick={onClick} className={className}>
        {content}
      </a>
    );
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};

// ─── Badge / Chip ───
const Badge = ({ children, tone = 'primary', icon }) => (
  <span className={cx(styles.badge, styles[`badge--${tone}`])}>
    {icon && <Icon name={icon} size={12} />}
    {children}
  </span>
);

// ─── Link with arrow (Designers Italia "Vai a" pattern) ───
const ArrowLink = ({ children, href = '#', color = 'var(--bi-primary)' }) => (
  <a href={href} className={styles.arrowLink} style={{ color }}>
    {children} <Icon name="arrow-right" size={15} />
  </a>
);

// ─── Section wrapper ───
const Section = ({ children, bg, pad, style, id }) => {
  const { isMobile, isCompact } = useResponsive();

  let resolvedPad;
  if (typeof pad === 'string' || typeof pad === 'number') {
    resolvedPad = pad;
  } else if (pad && typeof pad === 'object') {
    resolvedPad =
      (isMobile ? pad.mobile : isCompact ? pad.compact : pad.desktop) ??
      (isCompact ? pad.compact : pad.desktop) ??
      pad.mobile;
  }

  const sectionStyle = {
    ...(bg !== undefined && { background: bg }),
    ...(resolvedPad !== undefined && { padding: resolvedPad }),
    ...style,
  };

  return (
    <section id={id} className={styles.section} style={sectionStyle}>
      <div className="container">{children}</div>
    </section>
  );
};

// ─── Eyebrow ───
const Eyebrow = ({ children, color = 'var(--bi-primary)' }) => (
  <div className={styles.eyebrow} style={{ color }}>
    <span className={styles.eyebrow__bar} />
    {children}
  </div>
);

// ─── Section heading ───
const SectionHeading = ({ eyebrow, title, subtitle, align = 'left', action }) => {
  const { isCompact } = useResponsive();
  const isCentered = align === 'center';

  const className = cx(
    styles.heading,
    isCentered && styles['heading--centered'],
    isCompact && styles['heading--compact']
  );

  return (
    <div className={className}>
      <div className={styles.heading__main}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={styles.heading__title}>{title}</h2>
        {subtitle && <p className={styles.heading__subtitle}>{subtitle}</p>}
      </div>
      {action && <div className={styles.heading__action}>{action}</div>}
    </div>
  );
};

// ─── Breadcrumb ───
const Breadcrumb = ({ items }) => (
  <nav aria-label="Percorso di navigazione" className={styles.breadcrumb}>
    <div className="container">
      <ol className={styles.breadcrumb__list}>
        {items.map((item, i) => (
          <li key={i} className={styles.breadcrumb__item}>
            {i > 0 && <Icon name="chevron-right" size={12} color="var(--bi-ink-300)" />}
            {item.href ? (
              <a href={item.href} className={styles.breadcrumb__link}>
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className={styles.breadcrumb__current}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export { Button, Badge, ArrowLink, Section, Eyebrow, SectionHeading, Breadcrumb };
