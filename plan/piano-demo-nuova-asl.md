---
goal: Creare una demo per una nuova ASL riusando la repository corrente
version: 1.0
date_created: 2026-06-04
last_updated: 2026-06-04
owner: Team Prodotto Web ASL
status: Planned
tags: [demo, migration, rebranding, asl]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Questo piano descrive come riutilizzare rapidamente il progetto esistente per realizzare una demo di un'altra ASL, mantenendo UI e architettura correnti ma aggiornando brand, contenuti, dati territoriali e riferimenti istituzionali.

## 1. Requirements & Constraints

- REQ-001: Ottenere una demo funzionante della nuova ASL senza modificare l'architettura Vite multi-page esistente.
- REQ-002: Sostituire tutti i riferimenti principali a ASL Napoli 3 Sud (nome, logo, contatti, link istituzionali) nelle pagine principali.
- REQ-003: Aggiornare dati territoriali e strutture (distretti, ospedali, GeoJSON) in base al nuovo territorio.
- REQ-004: Conservare la coerenza visuale del sistema design già presente.
- CON-001: Nessuna integrazione backend/CMS in questa fase demo.
- CON-002: Nessun fetch runtime da fonti esterne per alimentare dati core.
- CON-003: Mantenere i contenuti in italiano.
- GUD-001: Privilegiare sostituzioni mirate rispetto a riscritture ampie.
- GUD-002: Validare sempre con lint e build prima della consegna.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Duplicare il progetto e configurare il nuovo contesto di deploy e branding base.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Creare un nuovo repository/branch di lavoro dedicato alla nuova ASL. |  |  |
| TASK-002 | Aggiornare il base path di deploy in vite.config.js. |  |  |
| TASK-003 | Aggiornare i titoli HTML in index.html, index-print.html, page-servizi.html, page-referti.html, page-come-fare-per.html, page-ospedali.html, page-maresca.html, page-redazione-web.html, page-distretti.html. |  |  |
| TASK-004 | Definire il nuovo set branding (nome ente, palette primaria/secondaria, loghi). |  |  |

### Implementation Phase 2

- GOAL-002: Aggiornare identità visiva e riferimenti istituzionali globali.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Aggiornare palette e token principali in styles.css e src/theme.js. |  |  |
| TASK-006 | Sostituire logo header e alt text in src/component/Header.jsx. |  |  |
| TASK-007 | Sostituire loghi/footer, contatti e PEC in src/component/Footer.jsx. |  |  |
| TASK-008 | Verificare elementi collegati al brand in Header.module.css, Footer.module.css e componenti con variabili brand. |  |  |

### Implementation Phase 3

- GOAL-003: Migrare contenuti territoriali e dataset alla nuova ASL.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Aggiornare dataset ospedali in src/data/ospedaliAslNapoli3Sud.js (o rinominarlo in seconda fase). |  |  |
| TASK-010 | Aggiornare dataset distretti in src/district-map/districts-data.ts. |  |  |
| TASK-011 | Sostituire mappa distretti SVG se necessario in src/district-map/mappa-distretti.svg. |  |  |
| TASK-012 | Sostituire confini territoriali in public/data/asl-napoli-3-sud.geojson e public/data/campania.geojson quando richiesto dal nuovo territorio. |  |  |
| TASK-013 | Verificare comportamento layer mappa in src/component/BoundaryLayer.jsx e legenda in src/component/MapView.jsx. |  |  |

### Implementation Phase 4

- GOAL-004: Allineare contenuti utente e canali di servizio.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-014 | Aggiornare testi e nodi chatbot (contatti, canali CUP/FSE, elenco presidi) in src/component/Chatbot.jsx. |  |  |
| TASK-015 | Aggiornare copy istituzionale nelle pagine principali: src/page/Servizi.jsx, src/page/Referti.jsx, src/page/Ospedali.jsx, src/page/Distretti.jsx, src/page/RedazioneWeb.jsx, src/page/ComeFarePer.jsx, src/page/Maresca.jsx. |  |  |
| TASK-016 | Verificare che i link esterni siano coerenti con il nuovo ente o lasciare placeholder dove non ancora disponibili. |  |  |

### Implementation Phase 5

- GOAL-005: Validare e preparare la demo alla presentazione.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-017 | Eseguire npm install (se necessario) e npm run check. |  |  |
| TASK-018 | Eseguire npm run build e npm run preview. |  |  |
| TASK-019 | Eseguire smoke test pagine principali e navigazione cross-page. |  |  |
| TASK-020 | Compilare lista gap noti (link mancanti, contenuti placeholder) per stakeholder. |  |  |

## 3. Deliverables

- DEL-001: Demo multi-pagina funzionante con brand e contenuti della nuova ASL.
- DEL-002: Set dati aggiornato per ospedali, distretti e confini mappa.
- DEL-003: Checklist QA compilata con esito test e gap residui.

## 4. Dependencies

- DEP-001: Materiali ufficiali della nuova ASL (logo, palette, contatti, PEC, centralino).
- DEP-002: Fonti ufficiali per presidi e distretti (sito istituzionale o documentazione interna validata).
- DEP-003: Asset territoriali (GeoJSON e/o SVG distretti).

## 5. Testing

- TEST-001: npm run check senza errori.
- TEST-002: npm run build completata con successo.
- TEST-003: Verifica manuale di tutte le entry page da vite.config.js.
- TEST-004: Verifica ricerca/filtri su pagina ospedali e distretti.
- TEST-005: Verifica chatbot su nodi principali e link critici.

## 6. Risks & Mitigations

- RISK-001: Dati territoriali incompleti o non uniformi.
  - MIT-001: Introdurre versione minima validata per demo e backlog di completamento.
- RISK-002: Hardcode residui con riferimenti Napoli 3 Sud.
  - MIT-002: Fare pass di ricerca testuale globale prima del freeze demo.
- RISK-003: Incoerenza tra palette CSS e override locali.
  - MIT-003: Allineare token in un unico pass prima del QA finale.

## 7. Exit Criteria

- EXIT-001: Nessuna occorrenza critica di ASL Napoli 3 Sud nelle superfici utente della demo.
- EXIT-002: Tutte le pagine principali accessibili e consistenti nel nuovo branding.
- EXIT-003: Build pronta per presentazione stakeholder.
