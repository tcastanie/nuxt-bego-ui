export default defineAppConfig({
  bego: {
    headerHeight: '4rem',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    bego?: {
      /** Header height */
      headerHeight?: string
    }
  }
}
