# Design Spec: Confini geografici sulla mappa interattiva Leaflet

**Data:** 2026-05-13
**Stato:** Approvato

## Contesto

La mappa interattiva degli ospedali ASL Napoli 3 Sud (`page-ospedali.html`) mostra i marker dei presidi ospedalieri ma manca di un riferimento geografico visivo. L'obiettivo è aggiungere due layer GeoJSON per delimitare il confine della Regione Campania (contesto neutro) e il territorio dell'ASL Napoli 3 Sud (evidenziato con il colore brand).

## Architettura

### Nuovo componente

**`src/component/BoundaryLayer.jsx`** — componente React standalone che:
- Carica in parallelo due file GeoJSON da `/public/data/`
- Renderizza due layer `<GeoJSON>` tramite react-leaflet
- Gestisce gli errori silenziosamente (file mancante = layer omesso, mappa funzionante)

### Modifica esistente

**`src/component/MapView.jsx`** — aggiunta di `<BoundaryLayer />` come primo figlio di `<MapContainer>`, in modo che i poligoni vengano renderizzati sotto i marker degli ospedali.

### File dati

| File | Posizione | Contenuto |
|---|---|---|
| `campania.geojson` | `public/data/` | Confine regionale Campania |
| `asl-napoli-3-sud.geojson` | `public/data/` | Territorio ASL Napoli 3 Sud (58 comuni dissolti) |

#### Fonti GeoJSON

- **Campania:** openpolis/geojson-italy (GitHub) oppure ISTAT Confini Amministrativi (shapefile → GeoJSON via mapshaper.org)
- **ASL Napoli 3 Sud:** ISTAT shapefile comuni → filtrare i 58 comuni dell'ASL → dissolvere → esportare GeoJSON

## Implementazione del componente

```jsx
import { useEffect, useState } from 'react'
import { GeoJSON } from 'react-leaflet'

const BASE = import.meta.env.BASE_URL

const campaniaStyle = {
  color: '#6b7280',
  weight: 1.5,
  dashArray: '4 4',
  fillColor: '#6b7280',
  fillOpacity: 0.05,
}

const aslStyle = {
  color: '#00798C',
  weight: 2,
  fillColor: '#00798C',
  fillOpacity: 0.10,
}

export default function BoundaryLayer() {
  const [campania, setCampania] = useState(null)
  const [asl, setAsl] = useState(null)

  useEffect(() => {
    const load = url => fetch(url).then(r => r.ok ? r.json() : null).catch(() => null)
    Promise.all([
      load(`${BASE}data/campania.geojson`),
      load(`${BASE}data/asl-napoli-3-sud.geojson`),
    ]).then(([c, a]) => {
      if (c) setCampania(c)
      if (a) setAsl(a)
    })
  }, [])

  return <>
    {campania ? <GeoJSON key="campania" data={campania} style={campaniaStyle} /> : null}
    {asl ? <GeoJSON key="asl" data={asl} style={aslStyle} /> : null}
  </>
}
```

## Stile dei layer

| Layer | Colore bordo | Tratto | Fill | Note |
|---|---|---|---|---|
| Campania | `#6b7280` grigio, 1.5px | tratteggiato `4 4` | grigio 5% opacità | Contesto neutro |
| ASL Napoli 3 Sud | `#00798C` teal, 2px | continuo | teal 10% opacità | Colore brand del sito |

I colori sono leggibili sia in light mode che in dark mode senza varianti aggiuntive.

## Gestione errori

- Fetch fallita o file 404: il layer viene omesso silenziosamente
- La mappa rimane pienamente funzionale anche se uno o entrambi i file GeoJSON mancano
- Nessun messaggio di errore visibile all'utente

## Verifica

1. Aggiungere i file `.geojson` in `public/data/`
2. `npm run dev` → aprire `http://localhost:5173/demo-asl-napoli-3-sud/page-ospedali.html`
3. Verificare che entrambi i confini appaiano con lo stile corretto
4. Verificare che i marker degli ospedali siano cliccabili sopra i poligoni
5. Verificare funzionamento in dark mode
6. `npm run build` → verificare che `dist/data/*.geojson` esistano
