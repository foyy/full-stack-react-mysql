const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const insert = require ('../database-mysql/index.js').insert

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/',function(req,res){
  console.log('yo bros')
  res.status(200).send('u gucci boi')
});

app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     console.log('There was an error in the request')
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  
  res.status(200).send('connection established',req)
});



app.post('/items',function(req,res){
  console.log('here is my request body: ',req.body.text);
   
insert(function (err,result) {
  if(err) {
    console.log('DB-SERVER FAILED',err)
  } else {
    console.log('DB-SERVER SUCCESS! HERE IS RESULT!',result)
  }
})

res.send('SERVER->CLIENT:post request working from server back to client');

});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

