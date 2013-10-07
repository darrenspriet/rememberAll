var text = '';
var currText = '';
var score = 0;
var makeid = function(){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//abcdefghijklmnopqrstuvwxyz0123456789";
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
