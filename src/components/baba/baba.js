var mysql = require('mysql');
var os = require('os');
var conn = mysql.createConnection({
  host : 'd3.czentzrlzljh.ap-northeast-2.rds.amazonaws.com',
  port : '3306',
  user : 'root',
  password : 'wnsdud12',
  database : 'DB'
});

conn.connect( (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Database is connected..\n\n');
  }
});

var sql = 'SELECT * FROM DB.babarian_item_ratio';
conn.query(sql, (error, rows, fields) => {
  if (error) {
    console.log(error);
  } else {
    console.log('rows',rows);
  }
});

conn.end();