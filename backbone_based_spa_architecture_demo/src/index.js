var COMPRESS_SUFFIX = window.DEVELOP_MODE ? "" : "-min"
var PATH_PREFIX = window.location.origin
seajs.config({
    paths: {
        "libs": PATH_PREFIX + "/libs/",
        "modules": PATH_PREFIX + "/modules",
        "pages": PATH_PREFIX + "/pages",
    },
    alias: {
        "jquery": `libs/jquery/jquery-3.4.1${COMPRESS_SUFFIX}.js`,
        "backbone": `libs/backbone/backbone-1.4.0${COMPRESS_SUFFIX}.js`,
        "underscore": `libs/underscore/underscore-1.9.1${COMPRESS_SUFFIX}.js`
    },
    debug: !!window.DEVELOP_MODE 
})

// underscore.js is backbone.js's hard dependency
// backbone重度依赖underscore， 所以要保证underscore预先加载

seajs.use(['underscore', 'jquery'], function() {
    seajs.use(['backbone', './app'], function(backbone, App) {
        App.init();
    })
})