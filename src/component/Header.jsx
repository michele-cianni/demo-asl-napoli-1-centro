import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../icons.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Header.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SOCIAL_LINKS = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'x', label: 'X (Twitter)' },
  { name: 'youtube', label: 'YouTube' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'whatsapp', label: 'WhatsApp' },
  { name: 'rss', label: 'RSS' },
];

// ─── TopBar ───
const TopBar = () => {
  const { isCompact, isMobile } = useResponsive();

  if (isCompact) {
    if (isMobile) {
      return (
        <div className={styles.topbar}>
          <div className={cx('container', styles.topbar__mobilePills)}>
            <a href="#" className={styles.topbar__pill}>
              <Icon name="globe" size={13} />
              Regione Campania
            </a>
            <a href="#" className={cx(styles.topbar__pill, styles['topbar__pill--strong'])}>
              <Icon name="users" size={13} />
              Area personale
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.topbar}>
        <div className={cx('container', styles.topbar__row, styles['topbar__row--compact'])}>
          <a href="#" className={styles.topbar__link}>
            <Icon name="globe" size={14} />
            Portale Regione Campania
          </a>
          <div className={cx(styles.topbar__actions, styles['topbar__actions--compact'])}>
            <a href="#" className={cx(styles.topbar__link, styles['topbar__link--strong'])}>
              <Icon name="users" size={14} /> Area personale
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.topbar}>
      <div className={cx('container', styles.topbar__row)}>
        <div className={styles.topbar__group}>
          <a href="#" className={styles.topbar__link}>
            <Icon name="globe" size={14} />
            Portale Regione Campania
            <Icon name="external" size={11} />
          </a>
        </div>
        <div className={styles.topbar__actions}>
          <button className={styles.topbar__btn}>
            <Icon name="globe" size={14} /> ITA <Icon name="chevron-down" size={12} />
          </button>
          <a href="#" className={cx(styles.topbar__link, styles['topbar__link--strong'])}>
            <Icon name="users" size={14} /> Area personale
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Brand row ───
const BrandRow = () => {
  const { isCompact, isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className={styles.brandRow}>
        <div className={cx('container', styles.brandRow__mobileWrap)}>
          <div className={styles.brandRow__mobileTop}>
            <a href="index.html" className={cx(styles.brand, styles['brand--mobile'])}>
              <div className={styles.brand__logoWrap}>
                <img
                  src={`${import.meta.env.BASE_URL}images/logos/logo-header.png`}
                  alt=""
                  className={cx(styles.brand__logo, styles['brand__logo--mobile'])}
                />
              </div>
              <div className={styles.brand__text}>
                <div className={styles.brand__name}>ASL Napoli 1 Centro</div>
              </div>
            </a>
            <div className={cx(styles.social, styles['social--mobile'])}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href="#" aria-label={s.label} className={styles.social__link}>
                  <Icon name={s.name} size={22} />
                </a>
              ))}
            </div>
          </div>
          <button className={cx(styles.searchBtn, styles['searchBtn--mobile'])}>
            <Icon name="search" size={16} />
            Cerca nel sito
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.brandRow}>
      <div
        className={cx(
          'container',
          styles.brandRow__inner,
          isCompact && styles['brandRow__inner--compact']
        )}
      >
        <a href="index.html" className={cx(styles.brand, isCompact && styles['brand--compact'])}>
          <div className={styles.brand__logoWrap}>
            <img
              src={`${import.meta.env.BASE_URL}images/logos/logo-header.png`}
              alt=""
              className={cx(styles.brand__logo, isCompact && styles['brand__logo--compact'])}
            />
          </div>
          <div className={styles.brand__text}>
            <div className={styles.brand__name}>ASL Napoli 1 Centro</div>
            <div className={styles.brand__tagline}>Azienda Sanitaria Locale</div>
          </div>
        </a>

        <div className={cx(styles.brand__actions, isCompact && styles['brand__actions--compact'])}>
          <div className={styles.social}>
            <span className={styles.social__label}>Seguici su</span>
            {SOCIAL_LINKS.map((s) => (
              <a key={s.name} href="#" aria-label={s.label} className={styles.social__link}>
                <Icon name={s.name} size={22} />
              </a>
            ))}
          </div>
          <span className={styles.divider} />
          <button className={styles.searchBtn}>
            <Icon name="search" size={16} />
            Cerca nel sito
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Mobile main nav ───
const MobileMainNav = ({ items, activeItem }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);
  const [panelTop, setPanelTop] = React.useState(0);
  const mobileMenuId = React.useId();
  const menuBtnRef = React.useRef(null);
  const firstItemRef = React.useRef(null);
  const barRef = React.useRef(null);
  const hasMounted = React.useRef(false);

  const setMenu = React.useCallback((val) => {
    setIsMenuOpen(val);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen)
      return () => {
        document.body.style.overflow = '';
      };
    const onKey = (e) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, setMenu]);

  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (isMenuOpen) {
      firstItemRef.current?.focus();
    } else {
      menuBtnRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleToggle = () => {
    if (!isMenuOpen && barRef.current) {
      setPanelTop(barRef.current.getBoundingClientRect().bottom);
    }
    setMenu((open) => !open);
  };

  const renderNavLink = (item, isFirstItem = false) => {
    const isActive = activeItem === item.id;
    const isExpanded = expandedItem === item.id;

    if (item.children) {
      return (
        <div key={item.id}>
          <button
            ref={isFirstItem ? firstItemRef : undefined}
            type="button"
            aria-expanded={isExpanded}
            aria-haspopup="true"
            className={cx(styles.mobileNavLink, isActive && styles['mobileNavLink--active'])}
            onClick={() => setExpandedItem(isExpanded ? null : item.id)}
          >
            <span>{item.label}</span>
            <Icon
              name="chevron-down"
              size={16}
              style={{
                transition: 'transform 0.15s',
                transform: isExpanded ? 'rotate(180deg)' : 'none',
              }}
            />
          </button>
          {isExpanded && (
            <div className={styles.mobileSubList}>
              {item.children.map((child) => (
                <a
                  key={child.id}
                  href={child.href}
                  className={styles.mobileSubLink}
                  onClick={() => setMenu(false)}
                >
                  <Icon name="chevron-right" size={14} />
                  <span>{child.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={item.id}
        ref={isFirstItem ? firstItemRef : undefined}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className={cx(styles.mobileNavLink, isActive && styles['mobileNavLink--active'])}
        onClick={() => setMenu(false)}
      >
        <span>{item.label}</span>
        <Icon name="chevron-right" size={16} />
      </a>
    );
  };

  return (
    <>
      <div ref={barRef} className={styles.mobileBar}>
        <div className={styles.mobileBar__labels}>
          <span className={styles.mobileBar__eyebrow}>Navigazione</span>
          <span className={styles.mobileBar__title}>
            {isMenuOpen ? 'Esplora le sezioni del sito' : 'Apri il menu principale'}
          </span>
        </div>
        <button
          ref={menuBtnRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={isMenuOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'}
          onClick={handleToggle}
          className={cx(styles.mobileBar__toggle, isMenuOpen && styles['mobileBar__toggle--open'])}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={18} />
          {isMenuOpen ? 'Chiudi' : 'Menu'}
        </button>
      </div>
      {isMenuOpen &&
        createPortal(
          <nav
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principale"
            className={styles.mobilePanel}
            style={{ top: panelTop }}
          >
            {items.map((item, i) => renderNavLink(item, i === 0))}
            <div className={styles.mobilePanel__ctas}>
              <a
                href="#"
                className={cx(
                  styles.quickCta,
                  styles['quickCta--navPrimary'],
                  styles['quickCta--full']
                )}
              >
                <Icon name="calendar" size={16} />
                <span>Prenota una visita</span>
                <span className={styles.quickCta__tag}>CUP</span>
              </a>
              <a
                href="#"
                className={cx(
                  styles.quickCta,
                  styles['quickCta--navOutline'],
                  styles['quickCta--full']
                )}
              >
                <Icon name="mail" size={16} />
                <span>Segnala un problema del sito</span>
                {/* <span className={styles.quickCta__tag}>WEB</span> */}
              </a>
            </div>
          </nav>,
          document.body
        )}
    </>
  );
};

// ─── Main navigation ───
const MainNav = ({ activeItem, active }) => {
  const { isCompact, isMobile } = useResponsive();
  activeItem = activeItem || active || '';
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const items = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'servizi', label: 'Servizi e prestazioni', href: 'page-servizi.html' },
    { id: 'come-fare-per', label: 'Come fare per', href: '#' },
    {
      id: 'strutture',
      label: 'Strutture',
      href: '#',
      children: [
        { id: 'distretti', label: 'Distretti', href: '#' },
        { id: 'dipartimenti', label: 'Dipartimenti', href: '#' },
        { id: 'presidi-ospedalieri', label: 'Presidi ospedalieri', href: 'page-ospedali.html' },
      ],
    },
    {
      id: 'asl-comunica',
      label: 'ASL Comunica',
      href: '#',
      children: [
        { id: 'avvisi', label: 'Avvisi', href: '#' },
        { id: 'news', label: 'News', href: '#' },
        { id: 'comunicati-stampa', label: 'Comunicati stampa', href: '#' },
        { id: 'bandi-concorsi', label: 'Bandi e concorsi', href: '#' },
      ],
    },
  ];

  const renderNavLink = (item) => {
    const isActive = activeItem === item.id;
    const isOpen = openDropdown === item.id;

    if (item.children) {
      return (
        <div
          key={item.id}
          className={styles.navItem}
          onMouseEnter={() => setOpenDropdown(item.id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={cx(
              styles.navTrigger,
              isCompact && styles['navLink--compact'],
              isActive && styles['navLink--active']
            )}
          >
            <span>{item.label}</span>
            <Icon
              name="chevron-down"
              size={14}
              style={{
                transition: 'transform 0.15s',
                transform: isOpen ? 'rotate(180deg)' : 'none',
              }}
            />
          </button>
          {isOpen && (
            <div className={styles.navDropdown}>
              {item.children.map((child) => (
                <a key={child.id} href={child.href} className={styles.navDropdown__link}>
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={item.id}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className={cx(
          styles.navLink,
          isCompact && styles['navLink--compact'],
          isActive && styles['navLink--active']
        )}
      >
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <div className={styles.nav}>
      <div
        className={cx(
          'container',
          styles.nav__inner,
          isCompact && styles['nav__inner--compact'],
          isMobile && styles['nav__inner--mobile']
        )}
      >
        {isMobile ? (
          <MobileMainNav items={items} activeItem={activeItem} />
        ) : (
          <>
            <nav
              aria-label="Menu principale"
              className={cx(
                styles.nav__list,
                isCompact && styles['nav__list--compact'],
                isCompact && 'h-scroll'
              )}
            >
              {items.map((item) => renderNavLink(item))}
            </nav>
            <div
              className={cx(styles.nav__ctaGroup, isCompact && styles['nav__ctaGroup--compact'])}
            >
              <a href="#" className={cx(styles.quickCta, styles['quickCta--navPrimary'])}>
                <Icon name="calendar" size={15} />
                <span>Prenota una visita</span>
                <span className={styles.quickCta__tag}>CUP</span>
              </a>
              <a
                href="#"
                className={cx(styles.quickCta, styles['quickCta--navOutline'])}
              >
                <Icon name="mail" size={15} />
                <span>Segnala un problema del sito</span>
                {/* <span className={styles.quickCta__tag}>WEB</span> */}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Banda CUP / URP sempre visibile ───
const QuickActions = () => {
  const { isCompact, isMobile } = useResponsive();

  return (
    <div className={styles.quick}>
      <div
        className={cx(
          'container',
          styles.quick__row,
          isCompact && styles['quick__row--compact'],
          isMobile && styles['quick__row--mobile']
        )}
      >
        <a
          href="#"
          className={cx(
            styles.quickCta,
            styles['quickCta--primary'],
            isMobile && styles['quickCta--full']
          )}
        >
          <Icon name="calendar" size={16} />
          <span>Prenota una visita</span>
          <span className={styles.quickCta__tag}>CUP</span>
        </a>
        <a
          href="#"
          className={cx(
            styles.quickCta,
            styles['quickCta--outline'],
            isMobile && styles['quickCta--full']
          )}
        >
          <Icon name="mail" size={16} />
          <span>Segnala un problema del sito</span>
          {/* <span className={styles.quickCta__tag}>WEB</span> */}
        </a>
      </div>
    </div>
  );
};

// ─── Sticky wrapper: nav (con CTA integrati) ───
const StickyHeader = ({ activeItem, active }) => {
  return (
    <div className={styles.sticky}>
      <MainNav activeItem={activeItem} active={active} />
    </div>
  );
};

export { TopBar, BrandRow, MainNav, QuickActions, StickyHeader };
