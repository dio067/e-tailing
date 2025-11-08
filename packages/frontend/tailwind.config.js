export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#F6F3EC',
        ink: '#1C1A17',
        'ink-soft': '#57524A',
        line: '#DED7C7',
        primary: { DEFAULT: '#234B3D', light: '#3E7562', dark: '#16332A' },
        accent: { DEFAULT: '#C08A2E', light: '#DBAE5F' },
        danger: '#A23B34',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: { card: '0.375rem' },
    },
  },
  plugins: [],
};
