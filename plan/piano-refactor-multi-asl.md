---
goal: Rifattorizzare la codebase in template riusabile per più ASL
version: 1.0
date_created: 2026-06-04
last_updated: 2026-06-04
owner: Team Frontend Platform
status: Planned
tags: [refactor, architecture, multi-tenant, asl]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Questo piano definisce il refactor minimo ma strutturale per trasformare il progetto in una base multi-ASL, dove l'interfaccia rimane condivisa e variabili brand/contenuti sono configurabili per tenant.

## 1. Objectives

- OBJ-001: Separare layout/componenti condivisi dai dati e contenuti specifici della singola ASL.
- OBJ-002: Ridurre drasticamente hardcode testuali e link istituzionali nei componenti runtime.
- OBJ-003: Consentire onboarding rapido di una nuova ASL tramite configurazione e dataset, senza interventi diffusi nel codice UI.
- OBJ-004: Mantenere compatibilità con architettura Vite multi-page esistente.

## 2. Target Architecture

- Architettura a tre livelli:
  - shared-ui: componenti visuali riutilizzabili.
  - tenant-config: identità, canali, link, contatti, branding.
  - tenant-content: dataset ospedali, distretti, mappe, copy specifiche.
- Selezione tenant tramite unica sorgente centrale caricata all'avvio.
- Nessun fetch runtime obbligatorio: configurazione locale versionata in repository.

## 3. Requirements & Constraints

- REQ-001: Introdurre modulo configurazione centralizzato in src/config/tenant.
- REQ-002: Tutti i componenti globali (Header, Footer, Chatbot, map legend) devono leggere da configurazione.
- REQ-003: Dataset territoriali devono essere separati per tenant e importati tramite adapter.
- REQ-004: Mantenere esperienza utente e stile visivo attuali come baseline.
- CON-001: Evitare breaking change sulle entry page e su vite.config.js oltre il necessario.
- CON-002: Mantenere fallback sensati per campi config mancanti.
- CON-003: Non introdurre dipendenze esterne non necessarie.

## 4. Implementation Phases

### Refactor Phase 1

- GOAL-001: Introdurre configurazione centralizzata tenant.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Creare src/config/tenant/types.ts (shape tipizzata config). |  |  |
| TASK-002 | Creare src/config/tenant/defaultTenant.ts con valori correnti Napoli 3 Sud. |  |  |
| TASK-003 | Creare src/config/tenant/index.ts con getter unico della config attiva. |  |  |
| TASK-004 | Spostare variabili brand testuali e contatti dentro config (nome ente, PEC, centralino, social, URL esterni, labels topbar). |  |  |

### Refactor Phase 2

- GOAL-002: Collegare componenti globali alla nuova config.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Refactor src/component/Header.jsx per usare brand e link da config. |  |  |
| TASK-006 | Refactor src/component/Footer.jsx per loghi, contatti e link da config. |  |  |
| TASK-007 | Refactor src/component/Chatbot.jsx per messaggi e canali da config/content pack. |  |  |
| TASK-008 | Refactor src/component/MapView.jsx e src/component/BoundaryLayer.jsx per label/asset path configurabili. |  |  |

### Refactor Phase 3

- GOAL-003: Isolare contenuti e dataset per tenant.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Creare cartella src/tenants/napoli3sud con ospedali, distretti, copy e riferimenti territoriali. |  |  |
| TASK-010 | Creare contract comune (ad esempio tenantData.ts) per dataset richiesti dalle pagine. |  |  |
| TASK-011 | Aggiornare pagine src/page/Ospedali.jsx e src/page/Distretti.jsx per leggere dai dataset tenantizzati. |  |  |
| TASK-012 | Separare testi page-specific ad alta variabilità (Servizi, Referti, ComeFarePer, RedazioneWeb) in moduli content. |  |  |

### Refactor Phase 4

- GOAL-004: Rendere il tenant switch esplicito e sicuro.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-013 | Introdurre variabile ambiente (es. VITE_TENANT_ID) con fallback al tenant default. |  |  |
| TASK-014 | Validare tenant id all'avvio e mostrare errore descrittivo in caso di tenant sconosciuto. |  |  |
| TASK-015 | Documentare procedura onboarding nuovo tenant in docs/. |  |  |

### Refactor Phase 5

- GOAL-005: Hardening, test e rollout.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-016 | Aggiungere test unitari su resolver config e fallback. |  |  |
| TASK-017 | Aggiungere test su district-map e componenti che dipendono da tenant data. |  |  |
| TASK-018 | Eseguire smoke test completo su tenant default post-refactor. |  |  |
| TASK-019 | Eseguire npm run check e npm run build in CI locale. |  |  |
| TASK-020 | Preparare migration note per team contenuti/design. |  |  |

## 5. Suggested Folder Layout

- src/config/tenant/
- src/tenants/
- src/tenants/napoli3sud/
- src/tenants/common/
- docs/tenant-onboarding.md

## 6. Migration Strategy

- STEP-001: Strangler pattern.
- STEP-002: Primo pass su Header/Footer/Chatbot (massimo impatto, basso rischio).
- STEP-003: Secondo pass su pagine dati (Ospedali/Distretti).
- STEP-004: Terzo pass su copy restante.
- STEP-005: Pulizia hardcode e deprecazione costanti obsolete.

## 7. Testing Strategy

- TEST-001: Snapshot/visual smoke su homepage e pagine strutture.
- TEST-002: Test funzionali su filtri ospedali, ricerca comuni e mappa distretti.
- TEST-003: Test di regressione su navigazione multi-page.
- TEST-004: Test fallback configurazione incompleta.
- TEST-005: Build test con tenant default e con tenant alternativo di prova.

## 8. Risks & Mitigations

- RISK-001: Refactor troppo ampio in un solo rilascio.
  - MIT-001: Rilasciare per fasi con feature flag tenant.
- RISK-002: Incoerenza tra config e contenuti tenant.
  - MIT-002: Definire schema esplicito e validazione runtime.
- RISK-003: Regressioni su copy critico/contatti.
  - MIT-003: Checklist QA orientata a contenuti istituzionali.

## 9. Exit Criteria

- EXIT-001: Esiste una singola sorgente di verità per branding e contatti tenant.
- EXIT-002: Creazione nuovo tenant possibile senza modificare componenti shared-ui.
- EXIT-003: Hardcode critici ASL-specific ridotti ai soli file tenant.
- EXIT-004: Documentazione onboarding disponibile e verificata.

## 10. Next Increment (Post-Refactor)

- NEXT-001: Generatore automatico scaffold tenant.
- NEXT-002: Catalogo contenuti validati per sezione.
- NEXT-003: Storybook/preview per confronto tenant side-by-side.
