// Configuration
module.exports = {
    distDir: 'build',
    trailingSlash: false,
    exportPathMap: function() {
        return {
            '/index.html': { page: '/' },
            '/about/index.html': { page: '/about'},
            '/images/index.html': { page: '/images' }
        };
    },
    webpack: (config, options) => {
        config.resolve.modules.unshift(__dirname)
        return config;
    }
};

