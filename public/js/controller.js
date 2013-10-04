var text = '';
var currText = '';
var score = 0;
var makeid = function(){
    var possible = "abcdefghijklmnopqrstuvwxyz";//ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    currText += possible.charAt(Math.floor(Math.random() * possible.length));
    text+=currText;
    console.log(text);
};

var newGame = function(){
    currText = '';
    text = '';
    makeid();
    score = 0;
};

var makeGuess = function(cb){
    var guess = $('#guessInput').val();
    console.log(guess);
    if(guess != text){
        console.log("Your Score is: " + score);
        cb(false);
    }
    else{
        score+=1;
        currText = '';
        makeid();
        cb(true);
    }
};

