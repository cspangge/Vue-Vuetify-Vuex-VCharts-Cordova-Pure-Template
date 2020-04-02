cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-hidescrollbar.hidescrollbar",
      "file": "plugins/cordova-plugin-hidescrollbar/www/hidescrollbar.js",
      "pluginId": "cordova-plugin-hidescrollbar",
      "clobbers": [
        "plugins.hideScrollbar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-hide-home-indicator": "1.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-hidescrollbar": "1.0.2"
  };
});