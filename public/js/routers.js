var Router = Backbone.Router.extend({
    routes:{
        "":"index",
        "highscore":"highscore",
        "bonify": "bonify",
        "gameover": "gameover"
    }
 });
 
/* START ROUTER */
var index = new IndexView();
var highscore = new HighScoreView();
var gameover = new GameoverView();
var bonify = new BonifyView();
var app_router = new Router();

app_router.on('route:index', function(){
    console.log("Router is taking you to index page");
    index.render();
});

app_router.on('route:highscore', function(){
    console.log("Router is taking you to highscore page");
    highscore.render();
});

app_router.on('route:bonify', function(){
    console.log("Router is taking you to bonify page");
    bonify.render();
});

app_router.on('route:gameover', function(){
    console.log("Router is taking you to gameover page");
    gameover.render();
});
