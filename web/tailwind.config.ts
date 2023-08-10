/** @type {import ('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(75rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        rocket: '#8257e6',
      }
    },
  },
  plugins: [],
}

