export const icons = {

  target: `
    <circle cx="12" cy="12" r="8"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 4v2"/>
    <path d="M12 18v2"/>
    <path d="M4 12h2"/>
    <path d="M18 12h2"/>
  `,

  communication: `
    <path d="M5 6h14v9H9l-4 4V6z"/>
  `,

  person: `
    <circle cx="12" cy="8" r="3"/>
    <path d="M6.5 19c0-3.2 2.5-5 5.5-5s5.5 1.8 5.5 5"/>
    <circle cx="12" cy="12" r="10"/>
  `,

  support: `
    <path d="M5 18c3-7 6-10 14-12"/>
    <path d="M16 6h3v3"/>
  `,

  code: `
    <polyline points="9 6 3 12 9 18"/>
    <polyline points="15 6 21 12 15 18"/>
  `,

  refresh: `
    <path d="M5 8a7 7 0 0 1 12-2"/>
    <polyline points="17 2 17 6 13 6"/>
    <path d="M19 16a7 7 0 0 1-12 2"/>
    <polyline points="7 22 7 18 11 18"/>
  `,

  database: `
    <ellipse cx="12" cy="6" rx="7" ry="3"/>
    <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/>
    <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/>
  `,

  maintenance: `
    <path d="M15 5a4 4 0 0 0-5 5L4 16l4 4 6-6a4 4 0 0 0 5-5l-3 3-2-2z"/>
  `,

  performance: `
    <path d="M5 17a8 8 0 1 1 14 0"/>
    <path d="M12 12l4-2"/>
  `,

  shield: `
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>
  `,

  linkedin: `
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 10v6"/>
    <path d="M8 8h.01"/>
    <path d="M12 16v-3.2c0-1.1.9-2 2-2s2 .9 2 2V16"/>
    <path d="M12 10v6"/>
  `

} as const;

export type IconName = keyof typeof icons;