var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'whdcks94',
    database: 'opentutorials',
    // multipleStatements: true
})
db.connect();
module.exports = db;