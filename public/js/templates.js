
window.JST = {};

window.JST['index'] = _.template(
    "<div class='center'>"+
    "<h3>Welcome to Bonified</h3>"+
    "<p>"+
    "<a href='#/highscore'>"+
    "<button class='btn btn-large'>Check out the High Scores</button>"+
    "</a>"+
    "</p>"+
    "<form method='post' action='/bonify'>"+
    "<p>"+
    "<div>"+
    "<input type='submit' value='Excited to get BONIFIED?' class='btn btn-large'></input>"+
    "</div>"+
    "</p>"+
    "</form>"+
    "<h4>Extras</h4>"+
    "<div class='xin'>"+
    "<span class='label'>Athours:</span>"+
    "Darren and Stefan <br/>"+
    "<span class='label'>Languages used:</span>"+
    "Node.js, Express.js, Html5, Javascript, Mongoose, MongoDB <br/>"+
    "<span class='label'>Instructions:</span>"+
    "Click 'Excited to get BONIFIED?' to get started. This is a memory game where you have to remember the letters you already have typed while constantly added one more letter. <br/>"+
    "</div>"+
    "</div>"
);

window.JST['highscore'] = _.template(
    "<div class='center'>"+
"<form action='/search' method='post'>"+
    "<div>"+
        "<label>Search for your highscore:</label>"+
        "<input type='text' name='username' placeholder='enter your username' autofocus class='input-block-level'/><br/>"+
    "</div>"+
   "<input type='submit' value='Search!' class='btn btn-primary' ></input>"+
"</form>"+
"<form method='post' action='/bonify'>"+
"<p>"+
"<input type='submit' value='Start a new game?' class='btn'></input>"+
"</p>"+
"</form>"+
"</div>"
);

window.JST['bonify'] = _.template(
"<div class='center'>"+
"<h3> LETS GET BONIFIED!!! </h3>"+
"<form action='/guess' method='post'>"+
"<div>"+
"<input type='text' name='guessInput' placeholder='input your guess here' autocomplete='off' autofocus ></input>"+
"</div>"+
"<button id='guess' name='guess' class='btn btn-primary'>Guess</button>"+
"</form>"+
"<form action='/bonify' method='post'>"+
"<input type='submit' value='Restart' class='btn'></input>"+
"</form>"+
"<p>"+
"<a href='/'>"+
"<button class='btn'>Home</button>"+
"</a>"+
"</p>"+
"</div>"
    );

window.JST['gameover'] = _.template(
"<div class='center'>"+
"<h3> GAMEOVER :'( </h3>"+
"<form method='post' action='/bonify'>"+
"<p>"+
"<input type='submit' value='Start a new game?' class='btn'></input>"+
"</p>"+
"</form>"+
"<p>"+
"<a href='/highscore'>"+
"<button class='btn'>See if ya made it to the High Scores!</button>"+
"</a>"+
"</p>"+
"</div>"+
"<div class='center'>"+
"<form action='/signup' method='post'>"+
"<div>"+
"<label>Enter one to three letters to be added to the highscores:</label>"+
"<input type='text' name='username' placeholder='username' autofocus/><br/>"+
"</div>"+
"<input type='submit' value='Add Highscore' class='btn btn-primary'/></div>"+
"</form>"+
"</div>"
    );