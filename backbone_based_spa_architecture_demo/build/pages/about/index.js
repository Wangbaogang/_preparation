define(function(require, exports, module) {
    var About = Backbone.View.extend({
        initialize() {
            this.render()
        },

        template: _.template(`<div class="">王宝刚</div>`),

        className: "app-p-about",

        render() {
            this.$el.html(this.template())
        },

        destory() {
            this.remove()
        }
    })

    module.exports = About
})