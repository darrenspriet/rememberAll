var db = require('../lib/db');
var validate = require('mongoose-validator').validate;

var UserSchema = new db.Schema({
    username : {
        type: String, 
        required: true,
        validate: validate('len', 1, 3)
    }
    , highscore : Number
});
var MyUser = db.mongoose.model('User', UserSchema);
// Exports
module.exports.addUser = addUser;
module.exports.getTopHighscore = getTopHighscore;
// Add user to database
function addUser(username, highscore, callback) {
    var instance = new MyUser();
    instance.username = username;
    instance.highscore = highscore;
    instance.save(function (err) {
        if (err) {
            callback(err);
            console.log("Failed to add highscore");
        }
        else {
            callback(null, instance);
            console.log(instance);
        }
    });
}

function getTopHighscore(callback){
    
    MyUser.find(
        null, 
        null, 
        {
            limit: 10,
            sort:{
                highscore: -1
            }
        }, 
        function(err, collection){
            if(err != null){
                callback(err);
                
                console.log("Failed to find highscores");
            }
            else{

                callback(collection);
            }
    });
}
