var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
module.exports = {
    find: function(name, query, limit, callback) {
        db.collection(name).find(query)
        .sort({_id: -1})
        .limit(limit)
        .toArray(callback);
    },
    findOne: function(name, query, callback) {
        db.collection(name).findOne(query, callback);
    }, 
};
// Connect to cloud database

var username = "darren"
var password = "1234";
var address = '@ds047458.mongolab.com:47458/rememberalldb';
connect();
// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}