var MyView = Backbone.View.extend({
    template: _.template(`
        <h1 class="inner">
            this is a backbone view created at <%- time %>
        </h1>
    `),
    className: 'outer',
    initialize() {
        this.render();
    },
    render() {
        var time = new Date().toLocaleString();
        this.$el.append(this.template({
            time: time
        }));
    },
    destroy() {
        this.$el.remove();
    }
})

var view = new MyView();
document.querySelector("#main").append(view.el);