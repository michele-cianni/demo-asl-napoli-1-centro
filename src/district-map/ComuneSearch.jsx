import { useState, useRef, useId } from 'react';
import { DISTRETTI } from './districts-data';
import { Icon } from '../icons.jsx';

const ALL_COMUNI = DISTRETTI.flatMap((d) =>
  d.comuni.map((c) => ({ comune: c, distrettoId: d.id, distrettoNome: d.nome }))
).sort((a, b) => a.comune.localeCompare(b.comune, 'it'));

function normalize(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export function ComuneSearch({ onSelect, placeholder = 'Cerca comune…' }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const listboxId = useId();
  const inputRef = useRef(null);

  const suggestions =
    query.length > 0
      ? ALL_COMUNI.filter((c) => normalize(c.comune).includes(normalize(query))).slice(0, 6)
      : [];

  function select(item) {
    setQuery(item.comune);
    setOpen(false);
    setActiveIdx(-1);
    onSelect?.(item.distrettoId);
  }

  function handleKey(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0 && suggestions.length > 0) {
      e.preventDefault();
      select(suggestions[activeIdx]);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIdx(-1);
    }
  }

  function clear() {
    setQuery('');
    setOpen(false);
    setActiveIdx(-1);
    onSelect?.(null);
    inputRef.current?.focus();
  }

  const isOpen = open && suggestions.length > 0;

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px',
          border: '1.5px solid var(--bi-border)',
          borderRadius: 'var(--r-md)',
          background: 'var(--bi-surface)',
        }}
      >
        <Icon name="search" size={16} color="var(--bi-ink-500)" />
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={activeIdx >= 0 ? `${listboxId}-opt-${activeIdx}` : undefined}
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onKeyDown={handleKey}
          onFocus={() => {
            if (query.length > 0) setOpen(true);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            flex: 1,
            fontSize: 15,
            color: 'var(--bi-ink-900)',
            fontFamily: 'var(--ff-sans)',
          }}
        />
        {query.length > 0 && (
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              clear();
            }}
            aria-label="Cancella ricerca"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon name="close" size={14} color="var(--bi-ink-500)" />
          </button>
        )}
      </div>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            background: 'var(--bi-surface)',
            border: '1.5px solid var(--bi-border)',
            borderRadius: 'var(--r-md)',
            boxShadow: 'var(--shadow-md)',
            zIndex: 100,
            margin: 0,
            padding: '4px 0',
            listStyle: 'none',
            maxHeight: 280,
            overflowY: 'auto',
          }}
        >
          {suggestions.length > 0 ? (
            suggestions.map((item, i) => (
              <li
                id={`${listboxId}-opt-${i}`}
                key={item.comune}
                role="option"
                aria-selected={i === activeIdx}
                onMouseDown={() => select(item)}
                onMouseEnter={() => setActiveIdx(i)}
                style={{
                  padding: '10px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: i === activeIdx ? 'var(--bi-primary-050)' : 'transparent',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--bi-ink-900)', fontSize: 14 }}>
                  {item.comune}
                </span>
                <span style={{ color: 'var(--bi-ink-500)', fontSize: 12 }}>
                  {item.distrettoNome}
                </span>
              </li>
            ))
          ) : (
            <li style={{ padding: '10px 14px', color: 'var(--bi-ink-500)', fontSize: 14 }}>
              Nessun comune trovato
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
