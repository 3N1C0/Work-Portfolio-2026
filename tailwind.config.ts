import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Yu Gothic"', 'YuGothic', 'sans-serif'],
        body: ['"Yu Gothic"', 'YuGothic', 'sans-serif'],
        mono: ['"Yu Gothic"', 'YuGothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
