---
goal: Migrare il progetto ASL da Vite MPA a Next.js con TypeScript
version: 1.0
date_created: 2026-06-04
last_updated: 2026-06-04
owner: Team Frontend Platform
status: Planned
tags: [migration, nextjs, typescript, multi-asl]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Questo piano definisce la migrazione del progetto attuale verso Next.js con TypeScript, mantenendo inizialmente l'esperienza utente e il design esistenti, e creando una base robusta per il refactor multi-ASL.

## 1. Scope

- Migrazione framework da Vite multi-page a Next.js App Router.
- Migrazione codice JavaScript e JSX a TypeScript e TSX.
- Preservazione funzionale delle pagine esistenti durante la transizione.
- Preparazione della base per tenanting multi-ASL in fase successiva.

Fuori scope in questa iterazione:
- Redesign completo UI.
- Integrazioni backend o CMS.
- Nuove funzionalità prodotto non legate alla migrazione.

## 2. Requirements & Constraints

- REQ-001: Tutte le pagine principali devono essere disponibili su routing Next equivalente.
- REQ-002: Il progetto deve compilare in strict mode TypeScript senza errori bloccanti.
- REQ-003: Le componenti mappa devono funzionare in ambiente client-side senza errori SSR.
- REQ-004: Build production e preview devono completarsi con successo.
- CON-001: Mantenere il più possibile copy e UX correnti per minimizzare regressioni.
- CON-002: Migrazione incrementale, evitando big bang non verificabili.
- CON-003: Asset geografici e media devono restare versionati localmente.

## 3. Deliverables

- DEL-001: Nuovo progetto Next.js con TypeScript funzionante.
- DEL-002: Pagine migrate e raggiungibili tramite App Router.
- DEL-003: Componenti condivise migrate a TSX.
- DEL-004: Checklist regressione e report di validazione tecnica.

## 4. Implementation Plan

### Phase 0 - Discovery e baseline

GOAL: congelare comportamento attuale e definire baseline di confronto.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Inventariare pagine e route correnti dal setup Vite e dagli HTML esistenti. |  |  |
| TASK-002 | Definire mappa di equivalenza route attuali verso route App Router Next. |  |  |
| TASK-003 | Eseguire baseline screenshot e smoke flow delle pagine principali. |  |  |
| TASK-004 | Congelare dipendenze e creare branch dedicato alla migrazione. |  |  |

### Phase 1 - Bootstrap Next.js + TypeScript

GOAL: inizializzare l'infrastruttura target e i guardrail qualità.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Creare nuovo scaffold Next.js con TypeScript e App Router. |  |  |
| TASK-006 | Configurare TypeScript strict, path aliases, ESLint e Prettier. |  |  |
| TASK-007 | Definire struttura cartelle target app, components, lib, data, styles. |  |  |
| TASK-008 | Migrare asset statici in public mantenendo naming stabile. |  |  |
| TASK-009 | Configurare script npm equivalenti per dev, build, lint e type-check. |  |  |

### Phase 2 - Core layout e shared UI

GOAL: migrare shell applicativa comune prima delle pagine verticali.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-010 | Migrare header, footer, feedback e chatbot in componenti TSX. |  |  |
| TASK-011 | Migrare primitive UI condivise e icone a TypeScript con prop typing. |  |  |
| TASK-012 | Portare token stile globali nel sistema Next mantenendo identità visiva. |  |  |
| TASK-013 | Creare layout principale App Router con metadati base SEO. |  |  |

### Phase 3 - Migrazione pagine e routing

GOAL: rendere disponibili tutte le superfici principali nel nuovo routing.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-014 | Migrare homepage e sezioni aggregate alla route principale. |  |  |
| TASK-015 | Migrare pagina servizi e blocchi correlati. |  |  |
| TASK-016 | Migrare pagina referti con contenuti e CTA esistenti. |  |  |
| TASK-017 | Migrare pagina come fare per mantenendo struttura informativa. |  |  |
| TASK-018 | Migrare pagina ospedali e integrazione dataset locale. |  |  |
| TASK-019 | Migrare pagina distretti con ricerca comune e selezione distretto. |  |  |
| TASK-020 | Migrare pagina redazione web e pagina dettaglio ospedale esistente. |  |  |
| TASK-021 | Definire redirect o mapping compatibilità da vecchi URL HTML. |  |  |

