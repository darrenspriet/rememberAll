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
    'click #searchButton': 'searchUser',
    'submit .goto_bonify':'startGame'
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
    //  that.$el.html(JST['highscore']()).trigger('create');
  }
});
  },
  searchUser: function(ev){
    console.log(ev);
    ev.preventDefault();
    var that = this;
    $.ajax( {
      type: "POST",
      url: "/search",
      data: {"username": $("#username").val()},
      success: function(response) {
        var object = response;
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
        console.log("error");
      }
    });

  },
  startGame: function(){

  },
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
