const path = require('path');

module.exports = {
  webpack: {
    alias: {
      // taken from https://resir014.xyz/posts/2019/03/13/using-typescript-absolute-paths-in-cra-20/
      '~': path.resolve(__dirname, 'src/')
    }
  }
}
