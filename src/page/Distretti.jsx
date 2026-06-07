import { useState } from 'react';
import { Icon } from '../icons.jsx';
import { Badge, ArrowLink, Section, Breadcrumb, Eyebrow } from '../component/UI.jsx';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { Chatbot } from '../component/Chatbot.jsx';
import { DISTRETTI } from '../district-map/districts-data.ts';

// ── Card singolo distretto ──
function DistrettoCard({ distretto }) {
  const visibleComuni = distretto.comuni.slice(0, 4);
  const overflow = distretto.comuni.length - visibleComuni.length;

  return (
    <a
      href="#"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bi-surface)',
        border: '1px solid var(--bi-border)',
        borderTop: `3px solid ${distretto.colore}`,
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{ padding: '20px 20px 16px', flex: 1 }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bi-ink-500)', margin: '0 0 6px' }}>
          Distretto sanitario
        </p>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: 'var(--bi-ink-900)', margin: '0 0 4px', fontFamily: 'var(--ff-sans)', lineHeight: 1.3 }}>
          {distretto.nome}
        </h2>
        <p style={{ fontSize: 13, color: 'var(--bi-ink-500)', margin: '0 0 14px' }}>
          {distretto.comuni.length} {distretto.comuni.length === 1 ? 'comune' : 'comuni'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {visibleComuni.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
          {overflow > 0 && (
            <Badge>+{overflow} altri</Badge>
          )}
        </div>
      </div>
      <div style={{ padding: '12px 20px', borderTop: '1px solid var(--bi-border)' }}>
        <ArrowLink href="#">Vai al distretto</ArrowLink>
      </div>
    </a>
  );
}

// ── Pagina principale ──
export function PageDistretti() {
  const [query, setQuery] = useState('');

  const filtered = query.trim().length === 0
    ? DISTRETTI
    : DISTRETTI.filter((d) => {
        const q = query.toLowerCase();
        return (
          d.nome.toLowerCase().includes(q) ||
          d.comuni.some((c) => c.toLowerCase().includes(q))
        );
      });

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
            fontSize: 'clamp(26px, 4vw, 36px)',
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
          Il territorio dell&apos;ASL Napoli 1 Centro è organizzato in 10 distretti che coprono i
          quartieri e le Municipalità della città di Napoli e l&apos;isola di Capri. Cerca il tuo
          quartiere per individuare il distretto sanitario di competenza.
        </p>

        {/* Barra di ricerca */}
        <div
          style={{
            position: 'relative',
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--bi-ink-500)',
              pointerEvents: 'none',
              display: 'flex',
            }}
          >
            <Icon name="search" size={18} />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per distretto o comune..."
            style={{
              width: '100%',
              padding: '11px 16px 11px 42px',
              fontSize: 15,
              border: '1.5px solid var(--bi-border)',
              borderRadius: 'var(--r-md)',
              background: 'var(--bi-surface)',
              color: 'var(--bi-ink-900)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--bi-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--bi-border)')}
          />
        </div>

        {/* Griglia card */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((d) => (
              <DistrettoCard key={d.id} distretto={d} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--bi-ink-500)', fontSize: 15 }}>
            Nessun distretto trovato per &ldquo;{query}&rdquo;.
          </p>
        )}
      </Section>

      <FeedbackWidget />
      <Footer />
      <Chatbot />
    </div>
  );
}
