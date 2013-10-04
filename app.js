
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
var formString = '';

var searchString = '';
var text = '';
var currText = '';
var score = 0;
var makeid = function(){
        var possible = "abcdefghijklmnopqrstuvwxyz";//ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        currText += possible.charAt(Math.floor(Math.random() * possible.length));
        text+=currText;
        console.log(text);
};

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
app.get('/highscore', function(req, res){
    fs.readFile('./highscore.html', function(error, content){
        if(error){
            res.writeHead(500);
            res.end();
        }
        else{  
            res.writeHead(200, {'Content-Type': 'text/html'});
            User.getTopHighscore(function(err, collection){
                if(err != null){
                    console.log("ERRORRRR!!!!");
                }
                else{
                    var HTML= '<div class="center"><div><h3>HIGHSCORES</h3></div><table class="table table-bordered table-striped table-condensed">';
                    for(var i=0;i<collection.length; i++){
                        HTML += '<tr><td>'+ collection[i].username +'</td>';
                        HTML += '<td>'+ collection[i].highscore +'</td></tr>';
                    }

                    HTML +='</table></div>'
                    res.end(HTML+content + searchString, 'utf-8'); 
                }
            });
        }
    });
});

    
app.get('/bonify', function(req, res){
        fs.readFile('./bonify.html', function(error, content){
            if(error){
                res.writeHead(500);
                res.end();
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html'});

                res.end('<div class="center"><h4>' + currText + '</h4>' 
                    + '<div>Your current score is: ' + score + '</div></div>'
                    + content, 'utf-8');
            }
        });
    });
app.get('/gameOver', function(req, res){
    fs.readFile('./gameover.html', function(error, content){
        if(error){
            res.writeHead(500);
            res.end();
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            if(score <= 0){
                res.end(content, 'utf-8');
            }
            else{
                fs.readFile('./gameover2.html', function(error2, content2){
                    if(error2){
                        res.writeHead(500);
                        res.end();
                    }
                    else{
                        res.end(content + content2+ '<div class="center"><h3>'+formString+'</h3>' + '<h4>' +  'Your score is: '+ score + '<h4></div>', 'utf-8');
                        formString = '';
                    }
                });
            }
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

app.post('/bonify', function(req, res){
    currText = '';
    text = '';
    makeid();
    score = 0;
    res.redirect('/bonify');
});


app.get('/search', function(req, res){
    console.log("STEEP 1!");
    var username = req.body.username;
    console.log(req);
    console.log(username);
    User.findOneHighscore(username, function(err, user){

        if(err != null){
            console.log("Database error!");
        }
        else if(user == null){
            console.log("Failed to find user");
            searchString='You have no highscores yet!';
        }
        else{
            searchString='<div class="center"><h4>' + 'The score for: ' + user.username + ' is ' + user.highscore + '</h4></div>';
        }
        res.redirect('/highscore');
    });
});

app.post('/signup', function(req, res) {
    var username = req.body.username;
    var highscore = score;
    User.addUser(username, highscore, function(err, user) {
        if (err) {   
            console.log(err);    
            formString = 'Though shalt only use 1-3 characters';
        }
        else{
            score = 0;
        }
        res.redirect('/gameOver');

    }); 
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
