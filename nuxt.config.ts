// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  srcDir: "src/",
  components: {
    global: true,
    dirs: ['~/components']
  },
  css: ['~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        additionalData: '@import "~/assets/css/variables.scss";'
      },
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ]
})
