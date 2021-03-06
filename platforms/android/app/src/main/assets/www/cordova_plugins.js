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
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-hide-home-indicator": "1.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-hidescrollbar": "1.0.2",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-splashscreen": "5.0.3"
  };
});