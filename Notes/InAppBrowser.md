## cordova.InAppBrowser.open



Opens a URL in a new `InAppBrowser` instance, the current browser instance, or the system browser.

```
var ref = cordova.InAppBrowser.open(url, target, options);
```

- **ref**: Reference to the `InAppBrowser` window when the target is set to `'_blank'`. *(InAppBrowser)*

- **url**: The URL to load *(String)*. Call `encodeURI()` on this if the URL contains Unicode characters.

- **target**: The target in which to load the URL, an optional parameter that defaults to `_self`. *(String)*

  - `_self`: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the `InAppBrowser`.
  - `_blank`: Opens in the `InAppBrowser`.
  - `_system`: Opens in the system's web browser.

- **options**: Options for the `InAppBrowser`. Optional, defaulting to: `location=yes`. *(String)*

  The `options` string must not contain any blank space, and each feature's name/value pairs must be separated by a comma. Feature names are case insensitive.

  All platforms support:

  - **location**: Set to `yes` or `no` to turn the `InAppBrowser`'s location bar on or off.

  Android supports these additional options:

  - **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
  - **beforeload**: set to enable the `beforeload` event to modify which pages are actually loaded in the browser. Accepted values are `get` to intercept only GET requests, `post` to intercept on POST requests or `yes` to intercept both GET & POST requests. Note that POST requests are not currently supported and will be ignored (if you set `beforeload=post` it will raise an error).
  - **clearcache**: set to `yes` to have the browser's cookie cache cleared before the new window is opened
  - **clearsessioncache**: set to `yes` to have the session cookie cache cleared before the new window is opened
  - **closebuttoncaption**: set to a string to use as the close button's caption instead of a X. Note that you need to localize this value yourself.
  - **closebuttoncolor**: set to a valid hex color string, for example: `#00ff00`, and it will change the close button color from default, regardless of being a text or default X. Only has effect if user has location set to `yes`.
  - **footer**: set to `yes` to show a close button in the footer similar to the iOS **Done** button. The close button will appear the same as for the header hence use **closebuttoncaption** and **closebuttoncolor** to set its properties.
  - **footercolor**: set to a valid hex color string, for example `#00ff00` or `#CC00ff00` (`#aarrggbb`) , and it will change the footer color from default. Only has effect if user has **footer** set to `yes`.
  - **hardwareback**: set to `yes` to use the hardware back button to navigate backwards through the `InAppBrowser`'s history. If there is no previous page, the `InAppBrowser` will close. The default value is `yes`, so you must set it to `no` if you want the back button to simply close the InAppBrowser.
  - **hidenavigationbuttons**: set to `yes` to hide the navigation buttons on the location toolbar, only has effect if user has location set to `yes`. The default value is `no`.
  - **hideurlbar**: set to `yes` to hide the url bar on the location toolbar, only has effect if user has location set to `yes`. The default value is `no`.
  - **navigationbuttoncolor**: set to a valid hex color string, for example: `#00ff00`, and it will change the color of both navigation buttons from default. Only has effect if user has location set to `yes` and not hidenavigationbuttons set to `yes`.
  - **toolbarcolor**: set to a valid hex color string, for example: `#00ff00`, and it will change the color the toolbar from default. Only has effect if user has location set to `yes`.
  - **lefttoright**: Set to `yes` to swap positions of the navigation buttons and the close button. Specifically, navigation buttons go to the left and close button to the right.
  - **zoom**: set to `yes` to show Android browser's zoom controls, set to `no` to hide them. Default value is `yes`.
  - **mediaPlaybackRequiresUserAction**: Set to `yes` to prevent HTML5 audio or video from autoplaying (defaults to `no`).
  - **shouldPauseOnSuspend**: Set to `yes` to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues like described in [CB-11013](https://issues.apache.org/jira/browse/CB-11013)).
  - **useWideViewPort**: Sets whether the WebView should enable support for the "viewport" HTML meta tag or should use a wide viewport. When the value of the setting is `no`, the layout width is always set to the width of the WebView control in device-independent (CSS) pixels. When the value is `yes` and the page contains the viewport meta tag, the value of the width specified in the tag is used. If the page does not contain the tag or does not provide a width, then a wide viewport will be used. (defaults to `yes`).

  iOS supports these additional options:

  - **usewkwebview**: set to `yes` to use WKWebView engine for the InappBrowser. Omit or set to `no` (default) to use UIWebView. Note: Using `usewkwebview=yes` requires that a WKWebView engine plugin be installed in the Cordova project (e.g. [cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine) or [cordova-plugin-ionic-webview](https://github.com/ionic-team/cordova-plugin-ionic-webview)).
  - **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
  - **beforeload**: set to enable the `beforeload` event to modify which pages are actually loaded in the browser. Accepted values are `get` to intercept only GET requests, `post` to intercept on POST requests or `yes` to intercept both GET & POST requests. Note that POST requests are not currently supported and will be ignored (if you set `beforeload=post` it will raise an error).
  - **clearcache**: set to `yes` to have the browser's cookie cache cleared before the new window is opened
  - **clearsessioncache**: set to `yes` to have the session cookie cache cleared before the new window is opened. For WKWebView, requires iOS 11+ on target device.
  - **cleardata**: set to `yes` to have the browser's entire local storage cleared (cookies, HTML5 local storage, IndexedDB, etc.) before the new window is opened
  - **closebuttoncolor**: set as a valid hex color string, for example: `#00ff00`, to change from the default **Done** button's color. Only applicable if toolbar is not disabled.
  - **closebuttoncaption**: set to a string to use as the **Done** button's caption. Note that you need to localize this value yourself.
  - **disallowoverscroll**: Set to `yes` or `no` (default is `no`). Turns on/off the UIWebViewBounce property.
  - **hidenavigationbuttons**: set to `yes` or `no` to turn the toolbar navigation buttons on or off (defaults to `no`). Only applicable if toolbar is not disabled.
  - **navigationbuttoncolor**: set as a valid hex color string, for example: `#00ff00`, to change from the default color. Only applicable if navigation buttons are visible.
  - **toolbar**: set to `yes` or `no` to turn the toolbar on or off for the InAppBrowser (defaults to `yes`)
  - **toolbarcolor**: set as a valid hex color string, for example: `#00ff00`, to change from the default color of the toolbar. Only applicable if toolbar is not disabled.
  - **toolbartranslucent**: set to `yes` or `no` to make the toolbar translucent(semi-transparent) (defaults to `yes`). Only applicable if toolbar is not disabled.
  - **lefttoright**: Set to `yes` to swap positions of the navigation buttons and the close button. Specifically, close button goes to the right and navigation buttons to the left.
  - **enableViewportScale**: Set to `yes` or `no` to prevent viewport scaling through a meta tag (defaults to `no`). Only applicable to UIWebView (`usewkwebview=no`) and WKWebView (`usewkwebview=yes`) on iOS 10+.
  - **mediaPlaybackRequiresUserAction**: Set to `yes` to prevent HTML5 audio or video from autoplaying (defaults to `no`). Applicable to UIWebView (`usewkwebview=no`) and WKWebView (`usewkwebview=yes`).
  - **allowInlineMediaPlayback**: Set to `yes` or `no` to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface. The HTML's `video` element must also include the `webkit-playsinline` attribute (defaults to `no`). Applicable to UIWebView (`usewkwebview=no`) and WKWebView (`usewkwebview=yes`).
  - **keyboardDisplayRequiresUserAction**: Set to `yes` or `no` to open the keyboard when form elements receive focus via JavaScript's `focus()` call (defaults to `yes`). Only applicable to UIWebView (`usewkwebview=no`).
  - **suppressesIncrementalRendering**: Set to `yes` or `no` to wait until all new view content is received before being rendered (defaults to `no`). Only applicable to UIWebView (`usewkwebview=no`).
  - **presentationstyle**: Set to `pagesheet`, `formsheet` or `fullscreen` to set the [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) (defaults to `fullscreen`).
  - **transitionstyle**: Set to `fliphorizontal`, `crossdissolve` or `coververtical` to set the [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) (defaults to `coververtical`).
  - **toolbarposition**: Set to `top` or `bottom` (default is `bottom`). Causes the toolbar to be at the top or bottom of the window.
  - **hidespinner**: Set to `yes` or `no` to change the visibility of the loading indicator (defaults to `no`).

  Windows supports these additional options:

  - **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
  - **hardwareback**: works the same way as on Android platform.
  - **fullscreen**: set to `yes` to create the browser control without a border around it. Please note that if **location=no** is also specified, there will be no control presented to user to close IAB window.
