import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        //'16': '4rem',
        '22': '5.5rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '140': '35rem',
        '148': '37rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
      },
    },
  },
  darkMode: 'media',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        nord: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['nord'],
          '.bg-linkcard': {
            'background-color': '#D8DEE9',
          },
          '.bg-linkcard:hover': {
            'background-color': '#CBD3E2',
          },
        },
      },
      {
        nordDark: {
          primary: '#6F8EB5',
          secondary: '#92AEC9',
          accent: '#9ACAD7',
          neutral: '#2E3440',
          'neutral-content': '#D8DEE9',
          'base-100': '#3B4252',
          'base-200': '#434C5E',
          'base-300': '#4C566A',
          'base-content': '#EBEFF4',
          info: '#B48EAE',
          success: '#A3BE8C',
          warning: '#EBCB8B',
          error: '#C6737B',
          '.bg-linkcard': {
            'background-color': '#4C566A',
          },
          '.bg-linkcard:hover': {
            'background-color': '#434C5E',
          },
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
  },
}
export default config
