// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      }
    }
  },
  
  // Подключение модуля PWA
  modules: ['@vite-pwa/nuxt'],

  pwa: {
    manifest: {
      name: 'Nuxt 3 PWA App',
      short_name: 'NuxtPWA',
      description: 'Пример PWA-приложения на Nuxt 3',
      theme_color: '#4a90e2',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/public/Mask.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/public/Mask.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true, // Включить в режиме разработки
    },
  },

  compatibilityDate: '2024-12-22',
})