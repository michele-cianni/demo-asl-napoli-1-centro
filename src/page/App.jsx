import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Hero } from '../component/Hero.jsx';
import { HowToGrid } from '../component/HowTo.jsx';
import { News } from '../component/News.jsx';
import { AudienceGrid } from '../component/Audience.jsx';
import { Tenders } from '../component/Tenders.jsx';
import { Footer } from '../component/Footer.jsx';
import { FSEBand } from '../component/FSEBand.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { Chatbot } from '../component/Chatbot.jsx';
import { Section, SectionHeading, ArrowLink, Badge } from '../component/UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import DistrictMap from '../district-map/DistrictMap.tsx';
import { useDistrictSelection } from '../district-map/useDistrictSelection.ts';
import { ComuneSearch } from '../district-map/ComuneSearch.jsx';

// ── Panel mostrato a destra quando un distretto è evidenziato ──
function DistrettoPanel({ distretto }) {
  return (
    <div
      style={{
        marginTop: 20,
        padding: '20px 24px',
        background: 'var(--bi-surface)',
        borderRadius: 'var(--r-lg)',
        border: '1.5px solid var(--bi-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: distretto.colore,
            flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.12)',
          }}
        />
        <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--bi-ink-900)' }}>
          {distretto.nome}
        </span>
      </div>
      <p style={{ color: 'var(--bi-ink-500)', fontSize: 13, margin: '0 0 12px' }}>
        {distretto.comuni.length} {distretto.comuni.length === 1 ? 'comune' : 'comuni'}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {distretto.comuni.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>
      <ArrowLink href={`page-distretti.html#distretto-${distretto.id}`}>Scopri di più</ArrowLink>
    </div>
  );
}


// ── Widget principale ──
function DistrettoWidget() {
  const { isMobile } = useResponsive();
  const {
    highlightedDistrettoId,
    highlightedDistretto,
    selectedDistretto,
    setSelectedDistrettoId,
    setActiveDistrettoId,
  } = useDistrictSelection(null);

  return (
    <Section
      bg="var(--bi-bg-alt)"
      pad={{ desktop: '64px 0', compact: '48px 0', mobile: '40px 0' }}
    >
      <SectionHeading
        eyebrow="Il territorio"
        title="Trova il tuo distretto"
        subtitle={
          isMobile
            ? 'Cerca il tuo comune per scoprire a quale distretto sanitario appartieni.'
            : 'Cerca il tuo comune o clicca sulla mappa per scoprire a quale distretto sanitario appartieni.'
        }
      />
      <div style={{ marginTop: 32 }}>
        {isMobile ? (
          <>
            <ComuneSearch onSelect={(id) => id !== null && setSelectedDistrettoId(id)} />
            {selectedDistretto ? (
              <DistrettoPanel distretto={selectedDistretto} />
            ) : (
              <p style={{ color: 'var(--bi-ink-500)', fontSize: 14, marginTop: 16, lineHeight: 1.6 }}>
                Digita il nome del tuo comune per trovare il distretto.
              </p>
            )}
            <div style={{ marginTop: 20 }}>
              <ArrowLink href="page-distretti.html">Sfoglia tutti i distretti</ArrowLink>
            </div>
          </>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '55% 1fr',
              gap: 40,
              alignItems: 'start',
            }}
          >
            <DistrictMap
              highlightedDistrettoId={highlightedDistrettoId}
              onHighlightDistretto={setActiveDistrettoId}
              onSelectDistretto={setSelectedDistrettoId}
            />
            <div>
              <ComuneSearch onSelect={(id) => id !== null && setSelectedDistrettoId(id)} />
              {highlightedDistretto ? (
                <DistrettoPanel distretto={highlightedDistretto} />
              ) : (
                <p
                  style={{
                    marginTop: 20,
                    color: 'var(--bi-ink-500)',
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  Passa il mouse su un distretto o cerca il tuo comune per vedere i dettagli.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function App() {
  return (
    <div data-screen-label="01 Homepage desktop" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader />
      <Hero />
      <HowToGrid />
      <DistrettoWidget />
      <FSEBand />
      <AudienceGrid />
      <News />
      <Tenders />
      <FeedbackWidget />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
