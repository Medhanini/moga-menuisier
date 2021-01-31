import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s Menuiserie Aluminium à Essaouira - Maroc | Moga-menuisier.com ' + process.env.npm_package_name,
    title: process.env.npm_package_name || 'Menuiserie Aluminium à Essaouira - Maroc | moga-menuisier.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Menuiserie Aluminium à Essaouira - Maroc : Trouvez facilement les meilleurs professionnels du menuiserie pour tous vos travaux sur moga-menuisier.com - société N°1 des professionnels du menuiserie à Essaouira - Maroc.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/header_logo_white.webp' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~/plugins/aos.js", mode: "client" },
    { src: '~plugins/vue-scrollto.js', ssr: false },
    { src: '~plugins/jsonld.js' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/cloudinary',
  //   ['nuxt-mail', {
  //     smtp: {
  //       host: "smtp-relay.gmail.com",
  //       port: 25,
  //     },
  //   },
  // ]
  ],
  // mail: {
  //   smtp: {
  //     host: "smtp-relay.gmail.com",
  //     port: 25,
  //   },
  // },
  // cloudinary: {
  //   cloudName: process.env.CLOUDNAME,
  //   apiKey: process.env.API_KEY, //only needed if you are using server-side upload
  //   apiSecret: process.env.API_SECRET, //only needed if you are using server-side upload
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
