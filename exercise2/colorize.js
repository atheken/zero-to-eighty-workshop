var ac = require('ansi-colorizer');
var colorizer = ac.configure({color:true, bright : true});

var sentence = "The quick brown fox jumps over the lazy dog.";

sentence = sentence.replace(/a/g, colorizer.red('a'));
sentence = sentence.replace(/e/g, colorizer.yellow('e'));
sentence = sentence.replace(/i/g, colorizer.green('i'));
sentence = sentence.replace(/o/g, colorizer.purple('o'));
sentence = sentence.replace(/u/g, colorizer.cyan('u'));
sentence = sentence.replace(/y/g, colorizer.grey('y'));

console.log(sentence);
