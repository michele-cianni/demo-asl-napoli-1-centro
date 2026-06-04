---
goal: Allineare la pagina Ospedali alla lista reale dei presidi ASL Napoli 3 Sud
version: 1.0
date_created: 2026-05-14
last_updated: 2026-05-14
owner: CID Software / Michele Cianni
status: Planned
tags: [feature, data, hospitals, asl-napoli-3-sud]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Questo piano implementa il task Notion `Raccogliere lista ospedali reali dell'ASL Napoli 3 Sud` (`3605d012-9f0e-81b5-aea1-d686a09261ed`) trasformando i dati ospedalieri correnti del mockup in un dataset canonico, verificato su fonti ufficiali ASL, e propagandolo a tutte le superfici applicative che mostrano nomi, contatti o riferimenti ai presidi.

## 1. Requirements & Constraints

- **REQ-001**: Selezionare come input di lavoro il task Notion `Raccogliere lista ospedali reali dell'ASL Napoli 3 Sud` dalla To-Do list del workspace e usare esclusivamente quel task come ambito del piano.
- **REQ-002**: Sostituire i dati inline dell'array `OSPEDALI` definito in `src/page/Ospedali.jsx` con un dataset canonico riutilizzabile da più componenti.
- **REQ-003**: Ogni presidio nel dataset finale deve includere almeno i campi `id`, `slug`, `nome`, `comune`, `indirizzo`, `telefono`, `telefonoHref`, `coords`, `ps`, `psCodice`, `badge`, `badgeTone`, `specialita`, `href`, `fonteUrl`.
- **REQ-004**: La lista finale dei presidi deve essere costruita solo da fonti ufficiali `aslnapoli3sud.it`; non usare directory di terze parti, Google Maps, Wikipedia o siti aggregatori come fonte primaria.
- **REQ-005**: Se piu fonti ufficiali ASL sono in conflitto, applicare questa precedenza deterministica: `pagina struttura/servizio ufficiale` > `pagina informativa istituzionale` > `news ufficiale piu recente`; registrare la fonte scelta in `fonteUrl`.
- **REQ-006**: La pagina `PageOspedali` deve continuare a supportare ricerca, filtri, vista lista e vista mappa senza regressioni funzionali.
- **REQ-007**: Tutti i riferimenti testuali ai presidi presenti nel mockup devono usare la stessa nomenclatura del dataset canonico.
- **SEC-001**: Non introdurre fetch runtime verso il sito ASL o sorgenti esterne; il mockup deve restare statico e buildabile offline con Vite.
- **SEC-002**: Non introdurre dati sanitari personali o informazioni non pubbliche; usare solo contenuti pubblicati dalla ASL.
- **CON-001**: Rispettare l'architettura Vite/React esistente con entrypoint `src/main-*.jsx` e componenti in `src/page/` e `src/component/`.
- **CON-002**: Mantenere testi in italiano, styling coerente con i pattern gia presenti e link placeholder `href="#"` solo dove non esiste una destinazione ufficiale o una pagina locale.
- **CON-003**: Non ampliare lo scope a nuovi flussi backend, CMS o integrazioni live; il task riguarda dati contenutistici e wiring UI del mockup.
- **GUD-001**: Riutilizzare una singola sorgente dati condivisa invece di duplicare array o costanti ospedaliere in piu file.
- **GUD-002**: Eseguire `npm run check` e `npm run build` come validazione finale del piano implementato.
- **PAT-001**: Derivare valori UI aggregati (`ALL_COMUNI`, `ALL_SPECIALITA`, eventuali copy dinamici sul conteggio) dal dataset canonico invece di mantenerli hard-coded.
- **PAT-002**: Conservare la pagina foglia `page-maresca.html` come unico dettaglio locale esistente, salvo richiesta esplicita di estendere il numero di pagine dettaglio.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Definire un dataset ospedaliero canonico, verificato su fonti ufficiali ASL Napoli 3 Sud, che sostituisca l'array inline corrente.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Creare `src/data/ospedaliAslNapoli3Sud.js` ed esportare `OSPEDALI_ASL_NAPOLI_3_SUD` come array di oggetti. Ogni oggetto deve usare esattamente i campi `id`, `slug`, `nome`, `comune`, `indirizzo`, `telefono`, `telefonoHref`, `coords`, `ps`, `psCodice`, `badge`, `badgeTone`, `specialita`, `href`, `fonteUrl`. |  |  |
| TASK-002 | Raccogliere la lista reale dei presidi esclusivamente da pagine ufficiali `aslnapoli3sud.it` e compilare per ogni record il campo `fonteUrl`. Se un presidio presente in `src/page/Ospedali.jsx` non e confermato ufficialmente, rimuoverlo dal dataset finale. |  |  |
| TASK-003 | Risolvere in modo deterministico le ambiguita sui nomi correnti del mockup, in particolare i casi `Boscoreale` vs `Boscotrecase` e ogni altra denominazione che non coincida con la fonte ufficiale. Salvare nel dataset il nome ufficiale pubblicato dalla ASL. |  |  |
| TASK-004 | Spostare le costanti derivate dal dataset (`ALL_COMUNI`, `ALL_SPECIALITA`, eventuale sottoinsieme per i filtri clinici) fuori dall'array inline e ricavarle dal modulo condiviso con funzioni pure o esportazioni dedicate. |  |  |

