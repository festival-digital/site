// next.config.js 
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    GRAPH_URI: process.env.GRAPH_URI,
    API_KEY: process.env.API_KEY,
  },
  cssLoaderOptions: {
    url: false
  },
});
