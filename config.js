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

  // Chronological snapshots in the data
  periods: [
    { key: 'july_2020',      label: 'July 2020' },
    { key: 'october_2021',   label: 'October 2021' },
    { key: 'july_2022',      label: 'July 2022' },
    { key: 'december_2022',  label: 'December 2022' },
    { key: 'april_2024',     label: 'April 2024' },
    { key: 'february_2025',  label: 'February 2025' },
    { key: 'december_2025',  label: 'December 2025' },
  ],

  // Aggregate statistics shown in the stat chips (derived from the data)
  stats: {
    total:        206,
    polygons:     150,
    points:        53,
    lines:          3,
    onHold:        42,
    procedure:     43,
    construction:  48,
    completed:     11,
    removed:        5,
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
