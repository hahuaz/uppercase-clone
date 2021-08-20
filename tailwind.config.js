module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      varela: ['varela'],
    },
    extend: {
      colors: {
        'blue-dark': '#0d0745',
        'blue-dark-lighten': '#5e71eb',
        'blue-aqua': '#4adedd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  important: true,
  prefix: 'tw-',
}
