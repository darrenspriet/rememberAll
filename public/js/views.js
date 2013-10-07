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
  render: function() {
    this.$el.html(JST['index']()).trigger('create');
    return this;
  }
});

var HighScoreView = Backbone.View.extend({
  el:'body > .container',
  events: {
    'click #searchButton': 'searchUser'
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

  }
});

var GameoverView = Backbone.View.extend({
  el: 'body > .container',
  events: {
    'submit .addHS': 'addHS'
  },
  addHS: function(ev){
    ev.preventDefault();
    var userDetails = $(ev.currentTarget).serializeObject();
    var user = AddUser();
    var that = this;
    user.save(userDetails, {
      success: function(){
        console.log(userDetails);
      },
      error: function(){
        console.log("Failed to add user");
      }
    });
  },
  render: function(){
    this.$el.html(JST['gameover']({score:score})).trigger('create');
  }
});

var BonifyView = Backbone.View.extend({
  el: 'body > .container',
  events:{
    'click #guess': 'makeGuess',
    'submit .goto_bonify':'startGame'
  },
  makeGuess: function(ev){
    ev.preventDefault();
    var guess = $('#guessInput').val();
    console.log("Guess is: " + guess);
    console.log("Text is: " + text);
    if(guess != text){
        console.log("Your Score is: " + score);
        
       // this.$el.html(JST['gameover']({score: score})).trigger('create');
       app_router.navigate("#/gameover", true);
    }
    else{
        score+=1;
        currText = '';
        makeid();
        this.$el.html(JST['bonify']({currText: currText, score: score})).trigger('create');

    }
   },
  startGame: function(){
    this.render();
  },
  render: function(){
    newGame();
    this.$el.html(JST['bonify']({currText: currText, score: score})).trigger('create');
  }
});
