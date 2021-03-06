module.exports = {
  purge: ['src/app/**/*.{ts,html}'],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
