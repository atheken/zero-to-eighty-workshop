var http = require('http');
var express = require('express');

var key = '';
if(key !== ''){
  var rottenClient = require('rotten-api')(key);

  var app = express();
  app.set('view engine', 'jade');

  //use the standard logger middleware,
  //which is better than our primative one.
  app.use(express.logger());

  //parse requests into params.
  app.use(express.bodyParser());

  //render a template on the root path.
  app.get('/', function(req, res, done){
      //"jade" is the default view engine,
      //and looks in the "views" directory.
      res.render('index', {date : new Date(), name: (req.param('name') || '') });
  });

  //a simple API endpoint for finding movies.
  app.get('/listmovies', function(req,res, done){

    //get the query from the request.
    var search = req.param('query');

    //start an async request to the Rotten Tomatoes API.
    rottenClient.search(search, function(err, results){
      //some results came back.. at some point, and here were are.
      if(!err){
        res.json(results.movies || []);
      }else{
        //send an empty array..
        //this is a lazy recovery strategy.. but it works.
        res.json([]);
        console.error(err);
      }
    });
  });

  //how would you do a "favoriting" feature? POST? save to a JSON file?

  //serve static files if no match.
  app.use(express.static(__dirname + '/public'));

  //for all other requests, respond with a 404.
  app.use(function(req,res){
    res.status(404).end('The requested path could not be found.');
  });

  //start the server
  var port = 4514;
  console.info('Starting the server on port '+ port +'...');
  http.createServer(app).listen(port);
}else{
  console.info("ERROR: The please obtain a Rotten Tomatoes API key and set it on line 2 before using this app.")
}