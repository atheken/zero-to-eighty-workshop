var fileSystem = require('fs');

console.log('Dictionary data loading. . .');
//Open and read a 1MB file from disk.
var content = fileSystem.readFileSync('./dictionary.txt');

//“1 year” later. . .
console.log('Dictionary loaded synchronously.');

//now, asynchronously.

//Send request for file.
fileSystem.readFile('./dictionary.txt', function(err, data){
	if(!err){
		console.log('Dictionary loaded.');
	}
});

//CPU is ready for more work immediately.
console.log('Dictionary data loading...');
