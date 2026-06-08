import React from 'react';
import { useResponsive } from '../hooks/useResponsive.js';
import { Icon } from '../icons.jsx';
import {
  Button,
  Badge,
  ArrowLink,
  Section,
  SectionHeading,
  Breadcrumb,
  Eyebrow,
} from '../component/UI.jsx';
import { PageHero } from './Hero.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { MapView } from '../component/MapView.jsx';
import {
  OSPEDALI_ASL_NAPOLI_1_CENTRO as OSPEDALI,
  ALL_QUARTIERI as ALL_COMUNI,
  AREE_CLINICHE,
} from '../data/ospedaliAslNapoli1Centro.js';

// ─── Pagina lista Ospedali (PRD §5.5) ───
// URL: /strutture/ospedali/
// Breadcrumb: Home → Strutture → Ospedali

// ── Chip filtro ──
const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '6px 14px',
      borderRadius: 99,
      border: `1.5px solid ${active ? 'var(--bi-primary)' : 'var(--bi-border)'}`,
      background: active ? 'var(--bi-primary)' : 'var(--bi-surface)',
      color: active ? '#fff' : 'var(--bi-ink-700)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.15s',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </button>
);

// ── Card ospedale ──
const OspedaleCard = ({ osp }) => {
  const badgeTones = {
    warm: { bg: 'var(--bi-warm-100)', fg: 'var(--bi-warm)' },
    teal: { bg: 'var(--bi-teal-100)', fg: 'var(--bi-teal-700)' },
    primary: { bg: 'var(--bi-primary-100)', fg: 'var(--bi-primary-800)' },
  };
  const t = badgeTones[osp.badgeTone] || badgeTones.primary;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bi-surface)',
        border: '1px solid var(--bi-border)',
        borderRadius: 12,
        overflow: 'hidden',
        color: 'inherit',
      }}
    >
      {/* Immagine placeholder 16:9 */}
      <div
        className="placeholder-img"
        style={{
          aspectRatio: '16/9',
          borderRadius: 0,
          fontSize: 11,
          color: 'var(--bi-primary-800)',
        }}
      >
        FOTO REALE · {osp.nome} · 800×450
      </div>

      <div
        style={{
          padding: '20px 22px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* Badge + gruppo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 99,
              background: t.bg,
              color: t.fg,
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            {osp.badge}
          </span>
          {osp.gruppo && (
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 99,
                background: 'var(--bi-teal-100)',
                color: 'var(--bi-teal-700)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.3,
              }}
            >
              {osp.gruppo}
            </span>
          )}
        </div>

        {/* Afferenza */}
        {osp.afferenteA && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 11,
              color: 'var(--bi-ink-500)',
            }}
          >
            <Icon name="arrow-right" size={11} />
            {osp.tipoAfferenza} del {osp.afferenteA}
          </div>
        )}

        {/* Nome */}
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--ff-serif)',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'var(--bi-ink-900)',
          }}
        >
          {osp.nome}
        </h3>

        {/* Indirizzo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            fontSize: 13,
            color: 'var(--bi-ink-500)',
          }}
        >
          <Icon name="hospital" size={14} style={{ flexShrink: 0, marginTop: 1 }} />
          {osp.indirizzo}
        </div>

        {/* Telefono */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'var(--bi-ink-700)',
          }}
        >
          <Icon name="phone" size={14} style={{ color: 'var(--bi-primary)' }} />
          <a
            href={osp.telefonoHref}
            style={{
              color: 'var(--bi-primary)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {osp.telefono}
          </a>
        </div>

        {/* Specialità chips (max 3) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginTop: 'auto',
            paddingTop: 8,
          }}
        >
          {osp.specialita.slice(0, 3).map((s) => (
            <span
              key={s}
              style={{
                padding: '3px 10px',
                borderRadius: 99,
                background: 'var(--bi-bg-alt)',
                color: 'var(--bi-ink-700)',
                fontSize: 11,
                fontWeight: 600,
                border: '1px solid var(--bi-border)',
              }}
            >
              {s}
            </span>
          ))}
          {osp.specialita.length > 3 && (
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 99,
                background: 'var(--bi-bg-alt)',
                color: 'var(--bi-ink-500)',
                fontSize: 11,
                fontWeight: 600,
                border: '1px solid var(--bi-border)',
              }}
            >
              +{osp.specialita.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            paddingTop: 12,
            borderTop: '1px solid var(--bi-border)',
            color: 'var(--bi-primary)',
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Scheda struttura
          <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </div>
  );
};

// ── Stato vuoto ──
const EmptyState = ({ onReset }) => (
  <div
    style={{
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '64px 32px',
      color: 'var(--bi-ink-500)',
    }}
  >
    <div style={{ fontSize: 48, marginBottom: 16 }}>🏥</div>
    <div
      style={{
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 8,
        color: 'var(--bi-ink-700)',
      }}
    >
      Nessun ospedale corrisponde ai filtri selezionati
    </div>
    <button
      onClick={onReset}
      style={{
        marginTop: 16,
        padding: '10px 24px',
        background: 'var(--bi-primary)',
        color: '#fff',
        borderRadius: 6,
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer',
        border: 'none',
      }}
    >
      Azzera filtri
    </button>
  </div>
);

// ── Pagina principale ──
const PageOspedali = () => {
  const { isMobile } = useResponsive();
  const [search, setSearch] = React.useState('');
  const [comuneFilter, setComuneFilter] = React.useState(null);
  const [specFilter, setSpecFilter] = React.useState(null);
  const [view, setView] = React.useState('lista'); // lista | mappa

  const filtered = OSPEDALI.filter((o) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      o.nome.toLowerCase().includes(q) ||
      o.specialita.some((s) => s.toLowerCase().includes(q));
    const matchComune = !comuneFilter || o.comune === comuneFilter;
    const matchSpec = !specFilter || o.specialita.includes(specFilter);
    return matchSearch && matchComune && matchSpec;
  });

  const resetFilters = () => {
    setSearch('');
    setComuneFilter(null);
    setSpecFilter(null);
  };

  const hasFilters = search || comuneFilter || specFilter;

  return (
    <div data-screen-label="05 Ospedali — lista" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader activeItem="strutture" />
      <Breadcrumb
        items={[
          { label: 'Home', href: 'index.html' },
          { label: 'Strutture', href: '#' },
          { label: 'Ospedali' },
        ]}
      />

      <PageHero
        title="Ospedali"
        lead={`La rete ospedaliera dell'ASL Napoli 1 Centro comprende ${OSPEDALI.length} presidi distribuiti tra la città di Napoli e l'isola di Capri.`}
      />

      {/* ── Barra di ricerca ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--bi-surface)',
          borderBottom: '1px solid var(--bi-border)',
          padding: '24px 0',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${import.meta.env.BASE_URL}images/sotto-la-barra-ricerca-ospedali.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {/* Search input */}
            <div
              style={{
                flex: isMobile ? '1 1 100%' : '1 1 300px',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bi-bg)',
                border: '1.5px solid var(--bi-border)',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
              onFocusCapture={(e) => (e.currentTarget.style.borderColor = 'var(--bi-primary)')}
              onBlurCapture={(e) => (e.currentTarget.style.borderColor = 'var(--bi-border)')}
            >
              <span
                style={{
                  padding: '0 14px',
                  color: 'var(--bi-ink-500)',
                  flexShrink: 0,
                }}
              >
                <Icon name="search" size={18} />
              </span>
              <input
                type="text"
                placeholder="Cerca per nome ospedale o area clinica…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: 15,
                  background: 'transparent',
                  color: 'var(--bi-ink-900)',
                  fontFamily: 'var(--ff-sans)',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    padding: '0 14px',
                    color: 'var(--bi-ink-500)',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="close" size={16} />
                </button>
              )}
            </div>

            {/* Toggle lista / mappa — nascosto su mobile */}
            {!isMobile && (
              <div
                style={{
                  display: 'flex',
                  border: '1.5px solid var(--bi-border)',
                  borderRadius: 8,
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {[
                  { id: 'lista', icon: 'menu', label: 'Lista' },
                  { id: 'mappa', icon: 'hospital', label: 'Mappa' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setView(v.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '9px 16px',
                      fontSize: 13,
                      fontWeight: 700,
                      background: view === v.id ? 'var(--bi-primary)' : 'var(--bi-surface)',
                      color: view === v.id ? '#fff' : 'var(--bi-ink-700)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    <Icon name={v.icon} size={15} />
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filtri a chip */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              gap: isMobile ? 16 : 24,
              flexWrap: 'wrap',
            }}
          >
            {/* Filtro comune */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--bi-ink-500)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 8,
                }}
              >
                Comune
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <FilterChip
                  label="Tutti"
                  active={!comuneFilter}
                  onClick={() => setComuneFilter(null)}
                />
                {ALL_COMUNI.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={comuneFilter === c}
                    onClick={() => setComuneFilter(comuneFilter === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            {/* Filtro specialità */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--bi-ink-500)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 8,
                }}
              >
                Aree cliniche ad alta specializzazione
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <FilterChip
                  label="Tutte"
                  active={!specFilter}
                  onClick={() => setSpecFilter(null)}
                />
                {AREE_CLINICHE.map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={specFilter === s}
                    onClick={() => setSpecFilter(specFilter === s ? null : s)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contatore risultati */}
          {hasFilters && (
            <div
              style={{
                marginTop: 12,
                fontSize: 13,
                color: 'var(--bi-ink-500)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span>
                {filtered.length === 0
                  ? 'Nessun risultato'
                  : `${filtered.length} ospedal${filtered.length !== 1 ? 'i' : 'e'} trovat${filtered.length !== 1 ? 'i' : 'o'}`}
              </span>
              <button
                onClick={resetFilters}
                style={{
                  color: 'var(--bi-primary)',
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Azzera filtri
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Vista lista ── */}
      {(view === 'lista' || isMobile) && (
        <div style={{ padding: isMobile ? '24px 0 48px' : '48px 0 80px' }}>
          <div className="container">
            {filtered.length === 0 ? (
              <div style={{ display: 'grid' }}>
                <EmptyState onReset={resetFilters} />
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 24,
                }}
              >
                {filtered.map((osp) => (
                  <OspedaleCard key={osp.id} osp={osp} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Vista mappa — solo desktop ── */}
      {view === 'mappa' && !isMobile && (
        <div style={{ padding: isMobile ? '24px 0 48px' : '48px 0 80px' }}>
          <div className="container">
            <MapView ospedali={filtered} />
          </div>
        </div>
      )}

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

export { PageOspedali };
