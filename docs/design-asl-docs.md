

{0}------------------------------------------------

# --- **Design dei siti web delle ASL**

***Release versione-corrente***

**italia**

**20 gen 2025**

{1}------------------------------------------------



{2}------------------------------------------------

# --- Indice dei contenuti ---

|                                    |                                                                                    |           |
|------------------------------------|------------------------------------------------------------------------------------|-----------|
| <b><a href="#block-6-0">1</a></b>  | <b>Introduzione al modello ASL</b>                                                 | <b>3</b>  |
| <a href="#block-6-1">1.1</a>       | I principi di progettazione . . . . .                                              | 3         |
| <b>2</b>                           | <b>Architettura dell'informazione</b>                                              | <b>5</b>  |
| <a href="#block-8-2">2.1</a>       | Struttura del sito . . . . .                                                       | 5         |
| <a href="#block-9-4">2.2</a>       | Sistemi di navigazione . . . . .                                                   | 6         |
| <a href="#block-10-3">2.3</a>      | Homepage . . . . .                                                                 | 7         |
| <a href="#block-11-2">2.4</a>      | Sezione Servizi e prestazioni . . . . .                                            | 8         |
| <a href="#block-11-5">2.4.1</a>    | Pagina lista di primo livello Servizi e prestazioni . . . . .                      | 8         |
| <a href="#block-12-2">2.4.2</a>    | Pagina lista categoria di servizio . . . . .                                       | 9         |
| 2.4.3                              | Tipologia "Servizio" . . . . .                                                     | 9         |
| <a href="#block-13-3">2.5</a>      | Sezione Come fare per . . . . .                                                    | 10        |
| <a href="#block-13-5">2.5.1</a>    | Pagina lista di primo livello Come fare per . . . . .                              | 10        |
| <a href="#block-14-1">2.5.2</a>    | Tipologia Come fare per . . . . .                                                  | 11        |
| <a href="#block-14-4">2.6</a>      | Sezione Strutture . . . . .                                                        | 11        |
| <a href="#block-15-1">2.6.1</a>    | Pagina lista di primo livello Strutture . . . . .                                  | 12        |
| <a href="#block-15-5">2.6.2</a>    | Pagina lista categoria di struttura . . . . .                                      | 12        |
| <a href="#block-16-1">2.6.3</a>    | Tipologia Struttura . . . . .                                                      | 13        |
| <a href="#block-16-3">2.6.4</a>    | Medici di base e pediatri . . . . .                                                | 13        |
| <a href="#block-16-4">2.7</a>      | Sezione ASL comunica . . . . .                                                     | 13        |
| <a href="#block-16-6">2.7.1</a>    | Pagina lista di primo livello ASL comunica . . . . .                               | 13        |
| <a href="#block-17-4">2.7.2</a>    | Pagina lista categoria di secondo livello . . . . .                                | 14        |
| <a href="#block-17-4">2.7.3</a>    | Tipologie «Notizia», «Evento», «Bando e concorso» . . . . .                        | 14        |
| <a href="#block-18-2">2.8</a>      | Sezione Organizzazione . . . . .                                                   | 15        |
| <a href="#block-19-1">2.8.1</a>    | Direzione . . . . .                                                                | 16        |
| <a href="#block-19-2">2.8.2</a>    | Distretti e Dipartimenti . . . . .                                                 | 16        |
| <a href="#block-19-4">2.8.3</a>    | Personale . . . . .                                                                | 16        |
| <a href="#block-20-1">2.8.4</a>    | Documenti . . . . .                                                                | 17        |
| <a href="#block-20-5">2.9</a>      | Pagine aggregatrici (Utente e Argomento) . . . . .                                 | 17        |
| <a href="#block-21-3">2.10</a>     | Altri contenuti . . . . .                                                          | 18        |
| <a href="#block-21-3">2.10.1</a>   | Amministrazione trasparente . . . . .                                              | 18        |
| <a href="#block-21-5">2.10.2</a>   | Dichiarazione di accessibilità, Informativa privacy e Informativa cookie . . . . . | 18        |
| <a href="#block-22-1">2.10.3</a>   | Domande frequenti (FAQ) . . . . .                                                  | 19        |
| <a href="#block-22-2">2.10.4</a>   | Mappa del sito . . . . .                                                           | 19        |
| <a href="#block-22-4">2.11</a>     | Tassonomie . . . . .                                                               | 19        |
| <b><a href="#block-24-0">3</a></b> | <b>Interfaccia</b>                                                                 | <b>21</b> |

{3}------------------------------------------------

