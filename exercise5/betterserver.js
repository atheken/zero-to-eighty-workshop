
var http = require('http');
var express = require('express');

var app = express();

//define a primative logging middleware
app.use(function(request, response, done){
  console.log(request.path);
  done();
});

//handle a '/datetime' request.
app.use(function(req, res, done){
    if(req.path === '/datetime'){
      res.write(new Date().toString());
      res.end();
    }
    else{
      done();
    }
});

//this port is arbitrary, but if you deploy to heroku (for example),
//your app will be given a port to listen on via environment variables.
var port = 4514;
//start the http server.
console.log('Starting the server on port '+ port +'...');
http.createServer(app).listen(port);