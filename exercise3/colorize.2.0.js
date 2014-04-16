var fs = require('fs');
var ac = require('ansi-colorizer');

//configure the colorizer
var colorizer = ac.configure({color:true, bright : true});

//open the disctionary as text.
var dictionary = fs.createReadStream('./dictionary.txt',{encoding: 'utf-8'});

//every time there's chunk of data available, 
//process it and write it to stdout.
dictionary.on('data', function(chunk){
	var transformed = chunk.replace(/a/g, colorizer.red('a'));
	process.stdout.write(transformed);
});
