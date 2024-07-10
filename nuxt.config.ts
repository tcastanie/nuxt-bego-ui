export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-01',
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-zinc-900 text-white',
      },
    },
  },
  css: ['@unocss/reset/tailwind.css'],
  unocss: {
    nuxtLayers: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
