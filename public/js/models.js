
var User = Backbone.Model.extend({
    url: '/getHighScores'
});


var SingleUser = Backbone.Model.extend({
    url: '/search'
});

var AddUser = Backbone.Model.extend({
    url: '/signup'
});
