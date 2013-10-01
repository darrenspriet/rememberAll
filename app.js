
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var user = require('./routes/user');
 var http = require('http');
 var path = require('path');
 var User = require('./models/User.js');
 var fs = require('fs');
 var $ = require('jquery');
 var _ = require('underscore');

 var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var error2 = false;
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/form', function(req, res) {
    if(error2){
          res.redirect('/'); 
          error2= false;     
    }
    else{
    fs.readFile('./form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.end(content, 'utf-8');

        }
    });
    }
});



app.post('/signup', function(req, res) {
    var username = req.body.username;
    var highscore = req.body.highscore;
    User.addUser(username, highscore, function(err, user) {
        if (err) {
            error2 = true;
        }
        
        res.redirect('/form');
          
    }); 
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