### Implementation Phase 2

- GOAL-002: Collegare il dataset canonico alla pagina Ospedali e alla mappa, preservando il comportamento del mockup.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Aggiornare `src/page/Ospedali.jsx` rimuovendo l'array locale `OSPEDALI` (attualmente definito all'inizio del file) e importando `OSPEDALI_ASL_NAPOLI_3_SUD` dal nuovo modulo dati. |  |  |
| TASK-006 | Lasciare invariata la logica del componente `PageOspedali` per ricerca, filtri e toggle lista/mappa, ma fare in modo che il conteggio mostrato nella hero e i risultati filtrati dipendano esclusivamente dal dataset canonico. |  |  |
| TASK-007 | Aggiornare `OspedaleCard` in `src/page/Ospedali.jsx` per usare i nuovi campi `telefonoHref`, `href` e `nome` ufficiale; se `href` punta a una pagina locale inesistente, sostituirlo con `fonteUrl` ufficiale oppure con `#` secondo la regola: pagina locale esistente > URL ufficiale > placeholder. |  |  |
| TASK-008 | Aggiornare `src/component/MapView.jsx` in modo che popup e sidebar leggano gli stessi campi del dataset canonico, senza assumere nomi o link hard-coded diversi dalla lista principale. |  |  |

### Implementation Phase 3

- GOAL-003: Allineare tutte le superfici applicative che citano i presidi ospedalieri alla stessa sorgente dati e agli stessi nomi ufficiali.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Aggiornare il nodo `presidio` e il nodo `referti_sportello` dell'oggetto `TREE` in `src/component/Chatbot.jsx` per usare la stessa nomenclatura dei presidi confermati dal dataset canonico. |  |  |
| TASK-010 | Verificare `src/page/Maresca.jsx` e correggere nome struttura, indirizzo, recapiti o microcopy solo se divergono dal record canonico del presidio Maresca. Non cambiare slug o file name della pagina in questa iterazione. |  |  |
| TASK-011 | Cercare in `src/` tutte le occorrenze testuali dei nomi dei presidi attuali (`Boscoreale`, `Boscotrecase`, `San Leonardo`, `Sorrento`, `Gragnano`, `Mariano Lauro`, `Maresca`) e aggiornare solo i runtime files che mostrano quei dati all'utente finale. Non modificare `docs/PRD.md` salvo errore bloccante introdotto dal task. |  |  |
| TASK-012 | Eseguire validazione finale con `npm run check` e `npm run build`. Considerare il task completato solo se entrambi i comandi terminano senza errori e la pagina `page-ospedali.html` continua a renderizzare lista, filtri e mappa con il dataset aggiornato. |  |  |

## 3. Alternatives

- **ALT-001**: Mantenere l'array ospedali inline in `src/page/Ospedali.jsx`. Scartato perche obbliga a duplicare i nomi ufficiali in altri file (`MapView`, `Chatbot`, eventuali pagine foglia) e rende probabili future divergenze.
- **ALT-002**: Effettuare fetch runtime verso `aslnapoli3sud.it` per leggere i presidi in tempo reale. Scartato perche introduce dipendenza di rete, possibili problemi CORS, instabilita del mockup e violazione del vincolo di build statica.
- **ALT-003**: Aggiornare solo la UI della lista senza correggere chatbot, popup mappa e pagina Maresca. Scartato perche lascerebbe contenuti incoerenti nello stesso prodotto.

