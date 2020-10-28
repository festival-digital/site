// next.config.js
const path = require('path')
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    GRAPH_URI: process.env.GRAPH_URI,
    API_KEY: process.env.API_KEY,
  },
  cssLoaderOptions: {
    url: false,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
});
  
