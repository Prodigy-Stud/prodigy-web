import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        soft: 'var(--bg)'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(20,20,20,0.09)'
      },
      borderRadius: {
        xl2: '1.5rem'
      }
    }
  },
  plugins: []
};

export default config;
