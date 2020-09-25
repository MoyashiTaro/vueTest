export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vueTest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
// 追加 
const config = require('./.contentful.json')

module.exports = { 
/*
** Headers of the page
*/
head: {
  title: 'my-blog',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
},
/*
** Customize the progress bar color
*/
loading: { color: '#3B8070' },
/*
** Build configuration
*/
build: {
  /*
  ** Run ESLint on save
  */
  extend (config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
},
// ここから 
env: {
  CTF_SPACE_ID: config.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  CTF_PERSON_ID: config.CTF_PERSON_ID,
  CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
}
// ここまで追加
}
