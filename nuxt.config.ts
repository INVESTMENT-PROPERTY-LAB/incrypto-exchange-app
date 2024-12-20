// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/styles/main.scss'],
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'iNCRYPTO',
      short_name: 'iNC',
      description: 'Тест описания',
      icons: [
        {
          src: 'icons/icon_64x64.svg',
          sizes: '64x64',
          type: 'image/svg/png'
        },
        {
          src: 'icons/icon_144x144.svg',
          sizes: '144x144',
          type: 'image/svg/png'
        },
        {
          src: 'icons/icon_192x192.svg',
          sizes: '192x192',
          type: 'image/svg/png'
        },
        {
          src: 'icons/icon_512x512.svg',
          sizes: '512x512',
          type: 'image/svg/png'
        },
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
})