### Phase 4 - Mappe e compatibilità client-only

GOAL: rendere stabile la parte geografica in ambiente Next SSR/CSR.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-022 | Migrare componenti mappa Leaflet con dynamic import lato client. |  |  |
| TASK-023 | Isolare moduli mappa in componenti client e gestire fallback loading. |  |  |
| TASK-024 | Validare caricamento GeoJSON e rendering marker/layer. |  |  |
| TASK-025 | Verificare assenza errori hydration o window undefined. |  |  |

### Phase 5 - Data typing e hardening TypeScript

GOAL: completare la migrazione tipologica e ridurre rischio runtime.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-026 | Definire tipi condivisi per ospedali, distretti, chatbot e config. |  |  |
| TASK-027 | Tipizzare dataset e funzioni helper con controlli null-safe. |  |  |
| TASK-028 | Eliminare any non necessari e warning TypeScript ad alta severità. |  |  |
| TASK-029 | Introdurre validazione schema per config con zod o equivalente. |  |  |

### Phase 6 - QA, performance e go-live

GOAL: verificare qualità finale e preparare rilascio.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-030 | Eseguire smoke test completo su tutte le route migrate. |  |  |
| TASK-031 | Eseguire lint, type-check e build production senza errori bloccanti. |  |  |
| TASK-032 | Misurare performance base e correggere regressioni critiche. |  |  |
| TASK-033 | Verificare accessibilità base keyboard e focus states. |  |  |
| TASK-034 | Preparare runbook di deploy e rollback. |  |  |
| TASK-035 | Congelare release candidate e approvazione stakeholder. |  |  |

## 5. Suggested File Mapping

- Attuale shell pagine HTML: index.html e page-*.html
  - Target: app e route folder in App Router.
- Attuali entrypoint src/main-*.jsx
  - Target: page.tsx per route corrispondenti.
- Componenti condivise in src/component
  - Target: components con file TSX tipizzati.
- Dataset in src/data e src/district-map
  - Target: data tipizzato con contratti TypeScript.

## 6. Timeline indicativa

- Fase 0: 0.5 - 1 giorno
- Fase 1: 1 - 2 giorni
- Fase 2: 2 - 3 giorni
- Fase 3: 3 - 5 giorni
- Fase 4: 1 - 2 giorni
- Fase 5: 1 - 2 giorni
- Fase 6: 1 - 2 giorni

Totale stimato: 9.5 - 17 giorni lavorativi, in base al parallelismo del team.

## 7. Risks & Mitigations

- RISK-001: Regressioni su routing e deep link.
  - MIT-001: mapping route esplicito e redirect testati.
- RISK-002: Problemi SSR con Leaflet.
  - MIT-002: componenti mappe client-only con import dinamico.
- RISK-003: Debito tipi durante migrazione JS to TS.
  - MIT-003: policy progressiva con soglie lint e rimozione any a blocchi.
- RISK-004: Scope creep funzionale durante porting.
  - MIT-004: freeze funzionale fino a completamento parità.

## 8. Exit Criteria

- EXIT-001: Tutte le pagine chiave sono disponibili in Next e navigabili.
- EXIT-002: lint, type-check e build production verdi.
- EXIT-003: funzionalità mappa, chatbot e filtri principali operative.
- EXIT-004: parità UX accettata dagli stakeholder per la prima release Next.

## 9. Next Step dopo migrazione

- Avviare il piano multi-ASL su base Next/TS.
- Spostare branding e contenuti in tenant config centralizzata.
- Introdurre onboarding guidato per nuovi tenant ASL.
