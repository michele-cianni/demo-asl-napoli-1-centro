import { useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive.js';
import { Section, Breadcrumb, Badge, Eyebrow } from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { Chatbot } from '../component/Chatbot.jsx';
import DistrictMap from '../district-map/DistrictMap.tsx';
import { useDistrictSelection } from '../district-map/useDistrictSelection.ts';
import { DISTRETTI } from '../district-map/districts-data.ts';
import { ComuneSearch } from '../district-map/ComuneSearch.jsx';

// ── Pannello dettaglio distretto (desktop) ──
function DistrettoDetail({ distretto }) {
  return (
    <div
      style={{
        padding: '24px 28px',
        background: 'var(--bi-surface)',
        borderRadius: 'var(--r-lg)',
        border: '1.5px solid var(--bi-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: distretto.colore,
            flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.12)',
          }}
        />
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--bi-ink-900)' }}>
          {distretto.nome}
        </h2>
      </div>
      <p style={{ color: 'var(--bi-ink-500)', fontSize: 13, margin: '0 0 16px' }}>
        {distretto.comuni.length} {distretto.comuni.length === 1 ? 'comune' : 'comuni'}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {distretto.comuni.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>
    </div>
  );
}

// ── Lista accordion per mobile ──
function MobileAccordion({ selectedDistrettoId, setSelectedDistrettoId }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
      {DISTRETTI.map((d) => {
        const isOpen = selectedDistrettoId === d.id;
        return (
          <div
            key={d.id}
            id={`distretto-${d.id}`}
            style={{
              borderRadius: 'var(--r-md)',
              border: `1.5px solid ${isOpen ? 'var(--bi-primary)' : 'var(--bi-border)'}`,
              background: isOpen ? 'var(--bi-primary-050)' : 'var(--bi-surface)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setSelectedDistrettoId(isOpen ? null : d.id)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: d.colore,
                  flexShrink: 0,
                  border: '1px solid rgba(0,0,0,0.12)',
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--bi-ink-900)', flex: 1 }}>
                {d.nome}
              </span>
              <span style={{ fontSize: 12, color: 'var(--bi-ink-500)' }}>
                {d.comuni.length} {d.comuni.length === 1 ? 'comune' : 'comuni'}
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: 'var(--bi-primary)',
                  transform: isOpen ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s',
                }}
              >
                ›
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 16px 16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {d.comuni.map((c) => (
                    <Badge key={c}>{c}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Pagina principale ──
export function PageDistretti() {
  const { isMobile } = useResponsive();
  const {
    highlightedDistrettoId,
    highlightedDistretto,
    selectedDistrettoId,
    setSelectedDistrettoId,
    setActiveDistrettoId,
  } = useDistrictSelection(null);

  // Deep-link: #distretto-49 → pre-seleziona il distretto
  useEffect(() => {
    const match = window.location.hash.match(/^#distretto-(\d+)$/)
    if (match) {
      setSelectedDistrettoId(Number(match[1]))
    }
  }, []);

  return (
    <div data-screen-label="Distretti sanitari" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader activeItem="organizzazione" />
      <Breadcrumb
        items={[
          { label: 'Home', href: 'index.html' },
          { label: 'Organizzazione', href: '#' },
          { label: 'Distretti sanitari' },
        ]}
      />

      <Section pad={{ desktop: '56px 0 80px', compact: '40px 0 64px', mobile: '32px 0 48px' }}>
        <Eyebrow>Organizzazione</Eyebrow>
        <h1
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: 700,
            color: 'var(--bi-ink-900)',
            margin: '8px 0 12px',
            fontFamily: 'var(--ff-sans)',
          }}
        >
          Distretti sanitari
        </h1>
        <p
          style={{
            fontSize: 16,
            color: 'var(--bi-ink-700)',
            lineHeight: 1.6,
            maxWidth: 640,
            margin: '0 0 40px',
          }}
        >
          Il territorio dell&apos;ASL Napoli 3 Sud è organizzato in 13 distretti che coprono 58
          comuni dell&apos;area vesuviana, stabiese e sorrentina. Cerca il tuo comune per
          individuare il distretto sanitario di competenza.
        </p>

        {isMobile ? (
          <>
            <ComuneSearch onSelect={(id) => id !== null && setSelectedDistrettoId(id)} />
            <MobileAccordion
              selectedDistrettoId={selectedDistrettoId}
              setSelectedDistrettoId={setSelectedDistrettoId}
            />
          </>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '60% 1fr',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Colonna sinistra: mappa */}
            <div id={`distretto-${selectedDistrettoId ?? ''}`}>
              <DistrictMap
                highlightedDistrettoId={highlightedDistrettoId}
                onHighlightDistretto={setActiveDistrettoId}
                onSelectDistretto={setSelectedDistrettoId}
              />
            </div>

            {/* Colonna destra: ricerca + dettaglio */}
            <div>
              <ComuneSearch onSelect={(id) => id !== null && setSelectedDistrettoId(id)} />
              <div style={{ marginTop: 24 }}>
                {highlightedDistretto ? (
                  <DistrettoDetail distretto={highlightedDistretto} />
                ) : (
                  <p
                    style={{
                      color: 'var(--bi-ink-500)',
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginTop: 16,
                    }}
                  >
                    Passa il mouse su un distretto o cerca il tuo comune per vedere i dettagli.
                  </p>
                )}
              </div>

              {/* Lista compatta di tutti i distretti */}
              <div style={{ marginTop: 32 }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--bi-ink-500)',
                    margin: '0 0 12px',
                  }}
                >
                  Tutti i distretti
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {DISTRETTI.map((d) => (
                    <button
                      key={d.id}
                      onClick={() =>
                        setSelectedDistrettoId(selectedDistrettoId === d.id ? null : d.id)
                      }
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '7px 10px',
                        border: `1px solid ${selectedDistrettoId === d.id ? 'var(--bi-primary)' : 'transparent'}`,
                        borderRadius: 'var(--r-sm)',
                        background:
                          selectedDistrettoId === d.id ? 'var(--bi-primary-050)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: d.colore,
                          flexShrink: 0,
                          border: '1px solid rgba(0,0,0,0.12)',
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          color: 'var(--bi-ink-900)',
                          fontWeight: selectedDistrettoId === d.id ? 700 : 400,
                          flex: 1,
                        }}
                      >
                        {d.nome}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--bi-ink-500)' }}>
                        {d.comuni.length} {d.comuni.length === 1 ? 'comune' : 'comuni'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Section>

      <FeedbackWidget />
      <Footer />
      <Chatbot />
    </div>
  );
}
