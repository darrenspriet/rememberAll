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
    var source = $("#index_template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template).trigger('create');
  }
});

var HighScoreView = Backbone.View.extend({
  el:'body > .container',
  events: {
    'click #searchButton': 'searchUser'
  },
  render: function() {
    var user = new User();
    var that = this;
    user.fetch({
      success: function(response) {
       var object = response.attributes;

       var highscoreArray = [];
       for (var element in object) {
          var scores;
          scores = {"username": object[element].username, "highscore": object[element].highscore};
          highscoreArray.push(scores);
        }
        
    var source = $("#highscore_template").html();
    var template = Handlebars.compile(source);
    that.$el.html(template({"highscoreArray":highscoreArray})).trigger('create');
  },
      error: function(){
      console.log("Something failed here....");
      }
    });
  },
  searchUser: function(ev){
    console.log(ev);
    ev.preventDefault();
    var that = this;
    if($('#username').val() !== ''){
    $.ajax( {
      type: "POST",
      url: "/search",
      data: {"username": $("#username").val()},
      success: function(response) {
        var object = response;


       var highscoreArray = [];
       for (var element in object) {
          var scores;
          scores = {"username": object[element].username, "highscore": object[element].highscore};
          highscoreArray.push(scores);
        }
        
    var source = $("#highscore_template").html();
    var template = Handlebars.compile(source);
    that.$el.html(template({"highscoreArray":highscoreArray})).trigger('create');

      },
      error: function(){
        console.log("error");
      }
    });
    }
    else{
      this.render();
    }
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
    var username = userDetails.username;
    var highscore = score;
    var user = new AddUser();
    var newUserDetails = {"username": username, "highscore": highscore};
    var that = this;
    user.save(newUserDetails, {
      success: function(){
        app_router.navigate("#/highscore", true);
      },
      error: function(){
        console.log("Failed to add user");
      }
    });
  },
  render: function(){

    var source = $("#gameover_template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template({"score":score})).trigger('create');
  }
});

var BonifyView = Backbone.View.extend({
  el: 'body > .container',
  events:{
    'click #guess': 'makeGuess',
    'click #goto_bonify':'startGame'
  },
  makeGuess: function(ev){
    ev.preventDefault();
    var guess = $('#guessInput').val().toUpperCase();
    if(guess != text){
        console.log("Your Score is: " + score);
        app_router.navigate("#/gameover", true);

        }
    else{
        score+=1;
        currText = '';
        makeid();
        if(score>1){
        var source = $("#bonify_template").html();
        var template = Handlebars.compile(source);
        this.$el.html(template({"currText": currText, "score": score})).trigger('create');
      }
        else{
        var source = $("#bonify_template").html();
        var template = Handlebars.compile(source);
        this.$el.html(template({"currText": currText})).trigger('create');
      }
    }
   },
  startGame: function(){
    this.render();
  },
  render: function(){
    newGame();
      var source = $("#bonify_template").html();
      var template = Handlebars.compile(source);
      this.$el.html(template({"currText": currText, "score": score})).trigger('create');  }
});
