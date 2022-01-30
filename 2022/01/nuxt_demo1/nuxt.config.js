import fs from "fs";
import path from "path"

export default {
  generate: {
    routes: () => {
      console.log('Generating routes...');
      let listOfPosts = JSON.parse(
        fs.readFileSync(
          path.join('.', 'data', 'posts', 'index.json')));

      let postRoutes = listOfPosts
        .map(it => it.slug)
        .map((slug) => {
          return '/blog/post/' + slug;
        });

      return postRoutes;
    }
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tomasz Półgrabia\'s BLog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isDev, isClient}) {
      config.node = {
        fs: 'empty'
      };

      // disable for production
      config.devtool = 'source-map';
    }
  },

  ssr: true
}
