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
      "maxEntrypointSize": 512000,
      "maxAssetSize": 512000,
    },
  },
}
