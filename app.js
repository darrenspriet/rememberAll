
/**
 * Module dependencies.
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , path = require('path')
 , User = require('./models/User.js')
 , fs = require('fs')
 , $ = require('jquery')
 , _ = require('underscore')
 , Backbone = require('backbone');

 var app = express();

//conf.ports.server;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use("/public", express.static(__dirname + '/public'));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res){
    fs.readFile('./index.html', function(error, content){
        if(error){
            res.writeHead(500);
            res.end();
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        }
    });
});
app.get('/users', user.list);

app.get('/getHighScores', function(req,res){

    User.getTopHighscore(function(err, collection){
        if(err != null){
            console.log("ERRORRRR!!!!");
            res.send(err);
        }
        else{
            console.log("Collection is gotten");
            res.send(collection);
        }
    });
});

app.get('/form', function(req, res) {
    fs.readFile('./form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<div class="center"><div>'+ formString +'</div></div>' + content, 'utf-8'); 
            formString='';       
        }


    });
    
});

app.post('/guess', function(req, res){
    var guess = req.body.guessInput;
    if(guess != text){
        console.log("Your Score is: " + score);

        res.redirect('/gameOver');
    }
    else{
        score+=1;
        currText = '';
        makeid();
        res.redirect('/bonify');
    }
});

app.post('/search', function(req, res){

    var username = req.body.username;

     User.findOneHighscore(username, function(err, collection){

        if(err != null){
                    console.log("ERRORRRR!!!!");
                    res.send(err);
                }
                else{
                    console.log(collection);
                    res.send(collection);
                }
     });
});

app.post('/signup', function(req, res) {
    var username = req.body.username;
    var score = req.score;
    console.log("Username is: " + username + ", score is: "+score);
    User.addUser(username, score, function(err, user) {
        if (err) {   
            console.log(err);    
            res.send(err);
        }
        else{
            res.send(user);
        }
        
    }); 
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
