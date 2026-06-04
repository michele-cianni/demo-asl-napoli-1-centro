export interface Distretto {
  id: number
  nome: string
  colore: string
  comuni: string[]
}

export const DISTRETTI: Distretto[] = [
  { id: 34, nome: 'Distretto 34', colore: '#d19bca', comuni: ['Portici'] },
  {
    id: 48,
    nome: 'Distretto 48',
    colore: '#eedd50',
    comuni: ['Marigliano', 'Mariglianella', 'San Vitaliano', 'Castello di Cisterna', 'Somma Vesuviana', 'Brusciano'],
  },
  {
    id: 49,
    nome: 'Distretto 49',
    colore: '#e7cecc',
    comuni: [
      'Nola',
      'Carbonara di Nola',
      'Casamarciano',
      'Liveri',
      'S.P. Belsito',
      'Scisciano',
      'Saviano',
      'Camposano',
      'Cicciano',
      'Cimitile',
      'Comiziano',
      'Roccarainola',
      'Tufino',
      'Visciano',
    ],
  },
  {
    id: 50,
    nome: 'Distretto 50',
    colore: '#b2c6dd',
    comuni: ['Volla', 'Cercola', 'Pollena Trocchia', 'Massa di Somma'],
  },
  {
    id: 51,
    nome: 'Distretto 51',
    colore: '#6f82a0',
    comuni: ["Pomigliano d'Arco", "Sant'Anastasia"],
  },
  {
    id: 52,
    nome: 'Distretto 52',
    colore: '#34c8b9',
    comuni: ['Palma Campania', 'Ottaviano', 'S.Giuseppe Vesuviano', 'San Gennaro Vesuviano', 'Poggiomarino', 'Striano', 'Terzigno'],
  },
  {
    id: 53,
    nome: 'Distretto 53',
    colore: '#5f78b8',
    comuni: ['Castellammare di Stabia'],
  },
  {
    id: 54,
    nome: 'Distretto 54',
    colore: '#531e15',
    comuni: ['San Giorgio a Cremano', 'San Sebastiano al Vesuvio'],
  },
  { id: 55, nome: 'Distretto 55', colore: '#75466e', comuni: ['Ercolano'] },
  {
    id: 56,
    nome: 'Distretto 56',
    colore: '#288e83',
    comuni: ['Torre Annunziata', 'Boscoreale', 'Boscotrecase', 'Trecase'],
  },
  {
    id: 57,
    nome: 'Distretto 57',
    colore: '#c9bdc7',
    comuni: ['Torre del Greco'],
  },
  {
    id: 58,
    nome: 'Distretto 58',
    colore: '#9babd1',
    comuni: ['Agerola', 'Casola', 'Gragnano', 'Lettere', 'Pimonte', 'Pompei', 'Santa Maria la Carità', "Sant'Antonio Abate"],
  },
  {
    id: 59,
    nome: 'Distretto 59',
    colore: '#e38357',
    comuni: ['Sorrento', 'Massa Lubrense', 'Vico Equense', 'Meta', "Sant'Agnello", 'Piano di Sorrento'],
  },
]

export const DEFAULT_DISTRETTO_ID = 49

export function getDistrettoById(id: number | null | undefined): Distretto | undefined {
  if (id == null) {
    return undefined
  }

  return DISTRETTI.find((distretto) => distretto.id === id)
}

export function getComuniPreview(comuni: string[], maxItems = 4): string {
  const shown = comuni.slice(0, maxItems)
  const remaining = comuni.length - shown.length

  return `${shown.join(', ')}${remaining > 0 ? ` +${remaining}` : ''}`
}
