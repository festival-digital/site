// next.config.js 
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  env: {},
  cssLoaderOptions: {
    url: false
  },
});
