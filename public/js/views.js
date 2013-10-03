var IndexView = Backbone.View.extend({
  render: function() {
     $('#page_container').html(JST['index']()).trigger('create');
      return this;

  }
});

var HighScoreView = Backbone.View.extend({
  render: function() {
     $('#page_container').html(JST['highscore']()).trigger('create');
      return this;

  }
});