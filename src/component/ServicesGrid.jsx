import { ArrowLink, Section, SectionHeading } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const services = [
  {
    title: 'Visite specialistiche',
    desc: "Visualizza tutte le visite specialistiche erogate dall'ASL",
    href: 'page-servizi.html',
  },
  {
    title: 'Esami e analisi',
    desc: "Elenco di tutti gli esami e gli analisi effettuabili presso l'ASL",
    href: 'page-servizi.html',
  },
  {
    title: 'Prevenzione e vaccini',
    desc: 'Servizi e prestazioni per prevenire la comparsa, la diffusione e la progressione delle malattie.',
    href: 'page-servizi.html',
  },
];

const ServicesGrid = () => {
  const { isMobile, isCompact } = useResponsive();

  return (
    <Section
      style={{ backgroundColor: 'var(--bi-bg)' }}
      bgImage={`url('${import.meta.env.BASE_URL}images/servizi-e-prestazioni.png')`}
      bgOverlay="rgba(255,255,255,0.68)"
    >
      <SectionHeading
        title="Servizi e prestazioni"
        subtitle="Prenota visite, ritira referti e accedi a tutti i servizi sanitari del territorio in modo semplice e veloce."
        subtitleStyle={{ color: 'var(--bi-ink-700)' }}
        action={<ArrowLink href="page-servizi.html">Tutti i servizi</ArrowLink>}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isCompact ? '1fr' : 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {services.map((s, i) => (
          <a
            key={i}
            href={s.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              padding: 24,
              border: '1px solid var(--bi-border)',
              borderRadius: 'var(--r-md)',
              background: 'var(--bi-surface)',
              color: 'var(--bi-ink-900)',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--bi-primary)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--bi-border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--bi-ink-900)',
                lineHeight: 1.25,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: 14,
                color: 'var(--bi-ink-500)',
                lineHeight: 1.5,
              }}
            >
              {s.desc}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export { ServicesGrid };
