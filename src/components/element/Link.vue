<template>
    <a onclick="handle()"></a>
</template>

<script>
  export default {
    name: '',
    props: {
      url: {
        type: String,
        required: true
      },
      target: {
        type: String,
        default: '_blank',
        required: false
      },
      style: {
        type: Number,
        default: 1,
        required: false
      }
    },
    computed: {
      /**
       * location: Set to yes or no to turn the InAppBrowser's location bar on or off.
       * android
       * clearcache: set to yes to have the browser's cookie cache cleared before the new window is opened
       * clearsessioncache: set to yes to have the session cookie cache cleared before the new window is opened
       * closebuttoncaption: set to a string to use as the close button's caption instead of a X.
       * closebuttoncolor: set to a valid hex color string, and it will change the close button color from default
       * footer: set to yes to show a close button in the footer similar to the iOS Done button.
       * footercolor: set to a valid hex color string,
       * hardwareback: set to yes to use the hardware back button to navigate backwards
       * hidenavigationbuttons: set to yes to hide the navigation buttons on the location toolbar
       * hideurlbar: set to yes to hide the url bar on the location toolbar
       * navigationbuttoncolor, toolbarcolor,
       * lefttoright
       * zoom: set to yes to show Android browser's zoom controls, set to no to hide them
       * mediaPlaybackRequiresUserAction: Set to yes to prevent HTML5 audio or video from autoplaying
       * ios
       * usewkwebview: set to yes to use WKWebView engine for the InappBrowser.
       * disallowoverscroll: Set to yes or no (default is no). Turns on/off the UIWebViewBounce property.
       * presentationstyle: Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen).
       *
       * @returns {string}
       */
      features () {
        switch (this.style) {
          case 1:
            return 'location=no,clearcache=yes,clearsessioncache=yes' +
              'closebuttoncaption=Done,footer=yes,hardwareback=yes,hideurlbar=yes' +
              'zoom=no,mediaPlaybackRequiresUserAction=yes,usewkwebview=yes' +
              'presentationstyle=pagesheet'
          case 2:
            return 'location=no,clearcache=no,clearsessioncache=no' +
              'closebuttoncaption=Done,footer=yes,hardwareback=yes,hideurlbar=yes' +
              'zoom=no,mediaPlaybackRequiresUserAction=yes,usewkwebview=yes' +
              'presentationstyle=pagesheet'
          case 3:
            return ''
          case 4:
            return ''
          case 5:
            return ''
          default:
            return 'location=no,clearcache=yes,clearsessioncache=yes' +
              'closebuttoncaption=Done,footer=yes,hardwareback=yes,hideurlbar=yes' +
              'zoom=no,mediaPlaybackRequiresUserAction=yes,usewkwebview=yes' +
              'presentationstyle=pagesheet'
        }
      }
    },
    methods: {
      handle() {
        window.open(
          this.url,
          this.target,
          this.features
        );
        return false;
      }
    }
  }
</script>
