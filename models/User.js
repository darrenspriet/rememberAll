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
// Add user to database
function addUser(username, highscore, callback) {
    var instance = new MyUser();
    instance.username = username;
    instance.highscore = highscore;
    instance.save(function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, instance);
        }
    });
}

function getTopHighscore(callback){
    var instance = new MyUser();
    instance.find().exec(function(err, result){
            if(err){
                callback(err);
            }
            else{
                callback(instance);
            }
        });
}
//.sort({highscore: 1}).limit(10).toArray()