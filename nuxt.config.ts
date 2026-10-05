import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: ['@nuxt/image']
})