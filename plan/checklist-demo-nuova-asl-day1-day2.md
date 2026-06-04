---
goal: Checklist esecutiva Day 1 / Day 2 per demo nuova ASL
version: 1.0
date_created: 2026-06-04
last_updated: 2026-06-04
owner: Team Prodotto Web ASL
status: Ready
tags: [checklist, demo, execution, asl]
source_plan: plan/piano-demo-nuova-asl.md
---

# Checklist Esecutiva

Questa checklist traduce il piano demo in attività sequenziali pronte da assegnare.

## Convenzioni

- Priorità: P0 bloccante demo, P1 importante, P2 migliorativa.
- Stima: effort netto per task (senza attese esterne).
- Done: criterio minimo per chiudere il task.

## Day 1 - Go live tecnico e branding base

Obiettivo giornata: ottenere una demo navigabile con nuovo ente, branding primario aggiornato e contenuti istituzionali globali coerenti.

| ID | Priorità | Task | File principali | Stima | Dipende da | Done |
|---|---|---|---|---|---|---|
| D1-01 | P0 | Creare branch/repo della nuova ASL | n/a | 0.5h | nessuna | Workspace pronto e separato |
| D1-02 | P0 | Aggiornare base deploy Vite | vite.config.js | 0.25h | D1-01 | base path corretto per hosting target |
| D1-03 | P0 | Aggiornare titoli HTML tutte le entry | index.html; index-print.html; page-servizi.html; page-referti.html; page-come-fare-per.html; page-ospedali.html; page-maresca.html; page-redazione-web.html; page-distretti.html | 0.75h | D1-01 | Nessun title con vecchio nome ASL |
| D1-04 | P0 | Applicare palette brand primaria/secondaria | styles.css; src/theme.js | 1h | D1-01 | Colori base allineati al nuovo brand |
| D1-05 | P0 | Aggiornare logo e testo brand in header | src/component/Header.jsx | 1h | D1-01 | Header mostra logo e alt corretti |
| D1-06 | P0 | Aggiornare footer (loghi, contatti, PEC, centralino) | src/component/Footer.jsx | 1h | D1-01 | Footer con contatti ente corretti |
| D1-07 | P1 | Verificare coerenza CSS moduli header/footer | src/component/Header.module.css; src/component/Footer.module.css | 0.5h | D1-05, D1-06 | Nessuna anomalia visuale evidente |
| D1-08 | P0 | Smoke test pagine principali e menu | tutte le entry page | 0.75h | D1-02..D1-07 | Navigazione e rendering ok |
| D1-09 | P0 | Eseguire check e build | package.json scripts | 0.5h | D1-08 | npm run check e npm run build verdi |

### Uscita Day 1

- Demo apribile con nuovo nome ente, logo, colori e footer coerenti.
- Nessun blocco tecnico su build.

## Day 2 - Dati territoriali, chatbot e rifinitura contenuti

Obiettivo giornata: sostituire i contenuti ASL-specific (ospedali, distretti, mappe, testi servizio) e chiudere il pacchetto demo per stakeholder.

| ID | Priorità | Task | File principali | Stima | Dipende da | Done |
|---|---|---|---|---|---|---|
| D2-01 | P0 | Aggiornare dataset ospedali | src/data/ospedaliAslNapoli3Sud.js | 1.5h | Day 1 completo | Strutture ospedaliere coerenti col nuovo ente |
| D2-02 | P0 | Aggiornare pagina ospedali (copy e conteggi) | src/page/Ospedali.jsx | 1h | D2-01 | Nessun riferimento territoriale obsoleto |
| D2-03 | P0 | Aggiornare dataset distretti | src/district-map/districts-data.ts | 1.5h | Day 1 completo | Elenco distretti/comuni aggiornato |
| D2-04 | P0 | Aggiornare shape mappa distretti se necessario | src/district-map/mappa-distretti.svg | 1h | D2-03 | Mappa coerente coi nuovi distretti |
| D2-05 | P0 | Aggiornare GeoJSON confini e layer | public/data/asl-napoli-3-sud.geojson; public/data/campania.geojson; src/component/BoundaryLayer.jsx | 1.5h | D2-03 | Layer confini corretti e caricati |
| D2-06 | P0 | Aggiornare chatbot (contatti, nodi, canali) | src/component/Chatbot.jsx | 1.25h | D2-01, D2-03 | Chatbot coerente con il nuovo ente |
| D2-07 | P1 | Pass contenuti pagine informative | src/page/Servizi.jsx; src/page/Referti.jsx; src/page/ComeFarePer.jsx; src/page/Distretti.jsx; src/page/RedazioneWeb.jsx; src/page/Maresca.jsx | 2h | D2-01..D2-06 | Testi principali allineati al nuovo ente |
| D2-08 | P1 | Ricerca globale hardcode residui | src/**; *.html | 0.75h | D2-07 | Nessun riferimento critico al vecchio ente |
| D2-09 | P0 | QA finale + check/build/preview | tutte le entry page | 1h | D2-08 | Demo pronta a presentazione |

### Uscita Day 2

- Demo completa con dati territoriali e copy principali del nuovo ente.
- Lista gap residui condivisibile con stakeholder.

## Sequenza consigliata di esecuzione

1. Completare Day 1 integralmente prima di toccare i dataset.
2. Nel Day 2 partire da dati (ospedali/distretti) e solo dopo passare ai testi.
3. Eseguire una validazione tecnica dopo ogni blocco P0.

## Piano assegnazioni (suggerito)

- Frontend A: branding + header/footer + html metadata.
- Frontend B: dataset ospedali + pagina ospedali + chatbot.
- Frontend C: distretti + mappe SVG/GeoJSON.
- QA/PM: smoke test, verifica copy, lista gap finale.

## Checklist rapida di chiusura

- [ ] Tutte le entry page si aprono e navigano.
- [ ] Nessun errore in npm run check.
- [ ] Build produzione completata.
- [ ] Contatti istituzionali validati.
- [ ] Ospedali, distretti, mappe aggiornati.
- [ ] Chatbot coerente con il nuovo ente.
- [ ] Gap residui documentati per prossima iterazione.
