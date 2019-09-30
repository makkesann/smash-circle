require("dotenv").config()
const client = require("./plugins/contentful")

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // '@nuxtjs/dotenv',
    // '@nuxtjs/markdownit',
  ],
  /*
  ** Build configuration
  */
 markdownit: {
   injected: true,
   html: true,
   linkify: true,
   typography: true,
  },
  generate: {
    routes() {
      return client
        .getEntries({ content_type: 'blog' })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: "/blog/" + entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  },
  env: {
    CTF_SPACE_ID: "rpp9rqpod3d1",
    CTF_ACCESS_TOKEN: "gTLEoKX1Ypssr5gO597y6cpGqCJI71YAsZQbK21yFk4",
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
