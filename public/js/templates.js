

window.JST = {};

window.JST['index'] = _.template(
"<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
"<h3>Welcome to Bonified</h3>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn btn-large'>Check out the High Scores</button>"+
"</a>"+
"</p>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn btn-large'>Excited to get BONIFIED?</button>"+
"</a>"+
"</p>"+
"<h4>Extras</h4>"+
"<div class='xin'>"+
"<span class='label'>Athours:</span>"+
"Darren and Stefan <br/>"+
"<span class='label'>Languages used:</span>"+
"Node.js, Express.js, Html5, Javascript, Mongoose, MongoDB <br/>"+
"<span class='label'>Instructions:</span>"+
"Click 'Excited to get BONIFIED?' to get started. This is a memory game where you have to remember the letters you already have typed while constantly added one more letter. This game is case insensitive<br/>"+
"</div>"+
"</div>"
);

window.JST['highscore'] = _.template(
    "<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
    "<div><h3>HIGHSCORES</h3></div>"+
    "<table class='table table-bordered table-striped table-condensed'>"+
    "<% _.each(highscoreArray, function(Array) { %>"+
    "<tr><td><%=Array[0]%></td><td><%=Array[1]%></td></tr>"+
     "<% }); %>"+
    "</table></div>"+
"<div class='center'>"+
"<div class='center'>"+
"<h3>Welcome to Bonified</h3>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn btn-large'>Check out the High Scores</button>"+
"</a>"+
"</p>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn btn-large'>Excited to get BONIFIED?</button>"+
"</a>"+
"</p>"+
"<h4>Extras</h4>"+
"<div class='xin'>"+
"<span class='label'>Athours:</span>"+
"Darren and Stefan <br/>"+
"<span class='label'>Languages used:</span>"+
"Node.js, Express.js, Html5, Javascript, Mongoose, MongoDB <br/>"+
"<span class='label'>Instructions:</span>"+
"Click 'Excited to get BONIFIED?' to get started. This is a memory game where you have to remember the letters you already have typed while constantly added one more letter. There is no case sensitivity<br/>"+
"</div>"+
"</div>"
);

window.JST['highscore'] = _.template(
"<div class='center'><div><h3>HIGHSCORES</h3></div>"+
"<table class='table table-bordered table-striped table-condensed'>"+
"<% _.each(highscoreArray, function(Array) { %>"+
"<tr><td><%=Array[0]%></td><td><%=Array[1]%></td></tr>"+
"<% }); %>"+
"</table></div>"+
"<div class='center'>"+
"<div class='center'>"+
"<form class='search'>"+
"<div>"+
"<label>Search for your highscore:</label>"+
"<input type='text' id='username' placeholder='enter your username' autocomplete='off' autofocus class='input-block-level'/><br/>"+
"</div>"+
"<button id='searchButton' value='Search!' class='btn btn-primary' >Search!</button>"+
"</form>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn'>Start a new game?</button>"+
"</a>"+
"</p>"+
"</div>"
);

window.JST['bonify'] = _.template(
"<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
"<h3> LETS GET BONIFIED!!! </h3>"+
"<p><%= currText %></p>"+
"<p>Your current score is: <%= score %></p>"+
"<form class='guessLetter'>"+
"<div>"+
"<input type='text' id='guessInput' placeholder='input your guess here' autocomplete='off' autofocus ></input>"+
"</div>"+
"<button id='guess' name='guess' class='btn btn-primary'>Guess</button>"+
"</form>"+
"<p>"+
"<button value='Restart' id='goto_bonify' class='btn'>Restart</button>"+
"</p>"+
"<p>"+
"<a href='#/'>"+
"<button class='btn'>Home</button>"+
"</a>"+
"</p>"+
"</div>"
);

window.JST['gameover'] = _.template(
"<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
"<h3> GAMEOVER :'( </h3>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn'>Start a new game?</button>"+
"</a>"+
"</p>"+
"<% if (score > 0) { %>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn'>See if ya made it to the High Scores!</button>"+
"</a>"+
"</p>"+
"<p>Your current score is: <%= score %></p>"+
"<form class='addHS'>"+
"<div>"+
"<label>Enter one to three letters to be added to the highscores:</label>"+
"<input type='text' name='username' placeholder='username' autocomplete='off' autofocus /><br/>"+
"</div>"+
"<input type='submit' value='Add Highscore' class='btn btn-primary'/></div>"+
"</form>"+
"</div>"+
"<% } else { %>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn'>Check out the High Scores!</button>"+
"</a>"+
"</p>"+
"<% } %>"
);
