export default {
  ssr: false,
  components: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#fff' },

  css: ['@/assets/css/main.css'],

  plugins: [{ src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }],

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  buildModules: [
    '@nuxt/components',
    '@nuxtjs/tailwindcss',
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  tailwindcss: {
    exposeConfig: true,
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: true,
        defaultImage: '/loading.png',
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',

        observerConfig: {},
      },
    ],
  ],

  axios: {},

  build: {},
}
