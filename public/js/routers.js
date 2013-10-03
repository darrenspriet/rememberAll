var Router = Backbone.Router.extend({
            routes:{
                "index":"index",
                "highscore":"highscore",

            }
 });
 
/* START ROUTER */
var app_router = new Router();
 app_router.on('route:index', function(){
    console.log("Router is taking you to index page");
    index.render();

});

  app_router.on('route:highscore', function(){
    console.log("Router is taking you to highscore page");
    highscore.render();

});