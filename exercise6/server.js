var http = require('http');
var express = require('express');

var app = express();
app.set('view engine', 'jade');

//use the standard logger middleware,
//which is better than our primative one.
app.use(express.logger());

//parse POSTED files/bodies into params.
app.use(express.bodyParser());

//render a template on the root path.
app.get('/', function(req, res, done){
    // "jade" is the default view engine,
    // and looks in the "views" directory.
    res.render('index', {date : new Date(), name: (req.param('name') || '') });
});

//serve static files if no routes match.
// "__dirname" is a special variable.
app.use(express.static(__dirname + '/public'));

//for all other requests, respond with a 404.
app.use(function(req,res){
  res.status(404).end('The requested path could not be found.');
});

//start the server
var port = 4514;
console.log('Starting the server on port '+ port +'...');
http.createServer(app).listen(port);
