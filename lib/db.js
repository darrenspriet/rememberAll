var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
/*module.exports = {
    find: function(name, query, limit, callback) {
        db.collection(name).find(query)
        .sort({highscore: 1})
        .limit(10)
        .toArray(callback);
    }, 
};*/
// Connect to cloud database

var username = "localhost";//"darren"
var password = "27017";//"1234";
var address = "/rememberalldb";//'@ds047458.mongolab.com:47458/rememberalldb';
connect();
// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}