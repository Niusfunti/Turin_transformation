// config.js — edit this file to customize the story, map views, and featured cases.

const CONFIG = {

  map: {
    style:       'https://tiles.openfreemap.org/styles/positron',
    coverStyle:  'https://tiles.openfreemap.org/styles/bright',
    center: [7.6715, 45.0636],
    coverCenter: [7.47, 45.0636],  // 0.2° west of Turin center so city sits in the transparent right zone
    zoom: 11.5,
    minZoom: 9,
    maxZoom: 18,
    coverZoom: 10.8
  },

  // Status color palette — used both in the map layers and the legend
  statusColors: {
    'on hold':                                                '#c98a2b',
    'procedure in progress':                                  '#3a7ca5',
    'under construction':                                     '#d9531e',
    'under construction (demolition started)':                '#d9531e',
    'partially under construction':                           '#e8743b',
    'partially under construction - partially completed':     '#a3c46d',
    'completed':                                              '#4a8c5a',
    'removed':                                                '#8a8377',
    'unknown':                                                '#b8b0a5',
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
      },
      it: {
        legendTitle: 'Stato dei progetti',
        unknownSite: 'Area sconosciuta',
        visitulLink: 'Visitul.it →',
        landUse:     'Uso del suolo',
        docTitle:    'Torino in trasformazione — 2020–2025',
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

      // Step 10 — Mercato dei Fiori
      's10.num':  '10 — Una storia di successo',
      's10.h2':   'Mercato dei Fiori',
      's10.p1':   'L’ex mercato dei fiori (N031) è una delle 39 aree ad aver completato l’intero percorso. In attesa nel 2020, iter avviato a fine 2021, cantiere aperto a dicembre 2022 — e concluso entro fine 2025.',
      's10.link': 'Vedi su Visitul.it →',

      // Step 11 — Monteverdi
      's11.num': '11 — Una vicenda irrisolta',
      's11.h2':  'Monteverdi',
      's11.p1':  'L’area N067 detiene il record: quattro cambi di stato in cinque anni. È passata da «in attesa» a «procedimento in corso», è retrocessa, è risalita — e ha chiuso il 2025 esattamente dov’era partita: in attesa.',
      's11.p2':  'Un ritratto in miniatura dell’incertezza burocratica.',

      // Step 12 — explore
      's12.num': '12 — Esplora',
      's12.h2':  'Ogni area ha una storia',
      's12.p1':  'Clicca una qualsiasi area sulla mappa per vederne nome, stato attuale e storia quinquennale. I dati provengono da <em>Visitul.it</em>, un progetto civico che monitora la trasformazione urbana di Torino.',
      's12.p2':  '206 aree. Almeno altri quindici anni di cambiamenti davanti.',

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
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       25,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'status',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       25,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'on_hold',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'on hold',
      highlight:   null,
    },
    {
      id:          'procedure',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'procedure in progress',
      highlight:   null,
    },
    {
      id:          'construction',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       0,
      focusStatus: 'under construction',
      highlight:   null,
    },
    {
      id:          'completed',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        12,
      pitch:       0,
      focusStatus: 'completed',
      highlight:   null,
    },
    {
      id:          'time_2020',
      period:      'july_2020',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'time_2022',
      period:      'july_2022',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
      focusStatus: null,
      highlight:   null,
    },
    {
      id:          'time_2025',
      period:      'december_2025',
      center:      [7.6715, 45.0636],
      zoom:        11.5,
      pitch:       30,
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
      id:          'featured_monteverdi',
      period:      'december_2025',
      center:      [7.710751, 45.085401],
      zoom:        14.5,
      pitch:       30,
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
