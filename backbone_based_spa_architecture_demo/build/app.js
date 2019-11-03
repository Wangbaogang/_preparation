define(function(require, exports, module) {
    var Main = require('pages/main/index')
    var About = require('pages/about/index')
    var Mod
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "about": "about",
        },
        index() {
            if(Mod) 
                Mod.destory()
            Mod = new Main()
            $("#app").append(Mod.el)
        },
        about() {
            if(Mod)
                Mod.destory()
            Mod = new About()
            $("#app").append(Mod.el)
        }
    })
    exports.init = function() {
        Backbone.$ = window.jQuery;
        
        var app = new AppRouter();
        Backbone.history.start();
    }

})