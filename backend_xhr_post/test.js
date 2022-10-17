var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var formidable = require('express-formidable');
var cors = require('cors')

app.use(cors());
//app.use(bodyParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); 
app.use(formidable())

app.post('/test', function (req, res) {
  console.log(req.fields);
  res.json({success : true});
});

app.listen(8080);