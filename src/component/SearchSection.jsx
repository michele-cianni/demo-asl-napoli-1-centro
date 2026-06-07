import React from 'react';
import { Icon } from '../icons.jsx';
import { Section } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const SearchSection = () => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const { isMobile } = useResponsive();

  const quick = [
    'Prestazioni sanitarie',
    'Emergenza e urgenza',
    'Screening tumori',
    'Reparti e unità operative',
    'Orientamento e contatti',
    'Vaccinazione',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Section
      bg="var(--bi-bg)"
      pad={{ desktop: '20px 0 16px', compact: '16px 0 12px', mobile: '14px 0 10px' }}
    >
      <div>
        <h2
          style={{
            fontFamily: 'var(--ff-sans)',
            fontWeight: 700,
            fontSize: isMobile ? 17 : 19,
            color: 'var(--bi-ink-900)',
            marginBottom: 10,
          }}
        >
          Cerca nel sito
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            maxWidth: 600,
            borderRadius: 'var(--r-md)',
            border: `1.5px solid ${focused ? 'var(--bi-primary)' : 'var(--bi-border)'}`,
            overflow: 'hidden',
            background: '#fff',
            boxShadow: focused ? '0 0 0 3px rgba(28, 58, 110, 0.12)' : 'var(--shadow-sm)',
            transition: 'box-shadow 0.2s, border-color 0.2s',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 12,
              color: 'var(--bi-ink-500)',
              flexShrink: 0,
            }}
          >
            <Icon name="search" size={16} />
          </div>
          <input
            type="text"
            placeholder={
              isMobile ? 'Cerca nel sito…' : 'Inserisci parole chiave, ad esempio "Vaccinazioni"'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--ff-sans)',
              fontSize: 14,
              padding: '10px 10px',
              background: 'transparent',
              color: 'var(--bi-ink-900)',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'var(--bi-primary)',
              color: '#fff',
              border: 'none',
              padding: '0 18px',
              fontFamily: 'var(--ff-sans)',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            Cerca
          </button>
        </form>

        {isMobile && (
          <p
            style={{ fontSize: 11, color: 'var(--bi-ink-500)', marginTop: 6, fontStyle: 'italic' }}
          >
            Ad esempio: "Vaccinazioni", "Cambio medico"
          </p>
        )}

        <div style={{ marginTop: 20 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: 'var(--bi-ink-700)',
              marginBottom: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Ricerca rapida
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 8,
              ...(isMobile && {
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
              }),
            }}
          >
            {quick.map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--bi-primary)',
                  padding: '5px 10px',
                  borderRadius: 99,
                  border: '1.5px solid var(--bi-primary-100)',
                  background: 'var(--bi-primary-050)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SearchSection };
