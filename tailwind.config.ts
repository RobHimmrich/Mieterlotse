import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F5F3EF',
        'bg-surface': '#EFEDE8',
        'ink-900': '#1A1612',
        'ink-600': '#4A4239',
        'ink-400': '#8C7E72',
        'brass': '#B8943A',
        'brass-light': '#D4AD5C',
        'obsidian': '#161310',
        'obsidian-card': '#221D19',
        'obsidian-border': '#332C26',
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
      },
      screens: { xs: '480px' },
    },
  },
  plugins: [],
}
export default config
