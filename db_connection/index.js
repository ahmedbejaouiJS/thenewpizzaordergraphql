var mysql = require('mysql');

require('dotenv').config()
 

var con = mysql.createConnection(process.env.DATABASE_URL);

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!")
});

module.exports = con