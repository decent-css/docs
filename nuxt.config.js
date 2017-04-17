module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Decent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela' }
    ]
  },

  /*
  ** CSS
  */
  css: [
    { src: '~assets/scss/index.scss', lang: 'scss' }
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#27ae60' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          include: '/node_modules/decent-scss/modules/all',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
