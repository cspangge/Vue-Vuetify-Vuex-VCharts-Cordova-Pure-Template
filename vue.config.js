module.exports = {
  "outputDir": "www",
  "publicPath": "",
  "lintOnSave": true,
  "productionSourceMap": process.env.NODE_ENV === 'development',

  "transpileDependencies": [
    "vuetify"
  ],

  "configureWebpack": {
    "performance": {
      "hints": process.env.NODE_ENV === 'production' ? "warning" : false,
      "maxEntrypointSize": 1024000,
      "maxAssetSize": 1024000,
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
