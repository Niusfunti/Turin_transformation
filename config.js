// config.js — edit this file to customize the story, map views, and featured cases.

const CONFIG = {

  map: {
    // Both maps share the same base style so parks read green and rivers read
    // blue throughout the story. index.html tones the style down for the story
    // map (tuneBasemap) so the status colours stay the loudest thing on screen.
    style:       'https://tiles.openfreemap.org/styles/bright',
    coverStyle:  'https://tiles.openfreemap.org/styles/bright',
    center: [7.6715, 45.0636],
    coverCenter: [7.47, 45.0636],  // 0.2° west of Turin center so city sits in the transparent right zone
    zoom: 11.5,
    minZoom: 9,
    maxZoom: 18,
    coverZoom: 10.8
  },

  // Status color palette — used both in the map layers and the legend.
  //
  // Exactly FOUR colours, one per pipeline stage. The transitional variants
  // (demolition started, and the two "partially" labels, which together cover
  // three cells in the whole dataset) all take their parent stage's colour, so
  // the reader never has to decode a fifth or sixth shade. Grey is not a status
  // colour — it is the neutral for the two no-activity categories.
  //
  // Chosen against the natural basemap (green parks, blue water): no status
  // sits in the basemap's hue bands, so a coloured area never reads as "a park"
  // or "the river". Validated all-pairs against the beige map surface:
  // colour-blind ΔE 11.3 (target 8), normal-vision ΔE 18.4 (floor 15). Green
  // and blue are deliberately absent — keeping a green "completed" alongside
  // the bronze/orange pair drops CVD ΔE to ~7.
  //
  // The gold is the one colour under the 3:1 map-contrast bar (1.8:1). It is
  // shipped that way on purpose: the dark outline that would fix it made the
  // status shout over the other three (see DARK_OUTLINE_STATUSES in index.html,
  // currently empty). Large areas read fine; small points are the thing to
  // watch if the palette is ever revisited.
  statusColors: {
    'on hold':                                                '#7a4208',  // bronze
    'procedure in progress':                                  '#d8b021',  // gold
    'under construction':                                     '#e55900',  // orange
    'under construction (demolition started)':                '#e55900',
    'partially under construction':                           '#e55900',
    'partially under construction - partially completed':     '#e55900',
    'completed':                                              '#7052c8',  // violet
    'removed':                                                '#847f78',  // neutral, not a stage
    'unknown':                                                '#b6afa6',  // neutral, not a stage
  },

  // The same statuses as they appear on the site's DARK panels — legend, pills,
  // stat chips, trajectory chips, timeline bar, popup. statusColors above is
  // tuned for the pale basemap, where dark values read best; on the navy UI
  // those same values all but vanish (bronze is 1.9:1 on #00284b, violet
  // 2.7:1). Only the colours that need it are listed — anything missing falls
  // through to statusColors, so the two tables cannot drift apart. The gold
  // needs no variant: it is the brightest thing on navy at 7.2:1.
  statusColorsOnDark: {
    'on hold':    '#a9713f',   // bronze is 1.9:1 on navy
    'completed':  '#9a83e0',   // violet is 2.7:1 on navy
  },

  // Curated legend — which statuses appear in the on-map legend, and their labels.
  // Colors are pulled from statusColors above, so they always stay in sync.
  legend: [
    { status: 'on hold',                label: 'On hold' },
    { status: 'procedure in progress',  label: 'Procedure in progress' },
    { status: 'under construction',     label: 'Under construction' },
    { status: 'completed',              label: 'Completed' },
  ],

  // Curated "pipeline" pills shown in the status step (a narrative subset of legend)
  pipeline: ['on hold', 'procedure in progress', 'under construction', 'completed'],

  // Chronological snapshots in the data (labelIt = Italian label for the language toggle)
  periods: [
    { key: 'july_2020',      label: 'July 2020',      labelIt: 'Luglio 2020' },
    { key: 'october_2021',   label: 'October 2021',   labelIt: 'Ottobre 2021' },
    { key: 'july_2022',      label: 'July 2022',      labelIt: 'Luglio 2022' },
    { key: 'december_2022',  label: 'December 2022',  labelIt: 'Dicembre 2022' },
    { key: 'april_2024',     label: 'April 2024',     labelIt: 'Aprile 2024' },
    { key: 'february_2025',  label: 'February 2025',  labelIt: 'Febbraio 2025' },
    { key: 'december_2025',  label: 'December 2025',  labelIt: 'Dicembre 2025' },
  ],

  // Aggregate statistics shown in the stat chips (derived from the data)
  stats: {
    total:        206,
    polygons:     150,
    points:        53,
    lines:          3,
    onHold:        43,
    procedure:     48,
    construction:  51,
    completed:     39,
    removed:       20,
  },

  // ── Internationalisation (English ⇄ Italian) ──────────────────────────────
  // English is the source language and lives inline in index.html. This block
  // holds the Italian overrides plus the label dictionaries used by the
  // dynamically generated UI (legend, pills, chips, popups, period badge).
  //
  //  - i18n.it ........... Italian HTML keyed by the element's data-i18n attribute
  //                        (a missing key falls back to the English in the DOM)
  //  - i18n.statusFull ... full status label per language, keyed by the English
  //                        status *data value* stored in the GeoJSON
  //  - i18n.statusShort .. short status label (trajectory chips)
  //  - i18n.chipLabels ... labels for the stat chips, keyed by a chip key
  //  - i18n.uiText ....... misc programmatic strings (legend title, popup, doc title)
  i18n: {

    // Languages offered by the top-right switcher. First entry is the default.
    languages: [
      { code: 'en', label: 'EN', name: 'English' },
      { code: 'it', label: 'IT', name: 'Italiano' },
    ],

    statusFull: {
      en: {
        'on hold':                                            'On hold',
        'procedure in progress':                              'Procedure in progress',
        'under construction':                                 'Under construction',
        'under construction (demolition started)':            'Under construction (demolition started)',
        'partially under construction':                       'Partially under construction',
        'partially under construction - partially completed': 'Partially under construction – partially completed',
        'completed':                                          'Completed',
        'removed':                                            'Removed',
        'unknown':                                            'Unknown',
      },
      it: {
        'on hold':                                            'In attesa',
        'procedure in progress':                              'Procedimento in corso',
        'under construction':                                 'In cantiere',
        'under construction (demolition started)':            'In cantiere (demolizione iniziata)',
        'partially under construction':                       'Parzialmente in cantiere',
        'partially under construction - partially completed': 'Parzialmente in cantiere – parzialmente completata',
        'completed':                                          'Completato',
        'removed':                                            'Rimosso',
        'unknown':                                            'Sconosciuto',
      },
    },

    statusShort: {
      en: {
        'on hold':               'On hold',
        'procedure in progress': 'Procedure',
        'under construction':    'Construction',
        'completed':             'Completed',
        'removed':               'Removed',
      },
      it: {
        'on hold':               'In attesa',
        'procedure in progress': 'Procedimento',
        'under construction':    'Cantiere',
        'completed':             'Completato',
        'removed':               'Rimosso',
      },
    },

    chipLabels: {
      en: {
        tracked:      'sites tracked',
        onHold:       'on hold',
        procedure:    'in procedure',
        construction: 'under construction',
        completed:    'completed',
        removed:      'removed',
      },
      it: {
        tracked:      'aree monitorate',
        onHold:       'in attesa',
        procedure:    'in procedimento',
        construction: 'in cantiere',
        completed:    'completate',
        removed:      'rimosse',
      },
    },

    uiText: {
      en: {
        legendTitle: 'Project status',
        unknownSite: 'Unknown site',
        visitulLink: 'Visitul.it →',
        landUse:     'Land use',
        docTitle:    'Turin in Transformation — 2020–2025',
        // Aerial before/after evidence section
        evYear2022:  'Winter 2022',
        evYear2025:  'Summer 2025',
        evPending:   'Aerial imagery pending',
        evDrag:      'Drag to compare',
        evDetections:        'Show AI detections',
        evDetectionsPending: 'AI detections coming soon',
        evAerialBtn: '🛰 Aerial before/after',
      },
      it: {
        legendTitle: 'Stato dei progetti',
        unknownSite: 'Area sconosciuta',
        visitulLink: 'Visitul.it →',
        landUse:     'Uso del suolo',
        docTitle:    'Torino in trasformazione — 2020–2025',
        // Aerial before/after evidence section
        evYear2022:  'Inverno 2022',
        evYear2025:  'Estate 2025',
        evPending:   'Ortofoto in arrivo',
        evDrag:      'Trascina per confrontare',
        evDetections:        'Mostra rilevazioni AI',
        evDetectionsPending: 'Rilevazioni AI in arrivo',
        evAerialBtn: '🛰 Ortofoto prima/dopo',
      },
    },

    // Per-site captions for the aerial evidence cards, keyed by site code.
    // tag = short story label; caption = one-line description of the change.
    evidence: {
      en: {
        N193: { tag: 'Before → during', caption: 'An empty field in winter 2022; excavation and construction underway by summer 2025.' },
        N031: { tag: 'During → finishing', caption: 'Under construction in 2022; the former flower market reaches completion by late 2025.' },
        N049: { tag: 'Long build', caption: 'Early groundworks in 2022; the Parco della Salute hospital campus well advanced by 2025.' },
        N067: { tag: 'Stalled build', caption: 'A building shell under active construction in winter 2022; by summer 2025 it still stands unfinished — materials cleared and vegetation reclaiming the surrounding site.' },
        N181: { tag: 'Full pipeline', caption: 'The former Lavazza plot: procedures opened in late 2022, an active build by 2024, recorded complete by early 2025.' },
        N059: { tag: 'Full pipeline', caption: 'Years stuck in procedure through 2022; construction from 2024, and the CSEA site reached completion by the end of 2025.' },
      },
      it: {
        N193: { tag: 'Prima → durante', caption: 'Un campo vuoto nell’inverno 2022; scavi e cantiere avviati entro l’estate 2025.' },
        N031: { tag: 'Durante → conclusione', caption: 'In cantiere nel 2022; l’ex mercato dei fiori raggiunge il completamento entro fine 2025.' },
        N049: { tag: 'Cantiere lungo', caption: 'Primi scavi nel 2022; il campus ospedaliero Parco della Salute ben avanzato nel 2025.' },
        N067: { tag: 'Cantiere fermo', caption: 'Una struttura in costruzione nell’inverno 2022; entro l’estate 2025 resta incompiuta — materiali rimossi e vegetazione che riconquista l’area circostante.' },
        N181: { tag: 'Percorso completo', caption: 'L’ex area Lavazza: iter avviato a fine 2022, cantiere attivo nel 2024, completamento registrato entro inizio 2025.' },
        N059: { tag: 'Percorso completo', caption: 'Anni fermi in iter fino al 2022; cantiere dal 2024, e l’area CSEA raggiunge il completamento entro fine 2025.' },
      },
    },

    // Land-use vocabulary → Italian (English is the raw source token). Keys are
    // lowercase OSM/primary_class tokens and WorldCover labels; comma-separated
    // lists are translated token-by-token in index.html (landUseLabel). A key
    // missing here falls back to the English token.
    landUseTerms: {
      it: {
        'allotments':        'orti urbani',
        'brownfield':        'area dismessa',
        'commercial':        'commerciale',
        'construction':      'cantiere',
        'dog_park':          'area cani',
        'education':         'istruzione',
        'farmland':          'terreno agricolo',
        'farmyard':          'aia',
        'flowerbed':         'aiuola',
        'forest':            'foresta',
        'garages':           'garage',
        'garden':            'giardino',
        'grass':             'prato',
        'greenfield':        'area inedificata',
        'industrial':        'industriale',
        'institutional':     'istituzionale',
        'landfill':          'discarica',
        'meadow':            'prato stabile',
        'military':          'militare',
        'nature_reserve':    'riserva naturale',
        'orchard':           'frutteto',
        'outdoor_seating':   'dehors',
        'park':              'parco',
        'pitch':             'campo sportivo',
        'playground':        'parco giochi',
        'quarry':            'cava',
        'railway':           'ferrovia',
        'recreation_ground': 'area ricreativa',
        'religious':         'religioso',
        'residential':       'residenziale',
        'retail':            'commercio al dettaglio',
        'sports_centre':     'centro sportivo',
        'sports_hall':       'palazzetto dello sport',
        'swimming_pool':     'piscina',
        'track':             'pista',
        'water':             'acqua',
        'wood':              'bosco',
        'built-up':                'area edificata',
        'tree cover':              'copertura arborea',
        'cropland':                'seminativo',
        'grassland':               'prateria',
        'bare/sparse vegetation':  'vegetazione rada',
      },
    },

    // Italian text for the static narrative, cover, outro and footer.
    // Keys match the data-i18n attributes in index.html. HTML is allowed.
    it: {
      // Cover
      'cover.kicker': 'Dati urbani · Torino, Italia · 2020 – 2025',
      'cover.h1':     'Torino in<br>trasformazione',
      'cover.lead':   '206 progetti urbani. Una città monitorata, area per area, mentre tenta di reinventarsi.',
      'cover.scroll': 'Scorri per esplorare',

      // Step 01 — overview
      's1.num': '01 — Il dataset',
      's1.h2':  '206 aree, monitorate dal 2020',
      's1.p1':  'Dal luglio 2020 il progetto <em>Visitul</em> documenta sistematicamente ogni grande area di trasformazione urbana di Torino — ex zone industriali, edifici storici, spazi pubblici in riconversione.',
      's1.p2':  'In sette rilevazioni nell’arco di cinque anni, a ogni area è stato assegnato uno stato. Insieme compongono il ritratto di una città in lento e disomogeneo cambiamento.',

      // Step 02 — status
      's2.num': '02 — I colori',
      's2.h2':  'Quattro fasi del cambiamento',
      's2.p1':  'Ogni area attraversa — o no — un percorso:',
      's2.p2':  'La mappa mostra lo stato di ogni area monitorata a dicembre 2025. Gran parte della città è ancora in attesa.',

      // Step 03 — on hold
      's3.num': '03 — L’attesa',
      's3.h2':  '<span class="big-num">43</span> aree in attesa',
      's3.p1':  'Circa un quinto delle aree monitorate resta «in attesa» a dicembre 2025 — bloccate tra pianificazione, contenziosi sulla proprietà o stallo politico.',
      's3.p2':  'Alcune risultano ferme fin dalla primissima rilevazione del luglio 2020: cinque anni senza movimenti.',

      // Step 04 — procedure
      's4.num': '04 — L’iter',
      's4.h2':  '<span class="big-num">48</span> nella macchina burocratica',
      's4.p1':  'Un numero quasi pari sta attraversando iter burocratici — permessi, valutazioni ambientali, consultazioni pubbliche. Sono partite, ma nulla è ancora costruito.',
      's4.p2':  'Nell’urbanistica italiana questa fase può durare anni. Alcune aree vi entrano ed escono ripetutamente.',

      // Step 05 — construction
      's5.num': '05 — Il cantiere',
      's5.h2':  '<span class="big-num">51</span> in cantiere',
      's5.p1':  'Il gruppo più numeroso a dicembre 2025: aree dove i lavori sono fisicamente iniziati — gru, ponteggi, scavi in tutta la città.',
      's5.p2':  'È il numero di cantieri più alto fra tutte e sette le rilevazioni: un’impennata tardiva dopo anni di ritardi procedurali.',

      // Step 06 — completed
      's6.num': '06 — Il traguardo',
      's6.h2':  'Solo <span class="big-num">39</span> completate',
      's6.p1':  'In cinque anni e 206 aree monitorate, solo 39 hanno raggiunto il completamento. La trasformazione urbana, si scopre, è un esercizio di pazienza.',
      's6.p2':  'Altre venti aree sono state rimosse dal monitoraggio — demolite, riconvertite o con la trasformazione abbandonata.',

      // Step 07 — July 2020
      's7.num': '07 — Luglio 2020',
      's7.h2':  'Dove tutto è iniziato',
      's7.p1':  'Nella prima rilevazione la mappa è quasi interamente grigia. L’anno della pandemia: quasi ogni area documentata, quasi nessuna in movimento. Torino aveva dato un nome ai suoi problemi; non aveva ancora iniziato a risolverli.',

      // Step 08 — July 2022
      's8.num': '08 — Luglio 2022',
      's8.h2':  'La svolta',
      's8.p1':  'Due anni dopo, l’ambra inizia a diffondersi — iter avviati, permessi depositati. Qualche macchia arancione segnala cantieri davvero partiti. La ripresa post-pandemica ha portato nuova energia agli uffici di pianificazione.',

      // Step 09 — December 2025
      's9.num': '09 — Dicembre 2025',
      's9.h2':  'La città oggi',
      's9.p1':  'A fine 2025 domina l’arancione — gru e ponteggi in tutta l’area metropolitana. Ma il grigio resta ostinatamente presente. Non tutte le aree hanno trovato il loro slancio.',

      // Intro divider — Seen from above (before the deep-dives)
      'ia.kicker': 'Visto dall’alto',
      'ia.h2':     'Il dato messo alla prova del terreno',
      'ia.p1':     'Le rilevazioni dicono qual è lo stato di ogni area sulla carta. Per le aree che seguono facciamo un passo in più — affianchiamo a quel percorso quinquennale la vista dall’alto, l’inverno 2022 a confronto con l’estate 2025, per vedere il cambiamento sul terreno stesso.',
      'ia.note':   'Presto: le rilevazioni di un modello di intelligenza artificiale (YOLO World) evidenzieranno gli oggetti da cantiere nell’immagine 2025, a conferma delle trasformazioni registrate.',

      // Step 10 — Mercato dei Fiori
      's10.num':  '10 — Una storia di successo',
      's10.h2':   'Mercato dei Fiori',
      's10.p1':   'L’ex mercato dei fiori (N031) è una delle 39 aree ad aver completato l’intero percorso. In attesa nel 2020, iter avviato a fine 2021, cantiere aperto a dicembre 2022 — e concluso entro fine 2025.',
      's10.link': 'Vedi su Visitul.it →',

      // Step 11 — Mercato dei Fiori aerial pop-up
      'saer.num': '11 — Dall’alto',
      'saer.h2':  'Lo stesso isolato, a quattro anni di distanza',
      'saer.p1':  'Inverno 2022, ancora un cantiere; estate 2025, completato. Trascina il cursore sull’immagine per rivelare il cambiamento.',

      // Step 12 — Monteverdi
      's11.num': '20 — Una vicenda irrisolta',
      's11.h2':  'Monteverdi',
      's11.p1':  'L’area N067 detiene il record: quattro cambi di stato in cinque anni. È passata da «in attesa» a «procedimento in corso», è retrocessa, è risalita — e ha chiuso il 2025 esattamente dov’era partita: in attesa.',
      's11.p2':  'Un ritratto in miniatura dell’incertezza burocratica.',

      // Step 13 — Monteverdi aerial pop-up
      'maer.num': '21 — Dall’alto',
      'maer.h2':  'Congelata a metà',
      'maer.p1':  'Inverno 2022, un cantiere attivo; estate 2025, lo stesso scheletro — ancora incompiuto, il terreno intorno tornato incolto. Trascina il cursore sull’immagine per confrontare.',

      // Step 14/15 — Ex Lavazza (N181)
      'lav.num':  '12 — Un altro completamento',
      'lav.h2':   'Ex Lavazza',
      'lav.p1':   'L’area N181 ha percorso l’intero iter in tempi record. Compare per la prima volta nel dicembre 2022, con la procedura appena avviata; nel 2024 è un cantiere attivo; entro inizio 2025 risulta completata — l’ex lotto Lavazza ricostruito in appena tre anni.',
      'laer.num': '13 — Dall’alto',
      'laer.h2':  'Ricostruita da zero',
      'laer.p1':  'Inverno 2022 a confronto con l’estate 2025. Trascina il cursore per rivelare quanto è cambiato.',

      // Step 16/17 — CSEA (N059)
      'cse.num':  '14 — Pazienza premiata',
      'cse.h2':   'CSEA',
      'cse.p1':   'L’area CSEA ha passato anni in iter — bloccata nei permessi dalla primissima rilevazione del 2020 fino a fine 2022. Il cantiere è partito solo nel 2024, e a dicembre 2025 anch’essa risulta completata.',
      'caer.num': '15 — Dall’alto',
      'caer.h2':  'Finalmente conclusa',
      'caer.p1':  'Inverno 2022 a confronto con l’estate 2025. Trascina il cursore per rivelare quanto è cambiato.',

      // Step 18/19 — Parco della Salute (N049)
      'sal.num':  '16 — Il cantiere infinito',
      'sal.h2':   'Parco della Salute',
      'sal.p1':   'Il più grande progetto singolo di Torino. Il nuovo campus ospedaliero (N049) ha lasciato l’iter e aperto il cantiere già nel 2021 — e da allora è sempre in costruzione. Cinque anni, rilevazione dopo rilevazione, con lo stesso stato: ancora in cantiere.',
      'sal.link': 'Vedi su Visitul.it →',
      'paer.num': '17 — Dall’alto',
      'paer.h2':  'Un campus prende forma',
      'paer.p1':  'Inverno 2022, i primi scavi; estate 2025, il campus ospedaliero ben avanzato. Trascina il cursore per confrontare.',

      // Step 20/21 — Robaldo (N193)
      'rob.num':  '18 — Dal terreno nudo',
      'rob.h2':   'Robaldo',
      'rob.p1':   'Alcune aree semplicemente compaiono. Robaldo (N193) è assente dalle rilevazioni fino ad aprile 2024, quando appare già in costruzione — terreno nudo nell’immagine dell’inverno 2022, un cantiere attivo un anno dopo.',
      'rob.link': 'Vedi su Visitul.it →',
      'raer.num': '19 — Dall’alto',
      'raer.h2':  'Terreno smosso',
      'raer.p1':  'Inverno 2022, un campo vuoto; estate 2025, scavi e cantiere. Trascina il cursore per rivelare il cambiamento.',

      // Step 22 — explore
      's12.num': '22 — Esplora',
      's12.h2':  'Ogni area ha una storia',
      's12.p1':  'Clicca una qualsiasi area sulla mappa per vederne nome, stato attuale e storia quinquennale. I dati provengono da <em>Visitul.it</em>, un progetto civico che monitora la trasformazione urbana di Torino.',
      's12.p2':  '206 aree. Almeno altri quindici anni di cambiamenti davanti.',

      // (Aerial evidence closing section removed — intro moved to the ia.* divider above)

      // Timeline widget
      'tl.header':  'Stato delle aree nel tempo',
      'tl.caption': 'Numero di aree con uno stato registrato per rilevazione',

      // Outro
      'outro.h2': 'Segui la trasformazione',
      'outro.p':  'I dati alla base di questa storia sono raccolti da <a href="https://visitul.it" target="_blank" rel="noopener">Visitul.it</a>, un progetto indipendente di monitoraggio civico. Nuove rilevazioni vengono aggiunte periodicamente, man mano che il paesaggio urbano di Torino continua a cambiare.',

      // Footer
      'footer.author':  'Una data story di <strong>Neus Fontanet Garcia</strong>',
      'footer.role':    'Dottorato di ricerca presso il DIST, Politecnico di Torino',
      'footer.sup':     'Supervisione del Prof. Piero Boccardo &middot; Gruppo di ricerca SDG11Lab',
      'footer.github':  'Geodatabase su GitHub',
      'footer.funding': 'Finanziato dall’Unione Europea – NextGenerationEU nell’ambito del PNRR — MUR DM 118/2023, CUP E14D23001910006',
      'footer.credits.data': 'Dati: <a href="https://visitul.it" target="_blank" rel="noopener">Visitul.it</a> &middot; OpenStreetMap &middot; ESA WorldCover 2021 &middot; Catasto INSPIRE',
      'footer.credits.map':  'Mappa: <a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> &middot; <a href="https://maplibre.org" target="_blank" rel="noopener">MapLibre GL JS</a>',
    },
  },

  // ── Aerial before/after evidence (closing "Seen from above" section) ─────────
  // Curated per-site orthophoto comparison: winter 2022 vs summer 2025. Imagery is
  // added later as small PNG crops under data/ortho/<code>/ ; until then `before`
  // and `after` are null and the card renders a grey placeholder panel (scaffold).
  //   bounds        — WGS84 [W, S, E, N] crop box (kept here so the later YOLO
  //                   detection overlay can be aligned to real coordinates)
  //   before/after  — image paths, or null while imagery is pending
  //   hasDetections — gates the (currently inert) "show AI detections" toggle
  // When real crops arrive this becomes a pure data swap: set before/after paths.
  // Captions/labels are translated via CONFIG.i18n.evidence + CONFIG.i18n.uiText.
  evidenceCases: [
    {
      code: 'N193',
      name: 'Robaldo',
      bounds: [7.641331, 45.007959, 7.649269, 45.010321],  // from data/ortho/N193/bounds.json
      before: 'data/ortho/N193/2022_winter.jpg',
      after:  'data/ortho/N193/2025_summer.jpg',
      hasDetections: false,
    },
    {
      code: 'N031',
      name: 'Mercato dei Fiori',
      bounds: [7.692691, 45.078869, 7.695629, 45.080641],  // from data/ortho/N031/bounds.json
      before: 'data/ortho/N031/2022_winter.jpg',
      after:  'data/ortho/N031/2025_summer.jpg',
      hasDetections: false,
    },
    {
      code: 'N049',
      name: 'Parco della Salute',
      bounds: [7.657451, 45.022089, 7.665859, 45.028341],  // from data/ortho/N049/bounds.json
      before: 'data/ortho/N049/2022_winter.jpg',
      after:  'data/ortho/N049/2025_summer.jpg',
      hasDetections: false,
    },
    {
      code: 'N067',
      name: 'Monteverdi',
      bounds: [7.709065, 45.084284, 7.712437, 45.086518],  // from data/ortho/N067/bounds.json
      before: 'data/ortho/N067/2022_winter.jpg',
      after:  'data/ortho/N067/2025_summer.jpg',
      hasDetections: false,
    },
    {
      code: 'N181',
      name: 'Ex Lavazza',
      bounds: [7.696002, 45.083947, 7.698111, 45.085302],  // from data/ortho/N181/bounds.json
      before: 'data/ortho/N181/2022_winter.jpg',
      after:  'data/ortho/N181/2025_summer.jpg',
      hasDetections: false,
    },
    {
      code: 'N059',
      name: 'CSEA',
      bounds: [7.627744, 45.070620, 7.630168, 45.072481],  // from data/ortho/N059/bounds.json
      before: 'data/ortho/N059/2022_winter.jpg',
      after:  'data/ortho/N059/2025_summer.jpg',
      hasDetections: false,
    },
  ],

  // Featured cases used in the narrative steps
  featuredCases: {
    mercato: {
      code:    'N031',
      name:    'Mercato dei Fiori',
      center:  [7.694159, 45.079755],
      zoom:    15,
      pitch:   40,
      linkEng: 'https://visitul.it/en/now/n031-mercato-fiori/',
    },
    monteverdi: {
      code:    'N067',
      name:    'Monteverdi',
      center:  [7.710751, 45.085401],
      zoom:    14.5,
      pitch:   30,
      linkEng: null,
    },
  },

  // Per-step map configuration.
  // period      — which time-column to use for colour
  // center/zoom — flyTo target
  // pitch       — tilt (0 = flat)
  // focusStatus — dim all other statuses
  // highlight   — site code to outline prominently (null = none)
  steps: [
    {
      id:          'overview',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       25,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'status',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       25,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'on_hold',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'on hold',
      highlight:   null,
    },
    {
      id:          'procedure',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'procedure in progress',
      highlight:   null,
    },
    {
      id:          'construction',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'under construction',
      highlight:   null,
    },
    {
      id:          'completed',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        12,
      pitch:       0,
      focusStatus: 'completed',
      highlight:   null,
    },
    {
      id:          'time_2020',
      fit:         true,
      period:      'july_2020',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'time_2022',
      fit:         true,
      period:      'july_2022',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'time_2025',
      fit:         true,
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
      focusStatus: null,
      highlight:   null,
    },
    {
      // Section-divider card introducing the individual-site deep-dives (each pairs a
      // status journey with an aerial before/after). Un-numbered on purpose — a "part
      // break", so the numbered chapters (10 = Mercato …) don't need renumbering.
      id:          'intro_aerial',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       25,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'featured_mercato',
      period:      'december_2025',
      center:      [7.694159, 45.079755],
      zoom:        15,
      pitch:       40,
      focusStatus: null,
      highlight:   'N031',
    },
    {
      // Inline aerial before/after pop-up for Mercato dei Fiori (N031).
      // `aerial` = evidence code → applyStep() shows the swipe over the map.
      id:          'mercato_aerial',
      aerial:      'N031',
      period:      'december_2025',
      center:      [7.694159, 45.079755],
      zoom:        15,
      pitch:       0,
      focusStatus: null,
      highlight:   'N031',
    },

    // ── Ex Lavazza (N181) — completed, full pipeline ──────────────────────────
    {
      id:          'featured_lavazza',
      period:      'december_2025',
      center:      [7.697057, 45.084624],
      zoom:        15,
      pitch:       35,
      focusStatus: null,
      highlight:   'N181',
    },
    {
      id:          'lavazza_aerial',
      aerial:      'N181',
      period:      'december_2025',
      center:      [7.697057, 45.084624],
      zoom:        15,
      pitch:       0,
      focusStatus: null,
      highlight:   'N181',
    },

    // ── CSEA (N059) — completed, long procedure then build ────────────────────
    {
      id:          'featured_csea',
      period:      'december_2025',
      center:      [7.628956, 45.071551],
      zoom:        15,
      pitch:       35,
      focusStatus: null,
      highlight:   'N059',
    },
    {
      id:          'csea_aerial',
      aerial:      'N059',
      period:      'december_2025',
      center:      [7.628956, 45.071551],
      zoom:        15,
      pitch:       0,
      focusStatus: null,
      highlight:   'N059',
    },

    // ── Parco della Salute (N049) — the long build, still under construction ──
    {
      id:          'featured_salute',
      period:      'december_2025',
      center:      [7.661654, 45.025215],
      zoom:        14.5,
      pitch:       35,
      focusStatus: null,
      highlight:   'N049',
    },
    {
      id:          'salute_aerial',
      aerial:      'N049',
      period:      'december_2025',
      center:      [7.661654, 45.025215],
      zoom:        14.5,
      pitch:       0,
      focusStatus: null,
      highlight:   'N049',
    },

    // ── Robaldo (N193) — appears mid-story, empty field → active build ────────
    {
      id:          'featured_robaldo',
      period:      'december_2025',
      center:      [7.645300, 45.009141],
      zoom:        15,
      pitch:       35,
      focusStatus: null,
      highlight:   'N193',
    },
    {
      id:          'robaldo_aerial',
      aerial:      'N193',
      period:      'december_2025',
      center:      [7.645300, 45.009141],
      zoom:        15,
      pitch:       0,
      focusStatus: null,
      highlight:   'N193',
    },

    // ── Monteverdi (N067) — the stalled exception, closes the deep-dives ───────
    {
      id:          'featured_monteverdi',
      period:      'december_2025',
      center:      [7.710751, 45.085401],
      zoom:        14.5,
      pitch:       30,
      focusStatus: null,
      highlight:   'N067',
    },
    {
      // Inline aerial before/after pop-up for Monteverdi (N067) — mirrors mercato_aerial.
      id:          'monteverdi_aerial',
      aerial:      'N067',
      period:      'december_2025',
      center:      [7.710751, 45.085401],
      zoom:        15,
      pitch:       0,
      focusStatus: null,
      highlight:   'N067',
    },

    {
      id:          'explore',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: null,
      highlight:   null,
    },
  ],
};
