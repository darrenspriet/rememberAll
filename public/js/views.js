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
  searchUser: function(ev){
    ev.preventDefault();
    var userDetails = $(ev.currentTarget).serializeObject();
    var user = new SingleUser();
    user.save(userDetails, {
      success: function(user){
        console.log(userDetails);
      },
      error: function(){
        console.log("FAILEEDDDLD!");
        console.log(userDetails);
      }
    });
  },
  startGame: function(){

  },
  render: function() {
    var user= new User();
    var that = this;
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
      that.$el.html(JST['highscore']({"highscoreArray":highscoreArray})).trigger('create');
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
