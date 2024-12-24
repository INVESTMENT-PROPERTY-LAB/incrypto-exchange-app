export default defineNuxtConfig({
  css: ['@/styles/main.scss'],

  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    },
    
  },

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
          src: 'icons/qwe64.png',
          sizes: '64x64',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/qwe144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/qwe192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/qwe512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
      ],
      screenshots: [
        {
          src: 'screenshots/qweqwe.png',
          sizes: '377x759',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'qwe'
        },
        {
          src: 'screenshots/awdaawd.png',
          sizes: '1919x865',
          form_factor: 'wide',
          type: 'image/png',
          label: 'tythfdthdf'
        },

      ],
    },
    devOptions: {
      enabled: true,
    },
  },

  compatibilityDate: '2024-12-22',
})