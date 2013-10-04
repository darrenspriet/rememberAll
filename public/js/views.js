var IndexView = Backbone.View.extend({
  el:'body > .container',
  events: {
    'submit .goto_bonify':'startGame'
  },
  startGame: function(){

  },
  render: function() {
    this.$el.html(JST['index']()).trigger('create');
    return this;

  }
});

var HighScoreView = Backbone.View.extend({
  el:'body > .container',
  events: {
    'submit .search': 'searchUser',
    'submit .goto_bonify':'startGame'
  },
  searchUser: function(){

  },
  startGame: function(){

  },
  render: function() {
    var user= new User();
    var that = this;
    user.fetch({
      success: function(response) {
        console.log(response.attributes[0]);
        that.$el.html(JST['highscore']()).trigger('create');
        return this;
      },
      error: function(){
        console.log("Something failed here....");
        that.$el.html(JST['highscore']());
      }
    });
  }
});

var GameoverView = Backbone.View.extend({
  el: 'body > .container',
  events: {
    'submit .goto_bonify':'startGame',
    'submit .addHS': 'addHS'
  },
  startGame: function(){

  },
  addHS: function(){

  },
  render: function(){
    this.$el.html(JST['gameover']());
  }
});

var BonifyView = Backbone.View.extend({
  el: 'body > .container',
  events:{
    'submit .guessLetter': 'makeGuess',
    'submit .goto_bonify':'startGame'
  },
  makeGuess: function(){

  },
  startGame: function(){

  },
  render: function(){
    this.$el.html(JST['bonify']());
  }
});