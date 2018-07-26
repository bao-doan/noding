// Example for import custom Module
var bar = require('./my-module/bar.js');
bar();
// Exmaple for First-class Function
function greeting() {
    return ' Greeting!';
}
function printGreeting(fn) {
    console.log(fn);
}
printGreeting(greeting());
// Example for module.exports = sayHello
var hello1 = require('./my-module/hello1');
hello1();
// Exmaple for module.exports.sayHello = function(){}
var hello2 = require('./my-module/hello2');
hello2.sayHello();
// Example for module.exports = new Person();
var hello3 = require('./my-module/hello3');
hello3.sayHello();
hello3.mess = " Hello NodeJS !!! (Changed)"
hello3.sayHello();
// Example for module.exports = Person;
var Hello4 = require('./my-module/hello4');
var hello4 = new Hello4();
hello4.sayHello();
// Example for module.exports = { sayHello: sayHello }
var hello5 = require('./my-module/hello5').sayHello;
hello5();





