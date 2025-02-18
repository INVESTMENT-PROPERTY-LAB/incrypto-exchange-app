export default defineNuxtConfig({
  css: ['@/styles/main.scss'],

  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
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

  modules: ['@vite-pwa/nuxt'],

  pwa: {

    workbox: {
      globDirectory: '.output/public',
      globPatterns: ['**/*.{js,css,html,png,svg,json}'], // Используйте более общий паттерн
      globIgnores: ['node_modules/**/*', 'sw.js', 'workbox-*.js'],
    },

    manifest: {
      name: 'iNCRYPTO',
      short_name: 'iNC',
      description: 'Welcome To international Exchange app!',
      theme_color: '#4a90e2',
      background_color: '#ffffff',
      display: 'fullscreen',
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