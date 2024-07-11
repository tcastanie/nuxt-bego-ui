import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind(),
  ],
  theme: {
    colors: {
      bego: {
        50: '#FF7777',
        100: '#F7676E',
        200: '#F15565',
        300: '#EC465F',
        400: '#E6375A',
        500: '#E02956',
        600: '#D32157',
        700: '#C31C56',
        800: '#A4164F',
        900: '#7C1040',
        950: '#430826',
      },
    },
  },
  safelist: [
    'text-white',
    'text-bego-400',
    'text-bego-500',
    'bg-bego-400',
    'bg-bego-950',
    'bg-bego-950/10',
    'bg-zinc-900',
    'ring-bego-400',
    'divide-bego-400',
    'hover:text-bego-500',
    'hover:bg-bego-500',
    'hover:bg-bego-900',
    'hover:bg-bego-950',
    'disabled:bg-bego-400',
    'disabled:bg-bego-950',
    'hover:ring-bego-400',
    'focus-visible:outline-bego-400',
    'focus-visible:ring-bego-400',
  ],
})
