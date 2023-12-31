/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  experimental: {
    css: true
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        button: "#A259FF",
        primary: "#2B2B2B",
        secondary: "#3B3B3B",
        text: "#858584"
      },
      fontSize: {
        clamp: "clamp(2.25rem, 5vw, 4rem)",
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
}
