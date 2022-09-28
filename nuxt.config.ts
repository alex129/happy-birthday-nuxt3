// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
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
        'Si estas aqui es que has leido el QR que estaba en el primer regalo, si quieres saber cual es el segundo, dale click a start!',
      giftTitle: '🎟 Brunch with Plikk 🎟',
      happyBirthdayGiftContent:
        'Bueno despues de esta parida que te he hecho jajaja muchisimas felicidades love ❤️‍🔥🖤❤️‍🔥 you da fucking best! espero que te haya gustado mi primer regalo y espero poder seguir regalandote muchos más.',
    },
  },
})
