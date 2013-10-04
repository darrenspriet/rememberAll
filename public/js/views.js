var IndexView = Backbone.View.extend({
  render: function() {
   $('#page_container').html(JST['index']()).trigger('create');
   return this;

}
});

var HighScoreView = Backbone.View.extend({
   render: function() {
    var user= new User();
    user.fetch({
        success: function(response) {
            console.log(response.attributes[0]);
            $('#page_container').html(JST['highscore']()).trigger('create');
           return this;
       }
   });
}
});