## 4. Dependencies

- **DEP-001**: Task Notion sorgente `3605d012-9f0e-81b5-aea1-d686a09261ed` con descrizione: ricerca web della lista reale dei presidi ospedalieri ASL Napoli 3 Sud e aggiornamento della pagina Ospedali.
- **DEP-002**: Fonti pubbliche ufficiali `https://www.aslnapoli3sud.it` da cui estrarre nomi, contatti e riferimenti dei presidi.
- **DEP-003**: Modulo pagina esistente `src/page/Ospedali.jsx` che attualmente contiene il dataset inline e la logica di rendering di lista e filtri.
- **DEP-004**: Componente mappa `src/component/MapView.jsx` che dipende dalla forma dei record ospedalieri (`coords`, `telefono`, `badge`, `href`).
- **DEP-005**: Componente `src/component/Chatbot.jsx`, che contiene testo statico sui presidi e sui punti di ritiro referti.

## 5. Files

- **FILE-001**: `src/page/Ospedali.jsx` — file principale della lista ospedali; contiene oggi sia il dataset inline sia i componenti `OspedaleCard`, `EmptyState` e `PageOspedali`.
- **FILE-002**: `src/component/MapView.jsx` — legge la collezione `ospedali` per marker, popup e sidebar.
- **FILE-003**: `src/component/Chatbot.jsx` — contiene copy statico da sincronizzare con i nomi ufficiali dei presidi.
- **FILE-004**: `src/page/Maresca.jsx` — unica pagina foglia locale di dettaglio ospedale da riallineare al record canonico.
- **FILE-005**: `src/data/ospedaliAslNapoli3Sud.js` — nuovo modulo da creare come sorgente dati condivisa.
- **FILE-006**: `src/main-ospedali.jsx` — nessuna logica prevista da cambiare, ma da considerare come entrypoint per il controllo finale della pagina.
- **FILE-007**: `page-ospedali.html` — shell HTML della pagina da usare per il controllo finale del rendering dopo la build.

## 6. Testing

- **TEST-001**: Eseguire `npm run check` e confermare assenza di errori di formatting o lint sui file aggiornati.
- **TEST-002**: Eseguire `npm run build` e confermare che la build Vite completi correttamente.
- **TEST-003**: Aprire `page-ospedali.html` in ambiente dev/preview e verificare che il numero di card sia uguale al numero di record del dataset canonico.
- **TEST-004**: Verificare che i filtri `Comune` e `Aree cliniche ad alta specializzazione` continuino a produrre risultati coerenti con il nuovo dataset.
- **TEST-005**: Verificare che la vista mappa mostri un marker per ogni record filtrato e che il popup usi nome, indirizzo, telefono e link coerenti con la card lista corrispondente.
- **TEST-006**: Verificare che il chatbot non mostri nomi di presidi obsoleti o non presenti nel dataset canonico.

## 7. Risks & Assumptions

- **RISK-001**: Il sito ufficiale ASL puo pubblicare i presidi con denominazioni non uniformi tra pagine diverse; senza regola di precedenza la lista rischia inconsistenza.
- **RISK-002**: Solo l'ospedale Maresca dispone oggi di una pagina foglia locale; gli altri presidi potrebbero non avere una destinazione interna cliccabile dopo l'aggiornamento dei dati.
- **RISK-003**: Alcuni recapiti o coordinate presenti nel mockup potrebbero essere placeholder storici; correggerli potrebbe cambiare testi in piu componenti del previsto.
- **ASSUMPTION-001**: L'obiettivo di questa iterazione e aggiornare la lista ospedaliera e i riferimenti correlati, non progettare nuove pagine dettaglio per tutti i presidi.
- **ASSUMPTION-002**: Il mockup deve restare totalmente statico lato frontend, con dati versionati nel repository.
- **ASSUMPTION-003**: Le fonti ufficiali ASL sono sufficienti per confermare almeno nome, comune e contatto principale dei presidi mostrati nella pagina Ospedali.

## 8. Related Specifications / Further Reading

- `docs/PRD.md` — sezione `5.5 Pagina lista — Ospedali` e `5.6 Pagina foglia — Ospedale Maresca`.
- Notion task source: `https://www.notion.so/3605d0129f0e81b5aea1d686a09261ed`
- Portale ufficiale ASL Napoli 3 Sud: `https://www.aslnapoli3sud.it`
