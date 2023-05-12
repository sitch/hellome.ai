const pkg = require("./package.json")
const nextI18nextConfig = require("./next-i18next.config")

// TODO: implement these accessors this
const tailwindConfig = {
  "hex(var(--background))": "#fff",
  "hex(var(--primary))": "#fff",
}

/**
 * @type {import('favicons').FaviconOptions}
 */
const faviconOptions = {
  path: "/", // Path for overriding default icons path. `string`
  version: pkg.version, // Your application's version string. `string`
  appName: pkg.appName, // Your application's name. `string`
  appShortName: pkg.appShortName, // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: pkg.appDescription, // Your application's description. `string`
  developerName: pkg.author.name, // Your (or your developer's) name. `string`
  developerURL: pkg.author.url, // Your (or your developer's) URL. `string`
  //
  cacheBustingQueryParam: null, // Query parameter added to all URLs that acts as a cache busting system. `string | null`
  dir: "auto", // Primary text direction for name, short_name, and description
  //
  lang: nextI18nextConfig.i18n.defaultLocale, //"en-US", // Primary language for name and short_name
  //
  background: tailwindConfig["hex(var(--background))"], // Background color for flattened icons. `string`
  theme_color: tailwindConfig["hex(var(--primary))"], // Theme color user for example in Android's task switcher. `string`
  //
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  //
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/?homescreen=1", // Start URL when launching the application from a device. `string`
  preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
  relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
  //
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  manifestMaskable: true, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
  shortcuts: [
    // Your applications's Shortcuts (see: https://developer.mozilla.org/docs/Web/Manifest/shortcuts)
    // Array of shortcut objects:
    // {
    //   name: "View your Inbox", // The name of the shortcut. `string`
    //   short_name: "inbox", // optionally, falls back to name. `string`
    //   description: "View your inbox messages", // optionally, not used in any implementation yet. `string`
    //   url: "/inbox", // The URL this shortcut should lead to. `string`
    //   icon: "test/inbox_shortcut.png", // source image(s) for that shortcut. `string`, `buffer` or array of `string`
    // },
    // more shortcuts objects
  ],
}

module.exports = {
  faviconOptions,
  logoPath: "resources/logo.png",
  output: {
    favicons: {
      dir: {
        data: "public/pwa/",
        // assets: "public/",
      },
    },
    component: {
      path: "components/@gen/pwa/head-metadata.tsx",
    },
  },
}
