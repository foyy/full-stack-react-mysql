var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'theweez8',
  database : 'Albums'
});
		
var insert = function (callback) {
  var queryString = ''
  connection.query("INSERT INTO USER(username,password) VALUES('foyy', 'theweez8' )",function (err,result,fields){
     if(err) {
       console.log('SERVER-DB POST failed!',err)
     } else {
       console.log('SERVER-DB SUCCESS! HERE IS RESULT: ',result)
     }
  });
}


var selectAll = function(callback) {
  // connection.query('SELECT * FROM items', function(err, results, fields) {
  //   if(err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, results);
  //   }
  // });
};

module.exports.selectAll = selectAll;
module.exports.insert = insert;
