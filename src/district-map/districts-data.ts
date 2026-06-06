export interface Distretto {
  id: number
  nome: string
  colore: string
  comuni: string[]
}

export const DISTRETTI: Distretto[] = [
  {
    id: 24,
    nome: 'Distretto 24/73',
    colore: '#d19bca',
    comuni: ['Chiaia', 'Posillipo', 'San Ferdinando', 'Capri', 'Anacapri'],
  },
  {
    id: 25,
    nome: 'Distretto 25',
    colore: '#eedd50',
    comuni: ['Bagnoli', 'Fuorigrotta'],
  },
  {
    id: 26,
    nome: 'Distretto 26',
    colore: '#e7cecc',
    comuni: ['da verificare'],
  },
  {
    id: 27,
    nome: 'Distretto 27',
    colore: '#b2c6dd',
    comuni: ['da verificare'],
  },
  {
    id: 28,
    nome: 'Distretto 28',
    colore: '#6f82a0',
    comuni: ['da verificare'],
  },
  {
    id: 29,
    nome: 'Distretto 29',
    colore: '#34c8b9',
    comuni: ["Stella", "San Carlo all'Arena"],
  },
  {
    id: 30,
    nome: 'Distretto 30',
    colore: '#5f78b8',
    comuni: ['Miano', 'Secondigliano', 'San Pietro a Patierno'],
  },
  {
    id: 31,
    nome: 'Distretto 31',
    colore: '#531e15',
    comuni: ['Avvocata', 'Montecalvario', 'Pendino', 'Mercato', 'San Giuseppe', 'Porto'],
  },
  {
    id: 32,
    nome: 'Distretto 32',
    colore: '#288e83',
    comuni: ['Barra', 'San Giovanni a Teduccio', 'Ponticelli'],
  },
  {
    id: 33,
    nome: 'Distretto 33',
    colore: '#9babd1',
    comuni: ['Vicaria', 'San Lorenzo', 'Poggioreale'],
  },
]

export const DEFAULT_DISTRETTO_ID = 25

export function getDistrettoById(id: number | null | undefined): Distretto | undefined {
  if (id == null) {
    return undefined
  }

  return DISTRETTI.find((d) => d.id === id)
}

export function getComuniPreview(comuni: string[], maxItems = 4): string {
  const shown = comuni.slice(0, maxItems)
  const remaining = comuni.length - shown.length

  return `${shown.join(', ')}${remaining > 0 ? ` +${remaining}` : ''}`
}
