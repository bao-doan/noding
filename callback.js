var firstFn = function() {
    console.log('I am First');
}
var secondFn = function() {
    setTimeout(firstFn, 5000);
    console.log('I am Second');
}
secondFn();
// Visit http://latentflip.com/loupe 
// to test CallStack, WebAPI, Callback Queue, Event Loop
