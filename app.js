var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/profile:id', function(req,res){
  res.send('You request to see a profile with id of' + req.params.id);
});
app.listen(3000);
