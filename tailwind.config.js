module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#F3F3F3',
        secondary: '#8E8EA3',
        tertiary: '#818191',
        accent: '#5C7AE5',
        'surface-primary': '#16162A',
        'surface-secondary': '#292946',
        'surface-tertiary': '#494980',
        'surface-contrast': '#EAEAFF',
        'stroke-primary': '#52526B',
      },

      fontFamily: {
        sans: ['Poppins'],
        logo: ['Raleway', 'sans'],
        primary: ['Poppins', 'sans'],
        secondary: ['Roboto', 'sans'],
      },
    },
  },
  plugins: [],
}
