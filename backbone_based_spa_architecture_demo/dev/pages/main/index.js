define(function(require, exports, module) {
    var Main = Backbone.View.extend({
        initialize() {
            this.render()
        },

        template: _.template(`<div class="">主页abcdefg</div>`),

        className: "app-p-main",

        render() {
            this.$el.html(this.template())
        },


        destory() {
            this.remove()
        }
    })

    module.exports = Main
})