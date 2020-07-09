var mysql = require('mysql');

require('dotenv').config()


var con = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DB
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!")
});

module.exports = con
