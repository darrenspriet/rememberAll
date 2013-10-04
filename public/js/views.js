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
     var object = response.attributes;

     var highscoreArray = [];
     for (var element in object) {
      var array = [];

      array.push(object[element].username);
      array.push(object[element].highscore);
      highscoreArray.push(array);
    }
    
    $('#page_container').html(JST['highscore']({"highscoreArray":highscoreArray})).trigger('create');
    return this;
  }
});
}
});
