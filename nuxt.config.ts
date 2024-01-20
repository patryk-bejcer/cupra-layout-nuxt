// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Seat CUPRA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Umów się na bezpłatną jazdę próbną z marką CUPRA.' },
      ],
      htmlAttrs: {
        lang: 'pl',
      },
    }
  },

  css: ['~/assets/css/tailwind.css', "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
