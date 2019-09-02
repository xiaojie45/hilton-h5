const withSass = require('@zeit/next-sass')
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/agreement': { page: '/agreement' },
      '/privacy': { page: '/privacy' },
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hilton-h5' : '',
})