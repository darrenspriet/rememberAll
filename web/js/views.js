$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var IndexView = Backbone.View.extend({
    render: function() {
        $.get(getURL("")+"webresources/com.can.tire.jumpstart.entities.user/isAuthenticated", function(value) {
            if (value)
            {
                window.location.replace(top.location.href = "../jumpstartSocial/#/main_feed");
            }
            else
            {
                $('#page_container').html(JST['index']()).trigger('create');
            }
        });
        return this;
    }
});