- [3.1 File della Libreria dei componenti UI](#block-24-1) . . . . . 21
  - [3.1.1 Fondamenti \(Foundations\)](#block-24-2) . . . . . 21
  - [3.1.2 Componenti \(Components\)](#block-25-2) . . . . . 22
  - [3.1.3 Layout di pagina \(Page layouts\)](#block-25-3) . . . . . 22
  - 3.1.4 Personalizzazione dell'interfaccia . . . . . 22
- [3.2 Funzionalità di valutazione della chiarezza informativa](#block-25-7) . . . . . 22
- [3.3 Annotazioni di accessibilità](#block-26-6) . . . . . 23
- [3.4 Prototipi ad alta fedeltà](#block-27-2) . . . . . 24
- [3.5 Font del modello](#block-27-5) . . . . . 24
- [4 Ricerca e progettazione](#block-28-0) . . . . . 25**
  - [4.1 Benchmark](#block-28-1) . . . . . 25
  - [4.2 Interviste con gli stakeholder](#block-28-2) . . . . . 25
  - [4.3 Interviste con i cittadini](#block-29-3) . . . . . 26
  - [4.4 User personas](#block-29-5) . . . . . 26
  - 4.5 Scenari d'uso . . . . . 27
  - 4.6 Progettazione dell'architettura . . . . . 27
  - [4.7 Prototipi a media definizione](#block-30-7) . . . . . 27
  - [4.8 Test di usabilità](#block-31-2) . . . . . 28
- [5 Allegati tecnici](#block-32-0) . . . . . 29**
- [6 Adesione al modello ASL](#block-34-0) . . . . . 31**
  - [6.1 Criteri di adesione](#block-34-1) . . . . . 31
  - [6.2 Raccomandazioni aggiuntive](#block-37-1) . . . . . 34
  - [6.3 Norme obbligatorie](#block-37-4) . . . . . 34

{4}------------------------------------------------

Documentazione tecnica e operativa per il modello di sito per le ASL, basato sul design system di Designers Italia.

{5}------------------------------------------------



{6}------------------------------------------------

<a id="block-6-0"></a>

# CAPITOLO 1

<a id="block-6-1"></a>

## --- Introduzione al modello ASL ---

Il modello Aziende sanitarie locali (ASL) permette di creare siti web che rispondono ai bisogni degli utenti, con interfacce e strutture informative semplici da usare e navigare. Lo scopo è di fornire agli utenti delle ASL un punto di riferimento chiaro e inclusivo per trovare con facilità tutte le informazioni di cui hanno bisogno, garantendo un'esperienza digitale coerente tra i vari enti.

Il modello comprende l'architettura dell'informazione, la libreria di componenti UI e i layout delle principali pagine, corredati da indicazioni operative a supporto.

## 1.1 I principi di progettazione

Il modello è stato progettato e realizzato sulla base dei principi di progettazione user-centred, tenendo in considerazione:

- i **bisogni degli utilizzatori finali dei siti delle ASL**, ossia tutti coloro che hanno diritto di accesso al Sistema Sanitario Nazionale e la necessità di avere un punto di convergenza e aggregazione di contenuti di carattere informativo su servizi, prestazioni e procedure;
- le **esigenze degli stakeholders** che si occuperanno di realizzare i siti (ASL e fornitori);
- l'**ecosistema di servizi** in cui i siti si vanno ad inserire (es. Fascicolo Sanitario Elettronico, servizi online regionali);
- la **complessità organizzativa delle ASL italiane** e quindi la necessità di flessibilità e modularità e di definire raggruppamenti semantici ampi e modulabili su qualsiasi tipo di struttura organizzativa;

La progettazione del modello ha anche preso in considerazione le indicazioni dell'**eGovernment Benchmark**, lo standard europeo di comparazione della qualità dei servizi digitali erogati dalle pubbliche amministrazioni.

Gli indicatori principali di riferimento, chiamati top-level benchmarks, sono stati:

- **Centralità dell'utente** (in inglese, user-centricity), ovvero il poter fruire di un servizio da dispositivi mobili, di lasciare feedback e di richiedere assistenza online;
- **Trasparenza** (in inglese, transparency), ovvero il poter trovare informazioni chiare sulle responsabilità delle amministrazioni, i processi di erogazione dei servizi e il trattamento dei dati personali.

{7}------------------------------------------------



{8}------------------------------------------------

<a id="block-8-0"></a>

# CAPITOLO 2

## --- Architettura dell'informazione ---

<a id="block-8-2"></a>

L'architettura dell'informazione definisce la struttura di un sito, il modo in cui le informazioni sono organizzate, i metodi di navigazione e la terminologia usata, al fine di facilitare l'accesso intuitivo ai contenuti e il completamento di compiti da parte degli utenti.

L'architettura di un sito è composta da:

- l'**alberatura**, ovvero la struttura del sito, organizzata in sezioni e livelli, e la posizione delle pagine;
- i **sistemi di navigazione** primaria e secondaria, ovvero i menu per accedere alle varie sezioni del sito;
- le **tipologie di contenuto** (in inglese, content types), ovvero la struttura e l'ordine delle informazioni per creare pagine foglia (ad esempio, le pagine di dettaglio per i servizi o le strutture di un'ASL);
- le **tassonomie** e i vocabolari controllati, ovvero le liste di vocaboli da usare per nominare i contenuti del sito e per taggarli in modo da renderli fruibili tramite motore di ricerca o navigazione alternativa.

Tutti i dettagli sull'architettura del sito di una ASL sono contenuti nel Documento di architettura dell'informazione [\(Versione ODS 165KB<sup>1</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB<sup>2</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)).

---

## 2.1 Struttura del sito

Per visualizzare la struttura del modello di sito di una ASL, vai al [Grafico dell'alberatura \(PDF 3.4MB\)](#)<sup>3</sup>.

A partire dall'homepage (livello 0), il modello si dirama in 5 sezioni principali:

- **Servizi e prestazioni**, con tutte le informazioni sui servizi sanitari offerti dall'ASL;
- **Come fare per**, con le guide passo per passo per usufruire delle procedure amministrative (iscrizioni, referti, pagamenti, prenotazioni);

---

<sup>1</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>2</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>3</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

{9}------------------------------------------------

- **Strutture**, con le indicazioni delle strutture fisiche (e non amministrative) dove gli utenti possono recarsi per usufruire dei servizi sanitari;
- **ASL comunica** (etichetta che può essere cambiato in base alla tipologia di ente, seguendo la logica «{sigla\_ente} comunica», ad esempio «ASP comunica» o «USL comunica»), con tutti i contenuti per tenere gli utenti aggiornati con le ultime novità;
- **Organizzazione**, che presenta l'organizzazione dell'ASL da un punto di vista strettamente amministrativo.

Queste sezioni sono articolate in più livelli. In particolare, presentano:

- una pagina lista di primo livello, utile a dare una panoramica dei contenuti della sezione e a smistare la navigazione degli utenti verso i contenuti di loro interesse;
- una serie di pagine lista di secondo livello, utili a dividere ulteriormente i contenuti della sezione in categorie specifiche;
- le pagine foglia, ovvero le pagine di dettaglio di un contenuto specifico – come può essere un servizio, la sede di un ospedale, un evento, una notizia.

<a id="block-9-4"></a>

Altri contenuti che si diramano a partire dall'homepage, ma che non sono organizzati in sezioni strutturate come le 5 principali, sono:

- le pagine Utente,
- le pagine Argomenti,
- l'area riservata,
- l'Amministrazione trasparente,
- l'Albo pretorio,
- la dichiarazione di accessibilità,
- l'informativa privacy,
- l'informativa cookie,
- la carta dei servizi,
- la mappa del sito,
- la pagina per l'invio di segnalazioni
- la pagina per le domande frequenti (FAQ).

## 2.2 Sistemi di navigazione

Il **menu di navigazione principale (header)** del modello prevede i collegamenti alle pagine lista di primo livello di 4 delle sezioni principali del sito: Servizi e prestazioni, Strutture, Come fare per e ASL comunica (etichetta che può essere cambiata in base alla tipologia di ente, seguendo la logica «{sigla\_ente} comunica», ad esempio «ASP comunica» o «USL comunica»).

La **navigazione secondaria** del sito avviene tramite footer, dove sono presenti i collegamenti agli altri contenuti di primo livello: la sezione Organizzazione e le sue pagine di secondo livello, l'Amministrazione trasparente, l'Albo pretorio, la dichiarazione di accessibilità, l'informativa privacy, l'informativa cookie, la carta dei servizi, la mappa del sito, la pagina per l'invio di segnalazioni e la pagina per le domande frequenti (FAQ).

{10}------------------------------------------------

Il componente Header e Footer sono disponibili nella Libreria UI del modello ASL su Figma. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>4</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Components» e le board «Header ASL» e «Footer ASL».

**Importante:** La sezione Organizzazione è l'unica tra le principali del sito a non essere presente nel menu di navigazione principale. Questo perché la sezione presenta l'ASL da un punto di vista prettamente amministrativo (dirigenti, dipartimenti, uffici), mentre gli utenti ragionano più in ottica di "sedi fisiche" dove possono recarsi per usufruire dei servizi sanitari. La sezione Organizzazione presenta quindi dei contenuti più per il personale sanitario o per gli utenti, in netta minoranza, che sono consapevoli di ricercare indicazioni di tipo organizzativo e amministrativo. Mantenere questa sezione accessibile dal menu di navigazione principale, al pari di "Strutture", creerebbe confusione e impatterebbe la navigazione degli utenti.

<a id="block-10-3"></a>

### Breadcrumbs e URL

Per una corretta navigazione all'interno del sito e per fornire all'utente un'indicazione chiara di dove si trova, è importante avere delle breadcrumbs e delle URL strutturate su ogni pagina. Entrambi questi elementi devono rispecchiare la struttura del sito.

Sul foglio «Sistema di navigazione» del Documento di architettura dell'informazione [\(\[Versione ODS 165KB\]\(#\)<sup>5</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)<sup>6</sup>), trovi le breadcrumb e le URL di esempio per ogni pagina del modello.

## 2.3 Homepage

L'homepage è stata progettata per fornire agli utenti una panoramica esaustiva dell'operato dell'ASL e i collegamenti rapidi ai contenuti più ricercati, tenendo conto anche delle necessità informative degli enti.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>7</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Homepage».

L'homepage del modello è composta da:

- Una **barra di ricerca globale** all'interno del sito e un massimo di 6 **pulsanti di ricerca rapida** rappresentanti alcune parole chiave, come ad esempio gli argomenti più ricercati. Al click sui pulsanti, l'utente atterra su una pagina di risultati di ricerca per la parola chiave selezionata;
- Una **sezione Notizie in evidenza**, dove l'ASL può mettere in rilivemo fino a 3 notizie scelte editorialmente, una in formato card grande e due in formato piccolo;
- Una **sezione Servizi e Prestazioni**, in cui mettere in evidenza fino a un massimo di 3 pagine categoria di servizi più rilevanti per ciascuna ASL – consigliamo *Visite specialistiche, Esami e analisi, Prevenzione e vaccini*;
- Una sezione **Fascicolo Sanitario Elettronico (FSE)**, che rimanda a una pagina servizio con la spiegazione dei principali servizi implementati sul FSE;
- Una **sezione Come fare per**, che mette in evidenza da un minimo di 1 ad un massimo di 6 di guide passo per passo per procedure amministrative – consigliamo *Prenotare una visita o un esame, Pagare il ticket, Cambiare/scegliere il medico di base o pediatra, Ritirare un referto, Richiedere esenzioni, Iscriversi al Sistema Sanitario Nazionale*.
- Una **sezione Tutto per**, in cui saranno presenti i collegamenti alle pagine aggregatrici Utenti che la ASL avrà individuato e a cui vorrà dare maggiore risalto;

<sup>4</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>5</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>6</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>7</sup> <https://www.figma.com/community/file/1344590104797564988>

{11}------------------------------------------------

- Una **sezione ASL Comunica**, che presenta gli ultimi contenuti editoriali pubblicati sul sito (notizie, comunicati stampa ed eventi) in ordine cronologico inverso (dal più recente al meno recente), da un minimo di 1 a un massimo di 3;
- Una **sezione Bandi e concorsi**, che presenta gli ultimi bandi (da un minimo di 1 ad un massimo di 3) e concorsi (da un minimo di 1 ad un massimo di 3) pubblicati sul sito in ordine cronologico inverso (dal più recente al meno recente). Se non sono presenti né bandi né concorsi, la sezione può essere omessa dalla homepage.
- La **funzionalità di valutazione della chiarezza informativa delle pagine**, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

<a id="block-11-2"></a>

## 2.4 Sezione Servizi e prestazioni

La sezione risponde al bisogno degli utenti di scoprire quali sono i servizi e le prestazioni a cui possono accedere nella propria ASL di riferimento.

Al primo livello, la sezione presenta una pagina lista “Servizi e prestazioni”.

<a id="block-11-5"></a>

Al secondo livello, la sezione si dirama in:

- Visite specialistiche (pagina lista / pagina categoria)
- Esami e analisi (pagina lista / pagina categoria)
- Prevenzione e vaccini (pagina lista / pagina categoria)
- Percorsi di cura e assistenza (pagina lista / pagina categoria)
- Igiene pubblica e animali (pagina lista / pagina categoria)
- Interventi di chirurgia (pagina lista / pagina categoria)
- Pronto soccorso (pagina servizio)
- Fascicolo sanitario elettronico (pagina servizio)

La tassonomia di riferimento che regola le nomenclature per le pagine categoria di questa sezione è la Tassonomia dei servizi di una ASL. Le nomenclature individuate sono le più riconosciute dagli utenti, perciò le ASL dovrebbero sforzarsi di collocare i propri servizi a partire da questa suddivisione. È comunque possibile aggiungere nuove categorie nel caso ci siano servizi che non rientrano nelle categorie individuate.

Direttamente sotto le pagine lista di secondo livello (pagine categoria), sono presenti le pagine foglia dei servizi afferenti a quella specifica categoria, create seguendo le indicazioni della tipologia di contenuto “Servizio”.

Per approfondire la struttura della sezione Servizi e prestazioni, vai al [Grafico dell'alberatura \(PDF 3.4MB\)](#)<sup>8</sup>.

### 2.4.1 Pagina lista di primo livello Servizi e prestazioni

La pagina lista di primo livello “Servizi e prestazioni” ha lo scopo di presentare agli utenti una panoramica dei principali servizi e categorie di servizio a cui possono accedere presso l'ASL.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>9</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di primo livello - SERVIZI E PRESTAZIONI».

La pagina è composta da:

---

<sup>8</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

<sup>9</sup> <https://www.figma.com/community/file/1344590104797564988>

{12}------------------------------------------------

- Una **sezione Servizi in evidenza**, dove ogni ASL può mettere in risalto fino a 3 servizi, come i più ricercati o quelli particolarmente rilevanti in un determinato periodo (ad esempio, il Vaccino antinfluenzale in autunno);
- Una **sezione Esplora per categoria**, dove sono elencate le card che collegano alle varie pagine categoria, con titolo e descrizione. Questo è un elemento obbligatorio;
- Una **sezione Come fare per**, in cui presentare i collegamenti alle guide passo per passo correlate ai servizi, presenti nella sezione del sito Come fare per - consigliamo *Come pagare un ticket, Prenotare una visita o un esame, Pagare il ticket, Cambiare/scegliere medico di base o pediatra, Ritirare referti, Richiedere esenzioni*;
- Una **sezione Fasciolo Sanitario Elettronico (FSE)** che porta alla scheda servizio dedicata;
- Una **sezione Pronto Soccorso** che rimanda alla scheda servizio dedicata. Nella scheda è obbligatorio rendere disponibile le informazioni relative allo stato di affollamento del pronto soccorso. Questa informazione può essere incorporata all'interno della scheda servizio o in alternativa può rappresentare un link verso la piattaforma regionale di riferimento;
- Una **sezione Parliamo di**, in cui sono riportati i collegamenti verso ciascun argomento a cui sia stato correlato un contenuto appartenente alle categorie dei servizi. Il click su un argomento porta a una Pagina aggregatrice con la tab Servizi selezionata;
- La **funzionalità di valutazione della chiarezza informativa della pagina**, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

<a id="block-12-2"></a>

### 2.4.2 Pagina lista categoria di servizio

Al di sotto della pagina lista di primo livello Servizi e prestazioni, si diramano le pagine lista categoria di secondo livello. Una pagina lista categoria raccoglie i collegamenti a tutte le schede servizio afferenti a quella specifica categoria.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>10</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Categoria di servizio o prestazione».

La pagina è composta da:

- Il titolo della pagina, che coincide con il titolo della categoria di servizio;
- Una breve descrizione della categoria e del contenuto su pagina;
- Una barra di ricerca dove inserire parole chiave per filtrare la lista dei risultati;
- La lista dei filtri che un utente può selezionare, divisi in Utenti e Argomenti – su desktop i filtri sono sempre visibili e i risultati di pagina si aggiornano alla selezione del filtro, su mobile i filtri si aprono in una modale e i risultati si aggiornano al click sul pulsante “Mostra risultati”;
- La lista dei contenuti;
- La funzionalità di valutazione della chiarezza informativa della pagina, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

### 2.4.3 Tipologia “Servizio”

La tipologia “Servizio”, descritta nel Documento di architettura dell'informazione [\(\[Versione ODS 165KB\]\(https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx\)<sup>1</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)1, [Versione XLSX 398KB](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)<sup>12</sup>), indica gli attributi informativi necessari e l'ordine di presentazione degli stessi per creare una pagina foglia di un servizio sanitario o di una prestazione. La tipologia “Servizio” è stata progettata per mettere in risalto le

<sup>10</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>11</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>12</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

{13}------------------------------------------------

informazioni “pratiche” più ricercate dagli utenti delle ASL, come le modalità di accesso al servizio, tempi di attesa, indirizzi, orari di apertura e contatti.

Come ogni pagina del sito, le pagine foglia servizio presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

<a id="block-13-3"></a>

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>13</sup>, apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine foglia» e la board «Template SERVIZIO».

La tipologia “Servizio” è abbastanza flessibile da adattarsi a ogni categoria di servizio o prestazione identificata. Per le ASL che hanno invece bisogno di una struttura sequenziale (passo per passo) per i percorsi di cura, è possibile usare il componente Step by step usato nei layout della tipologia Come fare per.

<a id="block-13-5"></a>

## 2.5 Sezione Come fare per

La sezione presenta guide passo per passo per aiutare gli utenti con le procedure più o meno complesse, come ad esempio alcune procedure amministrative per usufruire dei servizi sanitari erogati dall’ASL - Pagare il ticket, Prenotare una visita o un esame, Ritirare referti, Cambiare/scegliere il medico di base, Richiedere esenzioni, Richiedere certificati speciali.

Si tratta di tutte quelle procedure che richiedono all’utente di interfacciarsi con più uffici (dell’ASL stessa o al di fuori dell’ASL) o di seguire una serie di passaggi complessi, ognuno dei quali richiede accortezze o documenti specifici.

Al primo livello, la sezione presenta una pagina lista “Come fare per”. Al secondo livello sono direttamente presenti le pagine foglia delle guide alle procedure, create seguendo le indicazioni della tipologia di contenuto “Come fare per”.

Per approfondire la struttura della sezione Come fare per, vai al [Grafico dell’alberatura \(PDF 3.4MB\)](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf)<sup>14</sup>.

### 2.5.1 Pagina lista di primo livello Come fare per

La pagina lista di primo livello “Come fare per” ha lo scopo di presentare agli utenti una panoramica delle guide passo per passo disponibili sul sito.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>15</sup>, apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di primo livello - COME FARE PER».

La pagina lista di primo livello dovrebbe presentare:

- Il titolo di pagina;
- Un sottotitolo di pagina con una breve descrizione dei contenuti della sezione;
- Una barra di ricerca, dove gli utenti possono inserire parole chiave per filtrare i risultati;
- L’elenco di tutte le pagine foglia “Come fare per”.
- La funzionalità di valutazione della chiarezza informativa della pagina, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

---

<sup>13</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>14</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

<sup>15</sup> <https://www.figma.com/community/file/1344590104797564988>

{14}------------------------------------------------

<a id="block-14-1"></a>

### 2.5.2 Tipologia Come fare per

La tipologia “Come fare per”, descritta nel Documento di architettura dell’informazione [\(Versione ODS 165KB<sup>1</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)6, [Versione XLSX 398KB<sup>1</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)7), indica gli attributi informativi necessari e l’ordine di presentazione degli stessi per creare una pagina foglia Come fare per.

Sono stati creati 2 template utili alla stesura di questi contenuti:

<a id="block-14-4"></a>

- Un template per procedure semplici: procedure che richiedono pochi, semplici passaggi e che possono essere spiegate con solo elemento testuale;
- Un template per procedure complesse: procedure che possono coinvolgere più unità organizzative e che richiedono molti passaggi, oppure pochi passaggi ma per i quali è necessario condividere molte informazioni verso l’utente.

Come ogni pagina del sito, le pagine foglia Come fare per presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

I relativi layout hi-fi su Figma presentano la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>18</sup>, apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine foglia» e la board «Template COME FARE PER».

## 2.6 Sezione Strutture

La sezione risponde al bisogno degli utenti di scoprire dove vengono erogati i servizi sanitari a cui possono accedere nella propria ASL di riferimento. La sezione presenta quindi tutte le informazioni sulle **sedì fisiche** (e **non amministrative**) dove gli utenti possono recarsi.

Al primo livello, la sezione presenta una pagina lista “Strutture”.

Al secondo livello, la sezione si dirama in una serie di pagine categoria:

- Ospedali
- Ambulatori e poliambulatori
- Laboratori di analisi
- Medici di base e pediatri
- Altre strutture territoriali

La tassonomia di riferimento che regola le nomenclature per le pagine categoria di questa sezione è la Tassonomia Tipi di Strutture. Le nomenclature individuate sono le più riconosciute dagli utenti, perciò le ASL dovrebbero sforzarsi di collocare le proprie strutture a partire da questa suddivisione. È comunque possibile aggiungere nuove categorie nel caso ci siano servizi sanitari che non rientrano nelle categorie individuate.

In alberatura, sono state portate al secondo livello le categorie di strutture più ricercate dagli utenti. La categoria Altre strutture territoriali è stata pensata come un contenitore per tutte le altre strutture che sono presenti in numero minore sul territorio e sono meno cercate dagli utenti ordinari (ad esempio, RSA, Hospice, Consultori, etc.). Ogni ASL può decidere se aggiungere pagine categorie specifiche in aggiunta a quelle sopraelencate, in base ai bisogni dei propri utenti (ad esempio, se le Case famiglia sono strutture molto richieste e ricercate dagli utenti di un determinato territorio, è possibile aggiungere una pagina categoria di secondo livello “Case famiglia” invece che relegare questi contenuti in “Altre strutture territoriali”).

<sup>16</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>17</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>18</sup> <https://www.figma.com/community/file/1344590104797564988>

{15}------------------------------------------------

<a id="block-15-1"></a>

Direttamente sotto le pagine lista di secondo livello (pagine categoria), sono presenti le pagine foglia delle strutture afferenti a quella specifica categoria, create seguendo le indicazioni della tipologia di contenuto “Struttura” (ad eccezione delle pagine dei Medici di base e pediatri, che seguono la tipologia «Persona»).

Per approfondire la struttura della sezione Strutture, vai al [Grafico dell’alberatura \(PDF 3.4MB\)](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf)<sup>19</sup>.

### 2.6.1 Pagina lista di primo livello Strutture

La pagina lista di primo livello “Strutture” ha lo scopo di presentare agli utenti una panoramica delle sedi fisiche dove è possibile recarsi per usufruire di prestazioni sanitarie.

<a id="block-15-5"></a>

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>20</sup>, apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di primo livello - STRUTTURE».

La pagina è composta da:

- Una **sezione In Evidenza**, destinata alle notizie correlate alle strutture che la ASL deciderà di mettere in risalto. Possono essere messi in evidenza contenuti editoriali che sia correlati alle strutture dell’ASL. Questi contenuti possono essere pescati da quelli taggati con l’argomento “Organizzazione”
- Una **sezione Esplora per categoria**, in cui sarà presente l’elenco delle categorie per le quali sono categorizzate le diverse strutture, con nome e descrizione;
- La **funzionalità di valutazione della chiarezza informativa della pagina**, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

### 2.6.2 Pagina lista categoria di struttura

Al di sotto della pagina lista di primo livello Strutture, si diramano le pagine lista categoria di secondo livello. Una pagina lista categoria raccoglie i collegamenti a tutte le pagine strutture servizio afferenti a quella specifica categoria.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>21</sup>, apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine lista» e la board «Strutture ed elenco medici».

La pagina è composta da:

- Il titolo della pagina, che coincide con il titolo della categoria di servizio;
- Una breve descrizione della categoria e del contenuto su pagina;
- Una barra di ricerca dove inserire un indirizzo per filtrare le strutture dalla più vicina alla più lontana (opzionale) – in questo caso, ogni struttura nella lista sottostante presenterà anche l’indicazione della distanza in km;
- Solo nel caso della pagina Altre strutture territoriali, una barra con i filtri per selezionare categorie specifiche di strutture;
- Una mappa interattiva che presenta la posizione delle strutture sul territorio;
- La lista delle strutture con i collegamenti alle pagine foglia di riferimento;
- La **funzionalità di valutazione della chiarezza informativa della pagina**, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

<sup>19</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

<sup>20</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>21</sup> <https://www.figma.com/community/file/1344590104797564988>

{16}------------------------------------------------

<a id="block-16-1"></a>

### 2.6.3 Tipologia Struttura

La tipologia “Struttura”, descritta nel Documento di architettura dell’informazione [\(\[Versione ODS 165KB<sup>2</sup>\]\(#\)2](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB<sup>23</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)), indica gli attributi informativi necessari e l’ordine di presentazione degli stessi per creare una pagina foglia di una **struttura fisica (non sedi amministrative)** dove gli utenti possono recarsi per usufruire di una prestazione sanitaria.

<a id="block-16-3"></a>

La tipologia “Struttura” è stata progettata per mettere in risalto le informazioni “pratiche” più ricercate dagli utenti delle ASL, come a chi è dedicata la struttura, indirizzo, modalità di accesso, orari di apertura, i contatti e l’elenco dei servizi erogati.

<a id="block-16-4"></a>

Come ogni pagina del sito, le pagine foglia struttura presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all’ente per migliorare i contenuti del sito.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma<sup>24</sup>](https://www.figma.com/community/file/1344590104797564988), apri il file nelle tue bozze (Drafts) e scorri l’indice laterale fino a trovare il foglio «Pagine foglia» e la board «Template STRUTTURA».

<a id="block-16-6"></a>

### 2.6.4 Medici di base e pediatri

La sottosezione “Medici di base e pediatri” è l’unica che, invece delle pagine Struttura, presenta delle pagine foglia di tipo Persona.

## 2.7 Sezione ASL comunica

Questa sezione racchiude tutta la comunicazione ufficiale dell’ASL verso gli utenti ed è il principale punto di riferimento per restare aggiornati sulle novità.

Al primo livello, la sezione presenta una pagina lista “ASL comunica”. Il titolo di pagina può essere cambiato in base alla tipologia di ente, seguendo la logica «{sigla\_ente} comunica», ad esempio «ASP comunica» o «USL comunica».

Al secondo livello, la sezione si dirama in una serie di pagine categoria:

- Notizie
- Comunicati stampa
- Eventi
- Concorsi
- Bandi di gara

Per approfondire la struttura della sezione ASL comunica, vai al [Grafico dell’alberatura \(PDF 3,4MB\)<sup>25</sup>](#).

### 2.7.1 Pagina lista di primo livello ASL comunica

La pagina lista di primo livello di questa sezione è pensata per raccogliere e categorizzare tutti i contenuti editoriali disponibili sul sito, in modo da indirizzare facilmente gli utenti verso i contenuti di interesse. Il titolo di pagina può essere cambiato in base alla tipologia di ente, seguendo la logica «{sigla\_ente} comunica», ad esempio «ASP comunica» o «USL comunica».

<sup>22</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>23</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>24</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>25</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

{17}------------------------------------------------

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma<sup>26</sup>](https://www.figma.com/community/file/1344590104797564988), apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di primo livello - ASL COMUNICA».

La pagina è composta da:

- Una **sezione In evidenza** dove vengono messi in rilievo quei contenuti editoriali importanti per l'ASL a prescindere dalla data di pubblicazione;
- Una sezione **Ultime novità**, dove i contenuti sono pubblicati in ordine cronologico inverso, dal più recente al meno recente;
- Una **sezione Esplora per categoria**, con i collegamenti alle pagine categorie di secondo livello in cui sono suddivisi i contenuti della sezione;
- Una **sezione Parliamo di**, con l'elenco degli argomenti con cui sono stati taggati i contenuti della sezione. Al click su un argomento si va su una Pagina aggregatrice argomento dedicata, sulla tab ASL comunica;
- La **funzionalità di valutazione della chiarezza informativa delle pagine**, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

<a id="block-17-4"></a>

### 2.7.2 Pagina lista categoria di secondo livello

Al di sotto della pagina lista di primo livello ASL comunica, si diramano le pagine lista categoria di secondo livello. Una pagina lista categoria raccoglie i collegamenti a tutte le pagine foglia afferenti a quella specifica categoria di contenuto.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina. Vai al [file del modello ASL sulla Community Figma<sup>27</sup>](https://www.figma.com/community/file/1344590104797564988), apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di secondo livello – template base».

La pagina è composta da:

- Il titolo della pagina, che coincide con il titolo della categoria di contenuti;
- Una breve descrizione della categoria e del contenuto su pagina;
- Una barra di ricerca dove inserire parole chiave per filtrare la lista dei risultati;
- La lista dei filtri che un utente può selezionare, divisi in Utenti e Argomenti – su desktop i filtri sono sempre visibili e i risultati di pagina si aggiornano alla selezione del filtro, su mobile i filtri si aprono in una modale e i risultati si aggiornano al click sul pulsante “Mostra risultati”;
- La lista dei contenuti;
- La **funzionalità di valutazione della chiarezza informativa delle pagine**, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

### 2.7.3 Tipologie «Notizia», «Evento», «Bando e concorso»

Le tipologie di questa sezione, descritte nel Documento di architettura dell'informazione [\(\[Versione ODS 165KB<sup>2</sup>\]\(#\)8](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB<sup>29</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)), indicano gli attributi informativi necessari e l'ordine di presentazione degli stessi per creare pagine foglia:

- **Tipologia Notizia e comunicato stampa:** riferibile a tutti i tipi di aggiornamento e comunicazione come comunicati stampa, avvisi e notizie;

<sup>26</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>27</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>28</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>29</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

{18}------------------------------------------------

- **Tipologia Evento:** per la creazione di pagine evento. La tassonomia di riferimento per categorizzare questi contenuti è la Tassonomia Tipi di Evento;
- **Tipologia Bando o concorso:** per la creazione di bandi o concorsi rivolti a coloro che vogliono lavorare per l'ASL (come fornitori o come dipendenti specialisti del settore sanitario); Questa tipologia è stata impostata per presentare su pagina tutte le informazioni obbligatorie per legge, così da poter linkare a queste pagine dalla sezione Amministrazione trasparente senza dover duplicare i contenuti.

<a id="block-18-2"></a>

Come ogni pagina del sito, le pagine foglia di questa sezione presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

## 2.8 Sezione Organizzazione

Questa sezione presenta com'è strutturata l'ASL da un punto di vista amministrativo, in base all'organizzazione interna.

Al primo livello, la sezione presenta una pagina lista "Organizzazione".

Al secondo livello, la sezione si dirama in una serie di pagine che, in base a com'è strutturata l'ASL, possono essere:

- Direzione generale (pagina foglia)
- Direzione sanitaria (pagina foglia)
- Direzione amministrativa (pagina foglia)
- Distretti (pagina lista)
- Dipartimenti (pagina lista)
- Personale (pagina lista)
- Documenti (pagina lista)
- Lavora con noi (pagina foglia)
- Ufficio relazioni con il pubblico (URP) (pagina foglia)
- Centro Unico Prenotazioni (CUP) (pagina foglia)

Le tipologie di contenuto di riferimento per questa sezione, descritte nel Documento di architettura dell'informazione [\(Versione ODS 165KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)0, [Versione XLSX 398KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)1), sono:

- **Unità organizzativa**, per le pagine delle direzioni, distretti, dipartimenti e unità operative dell'ASL. Questa tipologia è stata progettata per mettere in risalto le competenze dell'unità, le sedi, i contatti, i direttori e il personale di riferimento;
- **Persona**, per le pagine foglia della sottosezione *Personale*;
- **Documento**, per le pagine foglia della sottosezione *Documenti*.

Le pagine *URP* e *CUP* possono seguire, invece, la struttura della tipologia Servizio. La pagina *Lavora con noi* può essere impostata liberamente dall'ASL in base alle proprie esigenze.

Per approfondire la struttura della sezione Organizzazione, vai al [Grafico dell'alberatura \(PDF 3.4MB\)](#)<sup>32</sup>.

Come ogni pagina del sito, tutte le pagine della sezione Organizzazione presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

<sup>30</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>31</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>32</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

{19}------------------------------------------------

<a id="block-19-1"></a>

### 2.8.1 Direzione

<a id="block-19-2"></a>

Le pagine *Direzione* sono pagine foglia ospitate al secondo livello, create seguendo la tipologia Unità organizzativa, descritta nel Documento di architettura dell'informazione [\(Versione ODS 165KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)3, [Versione XLSX 398KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)4).

Come ogni pagina del sito, tutte le pagine *Direzione* presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

<a id="block-19-4"></a>

### 2.8.2 Distretti e Dipartimenti

Le pagine *Distretti e Dipartimenti* (secondo livello) sono pagine lista che presentano tutti i distretti e i dipartimenti, con i collegamenti alle pagine foglia di dettaglio.

Le pagine specifiche di un distretto o di un dipartimento sono invece pagine foglia (terzo livello) create sulla base della tipologia Unità organizzativa, descritta nel Documento di architettura dell'informazione [\(Versione ODS 165KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)5, [Versione XLSX 398KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)6). Al di sotto delle pagine dei singoli distretti e dipartimenti, possono essere aggiunti ulteriori livelli di alberatura, in base alle necessità, per ospitare le pagine delle Unità operative (quarto livello) che fanno capo a ciascun distretto o dipartimento – anche queste create seguendo la tipologia Unità organizzativa.

Come ogni pagina del sito, tutte le pagine *Distretti e Dipartimenti* presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

### 2.8.3 Personale

La pagina *Personale* è una pagina lista che raccoglie e presenta tutte le pagine persona create per presentare il personale dell'ASL, sia medico che amministrativo.

Il layout di pagina segue il template “Pagina lista di secondo livello – template base”, disponibile sul [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>37</sup>. Apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di secondo livello – template base».

La pagina è composta da:

- Il titolo della pagina, che sarà “Personale”
- Una breve descrizione del contenuto su pagina
- Una barra di ricerca dove inserire parole chiave per filtrare la lista dei risultati
- La lista delle persone che lavorano nella ASL – al click su una persona, l'utente naviga alla pagina foglia di riferimento, creata seguendo la Tipologia Persona;
- La funzionalità di valutazione della chiarezza informativa della pagina, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

Le pagine foglia persona seguono la Tipologia persona sul Documento di architettura dell'informazione [\(Versione](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods) [ODS 165KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)8, [Versione XLSX 398KB<sup>3</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)9).

<sup>33</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>34</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>35</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>36</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>37</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>38</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>39</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

{20}------------------------------------------------

<a id="block-20-1"></a>

Come ogni pagina del sito, tutte le pagine foglia persona presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

### 2.8.4 Documenti

La pagina *Documenti* è una pagina lista che raccoglie e presenta tutte le pagine documenti.

Il layout di pagina segue il template “Pagina lista di secondo livello – template base”, disponibile sul [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>40</sup>. Apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagine lista» e la board «Pagina lista di secondo livello – template base».

<a id="block-20-5"></a>

La pagina è composta da:

- Il titolo della pagina, che sarà “Documenti”;
- Una breve descrizione del contenuto su pagina;
- Una barra di ricerca dove inserire parole chiave per filtrare la lista dei risultati;
- La lista dei documenti – al click su un documento, l'utente naviga alla pagina foglia di riferimento, creata seguendo la Tipologia Documento.

Le pagine foglia documento seguono la Tipologia documento descritta sul Documento di architettura dell'informazione [\(\[Versione ODS 165KB\]\(#\)<sup>4</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods)1, [Versione XLSX 398KB](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)<sup>42</sup>).

Come ogni pagina del sito, tutte le pagine foglia documento presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

## 2.9 Pagine aggregatrici (Utente e Argomento)

Le Pagine aggregatrici forniscono una navigazione alternativa dei contenuti del sito, sulla base di un argomento specifico o di una tipologia di utenza.

Il funzionamento delle Pagine aggregatrici si basa sull'uso della *Tassonomia argomenti dell'ASL* e *Tassonomia utenti dell'ASL*. I contenuti delle varie sezioni del sito possono essere taggati con le voci di queste tassonomie e raccolti nelle pagine aggregatrici, divisi in una serie di tab in base alla sezione di appartenenza del sito:

- **Tutti** (aggregazione di tutti i contenuti taggati, indipendentemente dalla sezione del sito a cui fanno riferimento);
- **Servizi e prestazioni;**
- **Come fare per;**
- **Strutture;**
- **ASL comunica**, quindi Notizie, Comunicati stampa, Eventi, Bandi e Concorsi;
- **Documenti.**

Nella pagina aggregatrice non è obbligatoria la presenza di contenuti riferibili a tutte le sezioni ma, per avere senso di esistere, questa pagina dovrà aggregare contenuti provenienti da almeno due sezioni di quelle elencate. Le varie tab della pagina dovrebbero apparire soltanto se ci sono dei contenuti da presentare.

---

<sup>40</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>41</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>42</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

{21}------------------------------------------------

Come ogni pagina del sito, le pagine aggregatrici presentano la **funzionalità di valutazione della chiarezza informativa** prima del footer, che permette agli utenti di lasciare feedback utile all'ente per migliorare i contenuti del sito.

È disponibile il relativo layout hi-fi su Figma che presenta la veste grafica della pagina e un esempio di contenuto. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>43</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Pagina aggregatrice».

<a id="block-21-3"></a>

Alle **Pagine Utenti** è possibile accedere tramite homepage, dalla sezione «Tutto per», e dalle sezioni «A chi è rivolto» delle pagine foglia del sito. Per rendere le pagine Utenti utili, è necessario usare i tag con efficacia - ad esempio, per la pagina Anziani, aggiungi il tag solo ai servizi e le strutture dedicate esclusivamente a loro. Non si creerebbe, altrimenti, una navigazione alternativa rispetto alla consultazione della sezione del sito Servizi o Strutture.

Alle **Pagine Argomento** è possibile accedere dalle Pagine lista di primo livello e dalle pagine foglia che presentano la sezione «Parliamo di».

<a id="block-21-5"></a>

## 2.10 Altri contenuti

### 2.10.1 Amministrazione trasparente

L'amministrazione trasparente è una sezione dei siti delle pubbliche amministrazioni, obbligatoria per legge, in cui vengono pubblicate tutte le informazioni sulle attività dell'amministrazione. I contenuti e la struttura della sezione Amministrazione Trasparente sono regolati dal [Decreto legislativo 14 marzo 2013, n. 33](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33!vig=)<sup>44</sup> e dalla [Delibera ANAC n. 495 del 25 settembre 2024](https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024)<sup>45</sup>. La sezione Amministrazione trasparente può essere una sottosezione del sito stesso o appartenente a un sottomominio. Deve essere accessibile dall'homepage del sito dell'ente, in particolare dal footer, e i contenuti devono essere indicizzati per essere reperibili anche tramite motori di ricerca terzi (es. Google).

Alcuni dei contenuti obbligatori dell'Amministrazione trasparente saranno già disponibili nel sito della ASL, come ad esempio, le informazioni sugli uffici. Questo non esonera, tuttavia, dall'obbligo di predisporre una sezione Amministrazione Trasparente. La natura di questi contenuti è fondamentalmente diversa: il content type del modello è infatti progettato per gli utenti che devono interfacciarsi con gli uffici della ASL, mentre le pagine dell'Amministrazione Trasparente presentano una struttura che risponde a obblighi di trasparenza, pubblicità e anticorruzione.

Con la [Delibera ANAC n. 495 del 25 settembre 2024](https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024)<sup>46</sup>, sono stati pubblicati 3 schemi di pubblicazione per rispettare gli obblighi dell'Amministrazione Trasparente in merito alla pubblicazione delle informazioni sull'utilizzo delle risorse pubbliche, l'organizzazione delle pubbliche amministrazioni e le attività dell'amministrazione.

Per rendere i contenuti dell'Amministrazione trasparente interoperabili, è disponibile il [relativo profilo applicativo](https://schema.gov.it/semantic-assets/details?uri=https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FTransparency)<sup>47</sup>.

### 2.10.2 Dichiarazione di accessibilità, Informativa privacy e Informativa cookie

Questi contenuti sono requisiti di legge. Per le indicazioni sulla struttura e i contenuti di queste pagine si rimanda alle normative in vigore nel [capitolo Norme e requisiti legali](#)<sup>48</sup>.

<sup>43</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>44</sup> <https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33!vig=>

<sup>45</sup> <https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024>

<sup>46</sup> <https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024>

<sup>47</sup> <https://schema.gov.it/semantic-assets/details?uri=https%3A%2F%2Fw3id.org%2Fitalia%2Ffonto%2FTransparency>

<sup>48</sup> <https://docs.italia.it/italia/designers-italia/design-asl-docs/it/versione-corrente/norme-e-requisiti-legali.html>

{22}------------------------------------------------

<a id="block-22-1"></a>

### 2.10.3 Domande frequenti (FAQ)

<a id="block-22-2"></a>

Si consiglia di prevedere una pagina con le Domande frequenti (FAQ) come indicazione dell'eGovernment Benchmark, lo standard europeo di comparazione della qualità dei servizi digitali erogati dalle pubbliche amministrazioni.

La pagina dovrebbe prevedere una barra di ricerca con cui è possibile filtrare velocemente i risultati su pagina.

<a id="block-22-4"></a>

### 2.10.4 Mappa del sito

La mappa del sito è uno strumento fondamentale per garantire l'accessibilità di un sito e di fornire una navigazione alternativa all'uso dei menu di navigazione. La pagina si presenta come una lista di titoli di pagina con i link alle pagine stesse e l'indicazione della gerarchia nella struttura del sito, facilmente leggibile dai software di accessibilità.

Il foglio «Sistema di navigazione» del Documento di architettura [\(\[Versione ODS 165KB<sup>4</sup>\]\(#\)9](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB<sup>50</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)) - nelle colonne A, B, C, D e E - offre un esempio di come strutturare la mappa di un sito.

Si sconsiglia di includere nella mappa del sito i collegamenti alle pagine di contenuti editoriali come notizie ed eventi, in quanto contenuti che diventano velocemente obsoleti e che potrebbero poi creare una lista di pagine molto lunga e difficile da navigare. Per queste sezioni, si consiglia di fornire i link solo alle pagine lista di categoria (ad esempio, la pagina Notizie e la pagina Eventi).

## 2.11 Tassonomie

Le tassonomie sono classificazioni gerarchiche di concetti, ovvero delle liste di nomenclature con cui si possono categorizzare i contenuti del sito. L'uso di tassonomie fornisce contesto ai contenuti e facilita la ricerca di contenuti correlati.

Le tassonomie del sito di una ASL sono:

- Argomenti
- Strutture
- Utenti
- Tipi di Notizia
- Tipi di Evento
- Tipi di Incarico
- Tipi di Punto di Contatto
- Tipi di Servizio

La lista delle tassonomie è riportata nel documento di architettura, con i link alle rispettive schede di dettaglio. La matrice Tipologie/Tassonomie indica le relazioni tra le Tipologie di contenuto e le tassonomie. Come si può vedere sulla scheda dettaglio nel Documento di architettura dell'informazione [\(\[Versione ODS 165KB<sup>5</sup>\]\(#\)1](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods), [Versione XLSX 398KB<sup>52</sup>](https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx)), le tassonomie presentano vari livelli di gerarchia e granularità. Nel classificare i contenuti (strutture, servizi e prestazioni, notizie, etc.) bisogna usare il maggior livello di dettaglio possibile.

Ad esempio, la pagina informativa di una prestazione come "Screening per il tumore alla mammella", userà la tassonomia "Utenti" e in particolare la voce di secondo livello "Donne".

<sup>49</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>50</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>51</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>52</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

{23}------------------------------------------------



{24}------------------------------------------------

<a id="block-24-1"></a>

## --- Interfaccia ---

<a id="block-24-2"></a>

Un buon sito web presenta interfacce intuitive, inclusive, accessibili e che non portano a errori di interazione.

La costruzione dell'interfaccia è una delle fasi finali della realizzazione o del rifacimento di un sito web. Le risorse disponibili ti aiutano ad assemblare velocemente l'interfaccia utente tramite componenti (tipografia, pulsanti, icone, navigazione) già validati e con uno stile visivo coerente con le altre Pubbliche Amministrazioni.

---

## 3.1 File della Libreria dei componenti UI

Per il modello è stata creata una libreria di componenti standardizzati che definisce il punto centralizzato dal quale recuperare gli elementi che andranno a comporre l'interfaccia del sito.

I vantaggi di utilizzare una libreria di componenti sono:

- una maggiore applicabilità a livello di implementazione, riducendo tempi di sviluppo e frequenza di modifica degli stili e al contempo garantendo una maggiore consistenza in termini sia visivi che di esperienza tra i siti;
- un'esperienza d'uso più coerente per i cittadini, garantendo maggiore orientamento e trovabilità dei contenuti anche nel passaggio tra diversi siti ASL.

All'interno del file Figma è possibile trovare tutte le informazioni di implementazione, di utilizzo e di comportamento a livello di interazione.

[Vai alla libreria dei componenti UI<sup>5</sup>](https://www.figma.com/community/file/1344590104797564988)3

### 3.1.1 Fondamenti (Foundations)

I fondamenti di UI sono gli elementi che definiscono le caratteristiche dei componenti dell'interfaccia utente.

La base dei fondamenti del modello ASL è stata generata a partire dallo UI Kit Italia al quale sono stati integrati alcuni elementi aggiuntivi caratterizzanti del modello.

---

<sup>53</sup> <https://www.figma.com/community/file/1344590104797564988>

{25}------------------------------------------------

I fondamenti definiscono le linee guida per l'utilizzo di:

<a id="block-25-2"></a>

- nomenclature (naming);
- griglie e spaziature (spacing);
- colori e tokens.

<a id="block-25-3"></a>

### 3.1.2 Componenti (Components)

I componenti definiscono i mattoni riutilizzabili del kit. Ciascun componente è stato progettato per incontrare bisogni specifici degli utenti e, nel loro insieme, definiscono i modelli di interazione.

I componenti sono divisi in:

<a id="block-25-6"></a>

- Components: ossia tutti i singoli componenti del Kit;
- Sections: ossia organismi di componenti che si ripetono all'interno di determinate pagine o sezioni del sito.

<a id="block-25-7"></a>

### 3.1.3 Layout di pagina (Page layouts)

I layout di pagina invece definiscono i template che, attraverso l'insieme di componenti specifici, articolano la struttura delle pagine e del contenuto al loro interno.

I layout di pagina disponibili sono:

- Homepage;
- Pagine lista;
- Pagine foglia;
- Pagine aggregatori;
- Ricerca.

### 3.1.4 Personalizzazione dell'interfaccia

Aggiungi il logo dell'ASL, scegli la giusta tipologia di header e imposta i colori primari e secondari.

La guida alla personalizzazione del modello ti aiuta a creare un sito con una resa grafica fluida, accessibile e che rispecchia al meglio l'identità visiva dell'ente di riferimento.

Per accedere alla guida alla personalizzazione, vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>54</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «How to».

## 3.2 Funzionalità di valutazione della chiarezza informativa

Il sito di una ASL deve permettere ai cittadini di valutare la chiarezza informative delle pagine, come da indicazione dell'**eGovernment Benchmark**. Questa funzionalità deve essere presente su ogni pagina del sito, prima del footer.

Il componente è stato progettato usando una scala che vuole misurare la chiarezza dei contenuti e, in base alla valutazione ricevuta dall'utente, offre domande chiuse e aperte in maniera standardizzata, in modo tale da poter raccogliere feedback utile all'ente per migliorare le pagine del sito.

---

<sup>54</sup> <https://www.figma.com/community/file/1344590104797564988>

{26}------------------------------------------------

Il componente è disponibile nella Libreria UI del modello ASL su Figma. Vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>55</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Components» e la board «Feedback».

La funzionalità si articola nei seguenti passaggi:

1. viene posta la domanda «Quanto sono chiare le informazioni su questa pagina?», a cui l'utente risponde con una scala Likert 1-5 sotto forma di stelline;
2. in base alla risposta dell'utente, il secondo passaggio presenta 2 varianti:

Se il punteggio dell'utente è inferiore a 4 (1-3), viene posta la domanda a risposta multipla «Dove hai incontrato le maggiori difficoltà?». Le possibili risposte sono:

- A volte le indicazioni non erano chiare
- A volte le indicazioni non erano complete
- A volte non capivo se stavo procedendo correttamente
- Ho avuto problemi tecnici
- Altro

<a id="block-26-6"></a>

Se il punteggio è pari o superiore a 4 (4-5) il testo della domanda sarà: «Quali sono stati gli aspetti che hai preferito?». Le possibili risposte:

- Le indicazioni erano chiare
- Le indicazioni erano complete
- Capivo sempre che stavo procedendo correttamente
- Non ho avuto problemi tecnici
- Altro

3. viene presentato un campo di testo libero per dare la possibilità all'utente di inserire un breve commento, introdotto dalla domanda «Vuoi aggiungere altri dettagli?»
4. All'invio del feedback, il messaggio «Grazie, il tuo parere ci aiuterà a migliorare il sito!» conferma all'utente la riuscita dell'invio.

## 3.3 Annotazioni di accessibilità

A corredo della libreria UI, abbiamo creato delle annotazioni di accessibilità che guidano a una corretta interpretazione ed implementazione del modello in conformità con le linee guida di accessibilità WCAG 2.1.

Per questo lavoro sono stati estratti i template più significativi del modello, sia a livello di contenuto che di diversità di componenti.

Le annotazioni riguardano la presenza di:

- Landmark: sezione di pagina corrispondente all'elemento semantico HTML;
- Button: elemento interattivo che esegue un'azione come il submit di un modulo o l'apertura di un dialog;
- Immagini: per discernere le immagini informative da quelle decorative;
- Link: collegamenti verso qualsiasi pagina, file o documento indirizzato da una URL;
- Input: Campi e controlli dei form per l'inserimento dei dati da parte degli utenti;

<sup>55</sup> <https://www.figma.com/community/file/1344590104797564988>

{27}------------------------------------------------

- Note, per tutti gli altri dettagli che non rientrano nelle categorie di annotazione

<a id="block-27-2"></a>

Tra queste ultime sono segnalate anche le reference in live code su Bootstrap Italia, di modo tale che:

- risultino chiari i comportamenti a livello di interazione;
- risulti facilitato il riferimento di sviluppo per chi si occuperà di implementare il modello.

Per accedere alle annotazioni di accessibilità, vai al [file del modello ASL sulla Community Figma](https://www.figma.com/community/file/1344590104797564988)<sup>56</sup>, apri il file nelle tue bozze (Drafts) e scorri l'indice laterale fino a trovare il foglio «Accessibilità».

<a id="block-27-5"></a>

## 3.4 Prototipi ad alta fedeltà

I prototipi ad alta fedeltà sono la rappresentazione del prodotto finale e simulando i comportamenti e le interazioni che gli utenti avranno con lo stesso nel corso del suo utilizzo.

[Prototipo del sito ASL versione desktop](https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?node-id=2963-29111&starting-point-node-id=2963%3A29111&scaling=scale-down&mode=design&t=WQqEtf6esyW6n73Q-1)<sup>57</sup>

[Prototipo del sito ASL versione mobile](https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?page-id=856%3A106452&type=design&node-id=1058-24948&viewport=-22%2C847%2C0.09&t=zMGDRi0eYmscDBZW-1&scaling=scale-down&starting-point-node-id=1058%3A24948&show-proto-sidebar=1&mode=design)<sup>58</sup>

[Prototipi mobile dei principali scenari d'uso](#)<sup>59</sup>

## 3.5 Font del modello

Il modello per il sito ASL utilizza i [font dello \[UI Kit di Designers Italia\]\(#\)<sup>6</sup>](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/doc/user-interface/il-disegno-di-un-interfaccia-e-lo-ui-kit.html#la-tipografia)0, ovvero Titillium Web, Roboto Mono e il Lora.

Tutti questi typeface sono rilasciati con licenza SIL Open Font License e sono scaricabili gratuitamente da [Google Fonts](https://fonts.google.com/)<sup>61</sup>.

---

<sup>56</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>57</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?node-id=2963-29111&starting-point-node-id=2963%3A29111&scaling=scale-down&mode=design&t=WQqEtf6esyW6n73Q-1>

<sup>58</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?page-id=856%3A106452&type=design&node-id=1058-24948&viewport=-22%2C847%2C0.09&t=zMGDRi0eYmscDBZW-1&scaling=scale-down&starting-point-node-id=1058%3A24948&show-prototype-sidebar=1&mode=design>

<sup>59</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?type=design&node-id=3208-47773&t=eKr9BEN2co0uYTG9-1&scaling=contain&page-id=3208%3A47772&starting-point-node-id=3208%3A47773&mode=design>

<sup>60</sup> <https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/doc/user-interface/il-disegno-di-un-interfaccia-e-lo-ui-kit.html#la-tipografia>

<sup>61</sup> <https://fonts.google.com/>

{28}------------------------------------------------

<a id="block-28-0"></a>

# CAPITOLO 4

<a id="block-28-1"></a>

## --- Ricerca e progettazione ---

<a id="block-28-2"></a>

Abbiamo progettato il modello sulla base di un'estensiva ricerca qualitativa con tutti gli attori coinvolti nell'ambito sanitario: enti, fornitori, in-house e cittadini. Grazie a interviste, focus group e sessioni di validazione, abbiamo tenuto conto di tutte le necessità per creare un modello funzionale e standardizzato, ma abbastanza flessibile da poter essere adattato a diverse realtà sanitarie.

---

## 4.1 Benchmark

L'obiettivo dell'attività di benchmark è stato individuare le buone pratiche di esperienza d'uso dei siti informativi delle ASL, ma anche di altre tipologie di touchpoint in ambito sanitario, sia in termini di organizzazione dei contenuti che di flussi di navigazione.

È stata effettuata un'esplorazione della situazione attuale a livello nazionale, prendendo in considerazione i siti di enti appartenenti alle regioni del nord, centro, sud e isole, individuando una decina di casi studio che sono stati poi analizzati più approfonditamente.

Ciò ha consentito di ottenere un prospetto delle sezioni e dei contenuti che costituiscono i siti delle ASL, di come possono essere organizzate e nominate, ma anche spunti per soluzioni progettuali relative alla navigazione trasversale e all'organizzazione degli elementi in pagina.

## 4.2 Interviste con gli stakeholder

L'obiettivo è stato comprendere gli aspetti relativi all'erogazione dei servizi informativi in ambito sanitario, come la realizzazione, implementazione e gestione dei siti, sia dal punto di vista amministrativo-burocratico, che delle infrastrutture tecnologiche esistenti (ad esempio, banche dati, sistemi di prenotazione e pagamento, Fascicolo Sanitario Elettronico, etc.).

Abbiamo coinvolto, in un'intervista di circa un'ora, figure appartenenti ad 11 diverse organizzazioni, principalmente afferenti all'ambito IT e della comunicazione, in modo che il panel fosse rappresentativo di una varietà di situazioni, perseguendo diversità in termini di: posizione geografica della ASL, stato dell'arte del sito attuale, modalità di gestione

{29}------------------------------------------------

dei servizi IT ed esperienza pregressa. Inoltre, dato lo stretto legame tra le ASL e le Regioni, abbiamo svolto anche un focus group di circa 2 ore.

Così abbiamo raccolto informazioni sulle dinamiche sottostanti alla realizzazione, implementazione e gestione dei siti delle ASL, sia dal punto di vista amministrativo che tecnico. Ma, soprattutto, abbiamo dedotto la percezione del valore di un modello standard, intercettando necessità e potenziali criticità rispetto alla diffusione del modello e all'utilizzo degli strumenti a supporto.

<a id="block-29-3"></a>

Abbiamo poi individuato le caratteristiche principali che un modello dovrebbe avere per far sì che le ASL siano spronate ad adottarlo:

- Semplicità nella migrazione e gestione dei contenuti;
- Facilità e flessibilità nell'implementazione;
- Maggiore qualità dell'esperienza erogata al cittadino;
- Chiarezza e agevolezza nell'avere un sito conforme alla norma.

<a id="block-29-5"></a>

## 4.3 Interviste con i cittadini

Obiettivo della ricerca è stato quello di raccogliere informazioni utili a mappare:

- I bisogni informativi (orari, indicazioni, informazioni di carattere generico o specifico) cui rispondono i siti;
- I bisogni operativi (transazioni, prenotazioni, consultazioni) cui rispondono i siti;
- I relativi scenari d'uso;
- I modelli mentali collegati all'interazione tra utenti e siti ASL.

La ricerca, sfruttando il metodo di intervista (condotta da remoto), ha coinvolto un totale di 20 persone su tutto il territorio nazionale (Nord, Centro, Sud, Isole) dividendo il campione in base a dei criteri minimi comuni quali:

- Frequenza di utilizzo dei siti ASL;
- Cultura digitale;
- Genere;
- Area geografica di residenza/domicilio;
- Età.

## 4.4 User personas

L'obiettivo delle personas è rappresentare le macro-categorie di utenza individuate attraverso la ricerca. Questi profili sono stati utili per le scelte progettuali in base alle necessità e alle esigenze degli utenti.

A ogni persona sono state assegnate delle informazioni identificative (nome, genere, età, livello di competenze digitali) e una breve sintesi che contestualizza le loro esigenze e il loro approccio nell'utilizzo del sito di una ASL.

Le user personas individuate sono state 7 e servono a rappresentare le seguenti macro-categorie di utenti:

- Comuni cittadini che hanno diritto ai servizi erogati dal Servizio Sanitario Nazionale (SSN);
- Caregiver, persone che prestano cura a familiari o ad individui anziani, disabili o malati;
- Imprenditori che possono usufruire dei servizi ASL per ciò che riguarda la propria attività;
- Operatori sanitari che possono essere interessati a concorsi indetti dalle ASL.

{30}------------------------------------------------

<a id="block-30-1"></a>

## 4.5 Scenari d'uso

La fase di ricerca qualitativa ci ha anche permesso di definire un set minimo di scenari d'uso del sito della ASL.

L'obiettivo di questa attività è stato definire gli scopi per cui i cittadini utilizzano più frequentemente il sito di una ASL, in modo da progettare una struttura e una navigazione del modello che risponde ai bisogni informativi degli utenti.

Abbiamo elaborato gli scenari in modo da rappresentare le motivazioni per cui le diverse personas individuate si trovano ad interagire con il sito, a visitare determinate sezioni e a cercare certe informazioni. Questo ci ha permesso di prioritizzare la progettazione delle principali sezioni, contenuti e interazioni del modello.

<a id="block-30-5"></a>

Gli scenari individuati sono:

- Scegliere o cambiare il medico di base;
- Cercare informazioni sulle strutture appartenenti alla propria ASL di riferimento;
- Accedere ai servizi online della propria ASL/Regione;
- Cercare un percorso di cura o assistenza;
- Cercare le informazioni su come ottenere un'esenzione;
- Cercare le informazioni su una campagna di screening e prevenzione;
- Cercare informazioni riguardanti certificazioni e obblighi in materia di igiene;
- Cercare i concorsi e i bandi attivi presso l'ASL di riferimento;
- Cercare informazioni sullo stato d'affollamento in tempo reale del Pronto Soccorso.

<a id="block-30-7"></a>

Di questi scenari sono poi stati realizzati i prototipi interativi da utilizzare per effettuare i test di usabilità.

## 4.6 Progettazione dell'architettura

L'obiettivo dell'architettura dell'informazione è definire lo scheletro di base che costituirà il sito. Nel caso del modello, è essenziale per dare indicazioni chiare agli enti sulle sezioni in cui è diviso il sito, la gerarchia dei contenuti sulle pagine di dettaglio e le tassonomie per classificare i contenuti.

Sulla base delle necessità informative degli utenti emerse dalla ricerca, abbiamo strutturato l'alberatura del modello, individuato le sezioni principali in cui è diviso il sito, definito le nomenclature e le voci della navigazione di primo e secondo livello, modellizzato le relative tipologie di pagine e organizzato i contenuti all'interno di esse, stilato alcune tassonomie utili alla classificazione dei contenuti.

Dopo aver definito questa prima bozza, abbiamo svolto una sessione di co-progettazione con gli stakeholder, rappresentanti di enti e fornitori tecnologici. I partecipanti - divisi in gruppi di lavoro misti - hanno ragionato nella prospettiva delle diverse personas sui diversi scenari d'uso, per revisionare i percorsi di navigazione possibili per raggiungere gli obiettivi informativi, individuare criticità, opportunità di miglioramento, e aumentare il livello di dettaglio.

I risultati di questa attività hanno permesso di informare le successive iterazioni sull'architettura del modello fino al raggiungimento della struttura definitiva.

## 4.7 Prototipi a media definizione

Dopo aver definito la struttura e i contenuti delle principali pagine del modello, abbiamo creato i prototipi mid-fi dei principali scenari d'uso, protipando le schermate di tutte le pagine necessarie a rappresentare un flusso di interazione ipotetico che un utente svolge per raggiungere un determinato obiettivo.

{31}------------------------------------------------

I prototipi mid-fi mostrano concretamente i flussi di operazioni che vengono svolte per portare a termine i compiti desiderati. La media definizione degli elementi di interfaccia permette di concentrarsi sulle operazioni e sull'idoneità delle strutture ad ospitare i contenuti previsti, invece che sull'aspetto estetico del sito.

<a id="block-31-2"></a>

Sono stati realizzati due tipi di prototipi interattivi, uno versione desktop e uno mobile, per validare le scelte progettuali con gli utenti. I prototipi mid-fi sono poi stati evoluti in prototipi ad alta definizione da includere tra le risorse del modello per enti e fornitori come esempi di ipotetiche applicazioni del modello.

## 4.8 Test di usabilità

I prototipi mid-fi hanno rappresentato la base per effettuare dei test di usabilità con un campione di 20 utenti reclutati a Roma, città in cui è stata effettuata l'attività di indagine nei giorni 18, 19 e 20 ottobre 2023.

Gli utenti reclutati, seppur in larga maggioranza residenti o domiciliati a Roma, erano riferibili ad ASL diverse tra loro e distribuite lungo il territorio nazionale (tra i reclutati erano presenti studenti e lavoratori fuori sede).

Per il resto delle caratteristiche il campione è stato aderente con i criteri adottati anche in fase di ricerca.

{32}------------------------------------------------

<a id="block-32-0"></a>

# CAPITOLO 5

## --- Allegati tecnici ---

## Architettura dell'informazione

- [Grafico dell'alberatura \(PDF 4.3MB\)](#)<sup>62</sup>
- [Documento di architettura dell'informazione \(Versione ODS 165KB\)](#)<sup>63</sup>
- [Documento di architettura dell'informazione \(Versione XLSX 398KB\)](#)<sup>64</sup>

## Interfaccia

- [UI kit ASL](https://www.figma.com/community/file/1344590104797564988)<sup>65</sup> - comprende i componenti, i layout hi-fi delle principali pagine del modello, la guida alla personalizzazione delle interfacce del modello e le annotazioni di accessibilità
- [Sito demo desktop](https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?node-id=2963-29111&starting-point-node-id=2963%3A29111&scaling=scale-down&mode=design&t=WQqEtf6esyW6n73Q-1)<sup>66</sup>
- [Sito demo mobile](https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?page-id=856%3A106452&type=design&node-id=1058-24948&viewport=-22%2C847%2C0.09&t=IaHrkJ8muOky4xsW-1&scaling=scale-down&starting-point-node-id=1058%3A24948&show-proto-sidebar=1&mode=design)<sup>67</sup>
- [Prototipi mobile dei principali scenari d'uso](#)<sup>68</sup>

---

<sup>62</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Alberatura-ModelloASL-DesignersItalia.pdf>

<sup>63</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.ods>

<sup>64</sup> <https://designers.italia.it/files/resources/modelli/aziende-sanitarie-locali/Architettura-ModelloASL-DesignersItalia.xlsx>

<sup>65</sup> <https://www.figma.com/community/file/1344590104797564988>

<sup>66</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?node-id=2963-29111&starting-point-node-id=2963%3A29111&scaling=scale-down&mode=design&t=WQqEtf6esyW6n73Q-1>

<sup>67</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?page-id=856%3A106452&type=design&node-id=1058-24948&viewport=-22%2C847%2C0.09&t=laHrkJ8muOky4xsW-1&scaling=scale-down&starting-point-node-id=1058%3A24948&show-proto-sidebar=1&mode=design>

<sup>68</sup> <https://www.figma.com/proto/wsLgwYpYrd9yS9Tqx0Wkjp/ASL---Modello-sito?type=design&node-id=3208-47773&t=eKr9BEN2co0uYTg9-1&scaling=contain&page-id=3208%3A47772&starting-point-node-id=3208%3A47773&mode=design>

{33}------------------------------------------------



{34}------------------------------------------------

<a id="block-34-1"></a>

## --- Adesione al modello ASL ---

In questa sezione trovi i criteri di adesione che guidano alla corretta adozione del modello, una serie di raccomandazioni progettuali per migliorare l'esperienza utente e le indicazioni di obblighi legali.

La qualità di un sito web, tuttavia, non prescinde da tutte le buone pratiche che rendono il sito utile, affidabile, facile da usare e accessibile a tutte le persone: completezza e accuratezza delle informazioni, chiarezza di linguaggio, leggibilità dei testi, formattazione appropriata, qualità delle immagini e dei contenuti multimediali.

## 6.1 Criteri di adesione

I criteri di adesione guidano alla corretta adozione del modello in termini di qualità ed esperienza utente.

#### **C1 - Libreria di elementi di interfaccia**

Il sito utilizza la libreria Bootstrap Italia in una versione uguale o superiore alla 2.8.

#### **C2 - Coerenza dell'utilizzo dei font (librerie di caratteri)**

Il sito utilizza i font Titillium, Lora e Roboto Mono, come indicato nel [fondamento “Tipografia”](https://designers.italia.it/design-system/fondamenti/tipografia/)<sup>69</sup> del design system .italia.

#### **C3 - Voci di menù di primo livello**

Il sito presenta almeno 3 delle voci di menù di primo livello indicate:

- “Servizi e prestazioni”
- “Come fare per”
- “Strutture”
- “[tipo di organizzazione] comunica” (ad esempio, “ASL comunica”)

#### **C4 – Pagine di secondo livello**

Almeno il 50% delle pagine di secondo livello indicate devono essere presenti nel sito con i titoli richiesti.

---

<sup>69</sup> <https://designers.italia.it/design-system/fondamenti/tipografia/>

{35}------------------------------------------------

Per la sezione “Servizi e prestazioni”, sono:

- Visite specialistiche
- Esami e analisi
- Percorsi di cura e assistenza
- Prevenzione e vaccini
- Igiene pubblica e animali
- Interventi di chirurgia
- Fascicolo sanitario elettronico
- Pronto soccorso

Per la sezione “Strutture”, sono:

- Ospedali
- Ambulatori e poliambulatori
- Laboratori di analisi
- Medici di base e pediatri
- Altre strutture territoriali

Per la sezione “[tipo di organizzazione] comunica”, sono:

- Notizie
- Comunicati stampa
- Eventi
- Concorsi
- Bandi di gara

#### **C5 - Completezza del sito**

Il sito deve utilizzare almeno i content type:

- Struttura
- Servizio
- Come fare per
- Unità organizzativa
- Persona

#### **C6 – Completezza delle pagine**

Le pagine del sito che utilizzano i content type obbligatori (come da criterio C5) devono includere almeno gli attributi indicati.

Per il content type Struttura:

- Nome della struttura
- Descrizione breve
- Dove (Indirizzo + apri in mappa)
- Come accedere (modalità di accesso con indicazioni di accessibilità)

{36}------------------------------------------------

- Orari di apertura
- Contatti
- Servizi e prestazioni
- Ultimo aggiornamento dei contenuti

Per il content type Servizio:

- Nome del servizio
- Descrizione breve
- Cosa serve
- Accedi al servizio
- Dove (strutture dove viene erogato il servizio con indirizzo in vista)
- Orari del servizio
- Contatti
- Ultimo aggiornamento dei contenuti
- 

Per il content type Come fare per:

- Titolo del Come fare per
- Descrizione breve
- Panoramica
- Come fare (passi della procedura)
- Ultimo aggiornamento dei contenuti

Per il content type Unità organizzativa:

- Nome dell'unità organizzativa
- Descrizione breve
- Competenze
- Dove (indirizzo + apri in mappa)
- Orari di apertura
- Contatti
- Ultimo aggiornamento dei contenuti

Per il content type Persona:

- Nome e cognome
- Sottotitolo (incarico principale)
- Competenze
- Contatti
- Strutture in cui opera
- Ultimo aggiornamento dei contenuti

{37}------------------------------------------------

<a id="block-37-1"></a>

## 6.2 Raccomandazioni aggiuntive

Per migliorare ulteriormente l'esperienza degli utenti, vengono indicate raccomandazioni aggiuntive basate su buone pratiche di progettazione.

#### **R1 - Richiesta di assistenza / contatti**

<a id="block-37-4"></a>

All'interno del sito, nelle pagine riguardanti i servizi offerti dall'Ente, sono specificati i contatti per l'ufficio preposto all'erogazione del servizio.

### **R2 - Richiesta di assistenza**

Il sito contiene una sezione per richiedere assistenza.

### **R3 - Domande frequenti**

Il sito contiene una sezione dedicata alle domande più frequenti (FAQ).

#### **R4 - Valutazione dell'esperienza d'uso, chiarezza delle pagine informative**

Il sito consente al cittadino di fornire una valutazione della chiarezza di ogni pagina di primo livello, secondo livello e pagina foglia.

## 6.3 Norme obbligatorie

Sono presenti, inoltre, norme, leggi e linee guida che vanno rispettate nella progettazione, realizzazione e implementazione di siti e servizi pubblici digitali. Il rispetto di queste norme è necessario per la creazione di siti e servizi conformi da un punto di vista legale.

### **N1 - Dichiarazione di accessibilità**

Il sito espone la dichiarazione di accessibilità in conformità al modello e alle linee guida rese disponibili da AgID in ottemperanza alla normativa vigente in materia di accessibilità.

### **N2 - Certificato https**

Il sito utilizza un certificato https valido e attivo.

### **N3 - Informativa privacy**

Il sito presenta l'informativa sul trattamento dei dati personali, secondo quanto previsto dalla normativa vigente.

### **N4 - Cookie**

Il sito presenta cookie tecnici in linea con la normativa vigente.

### **N5 - Licenza e attribuzione**

Il sito pubblica dati, documenti e informazioni con licenza aperta comunicandolo come richiesto dalla normativa vigente.

### **Testi normativi ufficiali**

Oltre alle caratteristiche evidenziate sopra, si rimanda ai rispettivi testi normativi ufficiali, che contengono ulteriori obblighi legali:

- [Linee guida di design per i siti internet e i servizi digitali della PA<sup>7</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/index.html)0
- [Linee Guida “Acquisizione e riuso di software per le pubbliche amministrazioni”<sup>7</sup>](https://www.agid.gov.it/it/design-servizi/riuso-open-source/linee-guida-acquisizione-riuso-software-pa)1

---

<sup>70</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/index.html>

<sup>71</sup> <https://www.agid.gov.it/it/design-servizi/riuso-open-source/linee-guida-acquisizione-riuso-software-pa>

{38}------------------------------------------------

- Codice dell' Amministrazione Digitale (CAD)<sup>72</sup>
- Linee guida sull'accessibilità degli strumenti informatici<sup>73</sup>

### Norme sulla sicurezza

I siti e servizi devono utilizzare la versione del protocollo TLS 1.2 o superiori per garantire sicurezza nello scambio di dati:

- [Raccomandazioni AGID in merito allo standard Transport Layer Security \(TLS\)<sup>7</sup>](https://cert-agid.gov.it/wp-content/uploads/2020/11/AgID-RACCSECTLS-01.pdf)4

#### Norme sulla privacy e gestione dei dati

I siti e i servizi devono richiedere e tracciare soltanto le informazioni strettamente necessarie degli utenti e presentare le relative informative privacy e cookie:

- [Linee guida cookie e altri strumenti di tracciamento - 10 giugno 2021 del Garante per la protezione dei dati](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876) [personali<sup>7</sup>](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)5
- [Normativa GDPR \(Artt. 13 e 14, Reg. UE n. 679/2016\)<sup>7</sup>](https://www.garanteprivacy.it/regolamentoue)6
- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.2. Affidabilità, trasparenza e sicurezza<sup>7</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#affidabilita-trasparenza-e-sicurezza)7
- Codice dell' Amministrazione Digitale (CAD) - Capo V: DATI DELLE PUBBLICHE AMMINISTRAZIONI (IDENTITÀ DIGITALI, ISTANZE E SERVIZI ON-LINE)<sup>78</sup>

#### Norme sulla trasparenza

I siti devono presentare, in un'unica sezione, tutte le informazioni sulle attività dell'amministrazione:

- [Amministrazione trasparente \(Decreto legislativo 14 marzo 2013, n. 33\)<sup>7</sup>](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33!vig=)9

### Norme sulla progettazione dei siti

I siti e servizi, inclusi i contenuti e i documenti, devono raggiungere il livello AA delle WCAG 2.1 e presentare una dichiarazione di accessibilità:

- Linee guida sull'accessibilità degli strumenti informatici - 2.2. Web<sup>80</sup>
- [Linee guida di design per i siti internet e i servizi digitali della PA - 2.3. Documenti non web<sup>8</sup>](https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/requisiti-tecnici-accessibilita-strumenti-informatici.html#documenti-non-web)1
- [Linee guida di design per i siti internet e i servizi digitali della PA - 4. Dichiarazione di accessibilità e](https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/dichiarazione-accessibilita-e-pubblicazione-obiettivi-accessibilita.html#dichiarazione-di-accessibilita-e-pubblicazione-obiettivi-di-accessibilita) [pubblicazione obiettivi di accessibilità<sup>8</sup>](https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/dichiarazione-accessibilita-e-pubblicazione-obiettivi-accessibilita.html#dichiarazione-di-accessibilita-e-pubblicazione-obiettivi-di-accessibilita)2
- [Linee guida AGID per la dichiarazione di accessibilità<sup>8</sup>](https://www.agid.gov.it/it/design-servizi/accessibilita/dichiarazione-accessibilita)3
- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.3. Semplicità di consultazione ed](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#semplicita-di-consultazione-ed-esperienza-d-uso) esperienza d'uso<sup>84</sup>
- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.4. Monitoraggio dei servizi<sup>8</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#monitoraggio-dei-servizi)5

<sup>72</sup> <https://www.agid.gov.it/agenzia/strategia-quadro-normativo/codice-amministrazione-digitale>

<sup>73</sup> <https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/index.html>

<sup>74</sup> <https://cert-agid.gov.it/wp-content/uploads/2020/11/AgID-RACCSECTLS-01.pdf>

<sup>75</sup> <https://www.garantepprivacy.it/home/docweb/-/docweb-display/docweb/9677876>

<sup>76</sup> <https://www.garantepprivacy.it/regolamentoue>

<sup>77</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#affidabilita-trasparenza-e-sicurezza>

<sup>78</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/\\_rst/capo\\_V.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_V.html)

<sup>79</sup> <https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33!vig=>

<sup>80</sup> <https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/requisiti-tecnici-accessibilita-strumenti-informatici.html#web>

<sup>81</sup> <https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/requisiti-tecnici-accessibilita-strumenti-informatici.html#documenti-non-web>

<sup>82</sup> <https://docs.italia.it/AgID/documenti-in-consultazione/lg-accessibilita-docs/it/stabile/dichiarazione-accessibilita-e-pubblicazione-obiettivi-accessibilita.html#dichiarazione-di-accessibilita-e-pubblicazione-obiettivi-di-accessibilita>

<sup>83</sup> <https://www.agid.gov.it/it/design-servizi/accessibilita/dichiarazione-accessibilita>

<sup>84</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#semplicita-di-consultazione-ed-esperienza-d-uso>

<sup>85</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#monitoraggio-dei-servizi>

{39}------------------------------------------------

I siti e servizi devono prevedere un'esperienza d'uso comune alle diverse procedure on line, garantire l'accesso ai servizi digitali della PA con i sistemi di autenticazione previsti e consentire agli utenti di effettuare i pagamenti online mediante gli strumenti di pagamento previsti dal CAD:

- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.6. Integrazione delle piattaforme abilitanti<sup>8</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#integrazione-delle-piattaforme-abilitanti)6
- Codice dell'Amministrazione Digitale (CAD) - Art. 5 Effettuazione di pagamenti con modalità informatiche<sup>87</sup>
- Codice dell'Amministrazione Digitale (CAD) - Art. 64 Sistema pubblico per la gestione delle identità digitali e [modalità di accesso ai servizi erogati in rete dalle pubbliche amministrazioni<sup>8</sup>](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_V-sezione_III-articolo_64.html)8

#### Norme sull'implementazione dei siti

I contenuti di siti e servizi devono essere associati a una licenza aperta:

- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.7. Licenze<sup>8</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#licenze)9

Le pubbliche amministrazioni titolari di soluzioni e programmi informatici realizzati su specifiche indicazioni del committente pubblico, hanno l'obbligo di rendere disponibile il relativo codice sorgente, completo della documentazione e rilasciato in repertorio pubblico sotto licenza aperta, in uso gratuito ad altre pubbliche amministrazioni o ai soggetti giuridici che intendano adattarli alle proprie esigenze:

- [Linee guida su acquisizione e riuso di software per le pubbliche amministrazioni - 3.5.2 Licenze per il software](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/riuso-software/licenze-aperte-e-scelta-di-una-licenza.html#licenze-per-il-software-aperto) [aperto<sup>9</sup>](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/riuso-software/licenze-aperte-e-scelta-di-una-licenza.html#licenze-per-il-software-aperto)0
- Codice dell'Amministrazione Digitale - Art. 69 Riuso delle soluzioni e standard aperti<sup>91</sup>
- Linee guida AGID per l'acquisizione e il riuso software PA<sup>92</sup>
- [Art. 52 d.lgs. 82/2005 del CAD<sup>9</sup>](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/stabile/_rst/capo_V-sezione_I-articolo_52.html)3
- [Art. 7, comma 1, D.Lgs. n. 33/2013<sup>9</sup>](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33)4
- [D.lgs. n. 36/2006<sup>9</sup>](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2006-01-24;36!vig=)5

In base al principio del once-only, il sito e i servizi non dovrebbero chiedere agli utenti informazioni già fornite, ma riutilizzare internamente le informazioni già comunicate dall'utente attraverso l'integrazione con le piattaforme previste:

- [Linee guida per accesso telematico ai servizi della Pubblica Amministrazione - 5.2. Obiettivi di semplificazione](https://docs.italia.it/AgID/documenti-in-consultazione/lg-io-docs/it/bozza/doc/00_LG%20IO/05_realizzazione-servizi.html#obiettivi-di-semplificazione-e-principio-di-once-only-e-mobile-first) e principio di "once-only" e "mobile-first"<sup>96</sup>
- [Linee guida di design per i siti internet e i servizi digitali della PA - 4.6. Integrazione delle piattaforme abilitanti<sup>9</sup>](https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#integrazione-delle-piattaforme-abilitanti)7
- Codice dell'Amministrazione Digitale (CAD) - Art. 64 Sistema pubblico per la gestione delle identità digitali e [modalità di accesso ai servizi erogati in rete dalle pubbliche amministrazioni<sup>9</sup>](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_V-sezione_III-articolo_64.html)8
- Codice dell'Amministrazione Digitale (CAD) - Art. 73 Sistema pubblico di connettività (SPC)<sup>99</sup>

<sup>86</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#integrazione-delle-piattaforme-abilitanti>

<sup>87</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/\\_rst/capo\\_I-sezione\\_II-articolo\\_5.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_I-sezione_II-articolo_5.html)

<sup>88</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/\\_rst/capo\\_V-sezione\\_III-articolo\\_64.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_V-sezione_III-articolo_64.html)

<sup>89</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#licenze>

<sup>90</sup> <https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/riuso-software/licenze-aperte-e-scelta-di-una-licenza.html#licenze-per-il-software-aperto>

<sup>91</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/stabile/\\_rst/capo\\_VI-articolo\\_69.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/stabile/_rst/capo_VI-articolo_69.html)

<sup>92</sup> <https://www.agid.gov.it/it/design-servizi-riuso-open-source/linee-guida-acquisizione-riuso-software-pa>

<sup>93</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/stabile/\\_rst/capo\\_V-sezione\\_I-articolo\\_52.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/stabile/_rst/capo_V-sezione_I-articolo_52.html)

<sup>94</sup> <https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2013-03-14;33>

<sup>95</sup> <https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2006-01-24;36!vig=>

<sup>96</sup> [https://docs.italia.it/AgID/documenti-in-consultazione/lg-io-docs/it/bozza/doc/00\\_LG%20IO/05\\_realizzazione-servizi.html#obiettivi-di-semplificazione-e-principio-di-once-only-e-mobile-first](https://docs.italia.it/AgID/documenti-in-consultazione/lg-io-docs/it/bozza/doc/00_LG%20IO/05_realizzazione-servizi.html#obiettivi-di-semplificazione-e-principio-di-once-only-e-mobile-first)

<sup>97</sup> <https://docs.italia.it/italia/design/lg-design-servizi-web/it/versione-corrente/requisiti.html#integrazione-delle-piattaforme-abilitanti>

<sup>98</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/\\_rst/capo\\_V-sezione\\_III-articolo\\_64.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_V-sezione_III-articolo_64.html)

<sup>99</sup> [https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/\\_rst/capo\\_VIII-articolo\\_73.html](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_VIII-articolo_73.html)

{40}------------------------------------------------

- Piano Triennale per l'informatica nella PA - Capitolo 5, Interoperabilità<sup>100</sup>

---

<sup>100</sup> <https://www.agid.gov.it/it/agenzia/piano-triennale>