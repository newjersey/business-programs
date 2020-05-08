const path = require('path');

module.exports = {
  webpack: {
    alias: {
      // Add the aliases for all the top-level folders in the `src/` folder.
      // assets: `${paths.appSrc}/assets/`,
      // components: `${paths.appSrc}/components/`,
      // interfaces: `${paths.appSrc}/interfaces/`,
      // modules: `${paths.appSrc}/modules/`,
      // utils: `${paths.appSrc}/utils/`,

      // Another example for using a wildcard character
      '~': path.resolve(__dirname, 'src/')
    }
  }
}
