let promise = new Promise(function(resolve,
reject) {
setTimeout(function() {
resolve('Success!');
}, 1000);
});
promise.then(function(value) {
console.log(value); // Logs 'Success!'
// after 1 second
 });