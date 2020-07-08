var mysql = require('mysql');

require('dotenv').config()
 

var con = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: "sql3352612",
  password: process.env.PASSWORD,
  database: 'sql3352612'
  
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!")
});

module.exports = con