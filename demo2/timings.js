//Don't repeat yourself.
var log = function(message){
  console.log('[' + new Date().toLocaleTimeString() + '] ' + message);
};

var intervalCalls = 0;
//every 5 seconds, we want to be reminded of the time.
setInterval(function(){
  log('Hello from setInterval. Called ' + (++intervalCalls) + ' times.');
}, 5000);

//run the a function exactly once, after no delay.
setTimeout(function(){
  log('Hello from "setTimeout", after no delay.');
},0);

process.nextTick(function(){
  log('Hello from "nextTick", which runs as soon as the current run loop ends.');
});

log('Ending of this event loop.');
