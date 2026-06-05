---
goal: Creare la demo per ASL Napoli 1 Centro riusando la repository (fork di ASL Napoli 3 Sud)
version: 2.0
date_created: 2026-06-04
last_updated: 2026-06-05
owner: Team Prodotto Web ASL
status: Planned
tags: [demo, migration, rebranding, asl, napoli-1-centro]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Questo piano descrive come riutilizzare il progetto esistente (attuale fork della demo **ASL Napoli 3 Sud**) per realizzare una demo di **ASL Napoli 1 Centro** (<https://www.aslnapoli1centro.it/>), mantenendo UI e architettura correnti ma aggiornando brand, contenuti, dati territoriali e riferimenti istituzionali.

> **Nota struttura repo.** Il file `CLAUDE.md` è disallineato dalla struttura reale del codice (descrive `src/header.jsx`, `src/App.jsx`, ecc.). La struttura **reale** verificata coincide con i path citati in questo piano: componenti in `src/component/`, dati in `src/data/`, mappa distretti in `src/district-map/`, GeoJSON in `public/data/`. Usare i path di questo piano, non quelli di `CLAUDE.md`.
>
> **Differenza territoriale chiave.** ASL Napoli 3 Sud copre **58 comuni** dell'area vesuviana/sorrentina. ASL Napoli 1 Centro copre invece la **città di Napoli** (organizzata in quartieri/Municipalità) **più l'isola di Capri**. Il modello dati passa quindi da *comuni* a *quartieri/Municipalità*, e la geometria della mappa cambia completamente.

## 0. Dati di riferimento nuovo ente (ASL Napoli 1 Centro)

Valori concreti per chi esegue le sostituzioni. Fonti: sito istituzionale (`aslnapoli1centro.it`) e portale trasparenza.

| Campo | ASL Napoli 3 Sud (attuale nel repo) | ASL Napoli 1 Centro (target) |
|-------|-------------------------------------|------------------------------|
| Nome ente | ASL Napoli 3 Sud | ASL Napoli 1 Centro |
| Sede legale | Via Marconi 66, 80059 Torre del Greco (NA) | Via Comunale del Principe 13/A, 80145 Napoli (NA) |
| C.F./P.IVA | 06321661211 | 06328131211 |
| PEC | protocollo@pec.aslnapoli3sud.it | aslnapoli1centro@pec.aslna1centro.it |
| Centralino | 081 8722111 / 081 8727111 | 081 2541111 |
| Dominio | aslnapoli3sud.it | aslnapoli1centro.it |
| Territorio | 58 comuni (area vesuviana/sorrentina) | Città di Napoli (quartieri/Municipalità) + isola di Capri |
| N. distretti | 8 (id 34, 48–53…) | **10**: 24/73, 25, 26, 27, 28, 29, 30, 31, 32, 33 |
| Presidio dedicato (pagina) | Ospedale Maresca (Torre del Greco) | Da scegliere — es. Ospedale del Mare o P.O. Pellegrini |

**Ospedali / presidi ASL Napoli 1 Centro** (rimpiazzano gli 8 presidi in `src/data/ospedaliAslNapoli3Sud.js`):

- Ospedale del Mare (Ponticelli)
- P.O. San Giovanni Bosco
- P.O. San Paolo (Fuorigrotta)
- P.O. dei Pellegrini
- P.O. Loreto Mare (S.M. di Loreto)
- S.M. degli Incurabili / Ascalesi
- Capilupi (isola di Capri)
- P.S.I. di Barra

**Distretti → quartieri / Municipalità** (campioni confermati; il resto da verificare sul portale distretti):

- **24/73**: Chiaia, Posillipo, San Ferdinando + isola di Capri
- **25**: Bagnoli, Fuorigrotta (X Municipalità)
- **26**: da verificare
- **27**: da verificare
- **28**: da verificare
- **29**: Stella, San Carlo all'Arena (Corso Amedeo di Savoia)
- **30**: Miano, Secondigliano, San Pietro a Patierno
- **31**: Avvocata, Montecalvario, Pendino, Mercato, San Giuseppe-Porto
- **32**: Barra, San Giovanni a Teduccio, Ponticelli, Insediamento 167
- **33**: Vicaria, San Lorenzo, Poggioreale

**CUP**: distribuito per distretto (es. DS31 081 2543511, DS29 081 2544601, DS33 081 2549108). Nessun numero verde unico riscontrato → nel chatbot usare i CUP per distretto o un placeholder.

## 1. Requirements & Constraints

- REQ-001: Ottenere una demo funzionante della nuova ASL senza modificare l'architettura Vite multi-page esistente.
- REQ-002: Sostituire tutti i riferimenti a ASL Napoli 3 Sud nelle superfici utente, in particolare i token: nome ente, PEC `protocollo@pec.aslnapoli3sud.it`, centralino `081 872xxxx`, C.F./P.IVA `06321661211`, dominio `aslnapoli3sud.it`, e i riferimenti all'Ospedale **Maresca**.
- REQ-003: Aggiornare dati territoriali e strutture (distretti, ospedali, GeoJSON) in base al nuovo territorio.
- REQ-004: Conservare la coerenza visuale del sistema design già presente.
- REQ-005: Gestire il cambio di modello territoriale **comuni → quartieri/Municipalità + Capri** in dataset distretti, mappa SVG e GeoJSON.
- CON-001: Nessuna integrazione backend/CMS in questa fase demo.
- CON-002: Nessun fetch runtime da fonti esterne per alimentare dati core.
- CON-003: Mantenere i contenuti in italiano.
- GUD-001: Privilegiare sostituzioni mirate rispetto a riscritture ampie.
- GUD-002: Validare sempre con lint e build prima della consegna.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Configurare il nuovo contesto di deploy e branding base.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Creare un branch di lavoro dedicato (es. `napoli-1-centro`). | ✅ | 2026-06-05 |
| TASK-002 | Aggiornare il base path in `vite.config.js`: `/demo-asl-napoli-3-sud/` → `/demo-asl-napoli-1-centro/`. | ✅ | 2026-06-05 |
| TASK-003 | Aggiornare i 9 titoli HTML "ASL Napoli 3 Sud" → "ASL Napoli 1 Centro": `index.html`, `index-print.html`, `page-servizi.html`, `page-referti.html`, `page-come-fare-per.html`, `page-ospedali.html`, `page-maresca.html`, `page-redazione-web.html`, `page-distretti.html`. | ✅ | 2026-06-05 |
| TASK-004 | Definire il set branding (nome ente, palette, loghi ufficiali Napoli 1 Centro). **Nome ente definito**: "ASL Napoli 1 Centro". **Palette**: placeholder invariata (`--brand-primary: #50639d`, `--brand-secondary: #52b075`) — da aggiornare con colori ufficiali quando disponibili (DEP-001). **Logo**: DEP-001 non risolto — necessario asset logo ufficiale per TASK-006/007. | ⚠️ parziale | 2026-06-05 |

### Implementation Phase 2

- GOAL-002: Aggiornare identità visiva e riferimenti istituzionali globali.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Verificare/aggiornare palette e token in `styles.css` (`--brand-primary` #50639d, `--brand-secondary` #52b075) e `src/theme.js` se il brand Napoli 1 Centro richiede colori diversi. |  |  |
| TASK-006 | Sostituire logo header e alt text in `src/component/Header.jsx` (L113, L146) e i link TopBar istituzionali. |  |  |
| TASK-007 | Aggiornare `src/component/Footer.jsx`: alt logo (L19, asset `asl-napoli-3-sud-bianco.png`), indirizzo, C.F./P.IVA, PEC, centralino (L84–90) con i valori Napoli 1 Centro. |  |  |
| TASK-008 | Verificare elementi brand in `Header.module.css`, `Footer.module.css` e componenti con variabili brand. |  |  |

### Implementation Phase 3

- GOAL-003: Migrare contenuti territoriali e dataset alla nuova ASL.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Riscrivere (ed eventualmente rinominare) `src/data/ospedaliAslNapoli3Sud.js` con gli 8 presidi Napoli 1 Centro (vedi §0). |  |  |
| TASK-010 | Aggiornare `src/district-map/districts-data.ts`: 10 distretti (24/73, 25–33) con campo `comuni` valorizzato a quartieri/Municipalità (vedi §0). |  |  |
| TASK-011 | Rifare la mappa distretti SVG `src/district-map/mappa-distretti.svg` sulla geometria della città di Napoli. |  |  |
| TASK-012 | Sostituire `public/data/asl-napoli-3-sud.geojson` con il confine **città di Napoli** (+ eventuale partizione Municipalità); `public/data/campania.geojson` resta invariato. |  |  |
| TASK-013 | Verificare comportamento layer mappa in `src/component/BoundaryLayer.jsx` e legenda in `src/component/MapView.jsx` (L184, L251). |  |  |

### Implementation Phase 4

- GOAL-004: Allineare contenuti utente e canali di servizio.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-014 | Aggiornare `src/component/Chatbot.jsx` (L13, 147, 161, 210): saluto, frase "58 Comuni / 8 presidi" → "città di Napoli, 10 distretti, N presidi", contatti URP/centralino/CUP, elenco presidi. |  |  |
| TASK-015 | Aggiornare copy istituzionale nelle pagine: `src/page/Servizi.jsx`, `Referti.jsx`, `Ospedali.jsx`, `Distretti.jsx`, `RedazioneWeb.jsx`, `ComeFarePer.jsx`, `Maresca.jsx`. |  |  |
| TASK-016 | Bonificare le occorrenze residue "Napoli 3"/"Maresca"/"aslnapoli3sud" in: `src/component/News.jsx` (L16), `Tenders.jsx` (L155), `Waiting.jsx` (L57), `Feedback.jsx` (L83), `MapView.jsx`, `BoundaryLayer.jsx`, `src/main-maresca.jsx`, `src/page/Referti.jsx`. |  |  |
| TASK-017 | Decidere la sorte della pagina **Maresca**: ritargetizzare su un presidio Napoli 1 Centro (es. Ospedale del Mare) o rimuoverla. Coinvolge `page-maresca.html`, `src/main-maresca.jsx`, `src/page/Maresca.jsx` (11 occorrenze) e la voce `maresca` in `vite.config.js`. |  |  |
| TASK-018 | Verificare che i link esterni puntino al nuovo ente o lasciare placeholder dove non disponibili. |  |  |

### Implementation Phase 5

- GOAL-005: Validare e preparare la demo alla presentazione.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-019 | Eseguire `npm install` (se necessario) e `npm run check`. |  |  |
| TASK-020 | Eseguire `npm run build` e `npm run preview`. |  |  |
| TASK-021 | Smoke test di tutte le entry page e navigazione cross-page. |  |  |
| TASK-022 | Compilare lista gap noti (link mancanti, contenuti/placeholder, distretti 26/27/28 da verificare) per stakeholder. |  |  |

## 3. Deliverables

- DEL-001: Demo multi-pagina funzionante con brand e contenuti di ASL Napoli 1 Centro.
- DEL-002: Set dati aggiornato per ospedali (8 presidi), distretti (10) e confine mappa (città di Napoli).
- DEL-003: Checklist QA compilata con esito test e gap residui.

## 4. Dependencies

- DEP-001: Materiali ufficiali ASL Napoli 1 Centro (logo, palette, contatti, PEC, centralino, CUP).
- DEP-002: Fonti ufficiali per presidi e distretti (sito istituzionale `aslnapoli1centro.it`, portale trasparenza).
- DEP-003: Asset territoriali — GeoJSON confine città di Napoli (ed eventuale partizione Municipalità) e/o SVG distretti aggiornato.

## 5. Testing

- TEST-001: `npm run check` senza errori.
- TEST-002: `npm run build` completata con successo.
- TEST-003: Verifica manuale di tutte le entry page da `vite.config.js`.
- TEST-004: Verifica ricerca/filtri su pagina ospedali e distretti con i nuovi dati.
- TEST-005: Verifica chatbot su nodi principali e link critici (contatti, CUP, presidi).

## 6. Risks & Mitigations

- RISK-001: Dati territoriali incompleti o non uniformi (distretti 26/27/28 da verificare).
  - MIT-001: Introdurre versione minima validata per demo e backlog di completamento.
- RISK-002: Hardcode residui con riferimenti Napoli 3 Sud / Maresca / aslnapoli3sud.it.
  - MIT-002: Pass di ricerca testuale globale (`grep -ri "napoli 3"`, `"maresca"`, `"aslnapoli3sud"`) prima del freeze demo.
- RISK-003: Mismatch del modello territoriale (geometria comuni vs quartieri/Municipalità) tra GeoJSON, SVG e `districts-data.ts`.
  - MIT-003: Allineare i tre asset in un unico pass coerente prima del QA mappa.
- RISK-004: `CLAUDE.md` stale che indirizza l'esecutore verso path inesistenti.
  - MIT-004: Seguire i path di questo piano; aggiornare `CLAUDE.md` come task separato.

## 7. Exit Criteria

- EXIT-001: Nessuna occorrenza di "ASL Napoli 3 Sud", "Maresca" o "aslnapoli3sud.it" nelle superfici utente della demo (salvo decisione esplicita su pagina Maresca).
- EXIT-002: Tutte le pagine principali accessibili e consistenti nel branding ASL Napoli 1 Centro.
- EXIT-003: Build pronta per presentazione stakeholder.
