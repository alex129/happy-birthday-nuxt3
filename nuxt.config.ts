// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      happyBirthdayTitle: '¡Happy Birthday Nowi 🖤!',
      happyBirthdayContent:
        'Si estas leyendo esto es que has recibido el primer regalo y has escaneado el QR, esto es mi otro regalo chorra, dale a "Start" para continuar',
      giftTitle: '🎟 Brunch with Plikk 🎟',
      extraInfo:
        'Basicamente es un "vale" para un brunch donde quieras y cuando quieras jsjsjs y despues de esta parida que te he hecho jajaja muchisimas felicidades love. You da fucking best! espero que te haya gustado el regalo y espero poder seguir regalandote muchos más. Love you 💚',
    },
  },
})
