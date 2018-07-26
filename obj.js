var obj = {
    sayHello:"Hello",

}
console.log(obj.sayHello);
console.log(obj['sayHello']);
// Function & Array
var arr = [];
arr.push(function() {
    console.log('Helo NodeJS 1');
});
arr.push(function() {
    console.log('Helo NodeJS 2');
});
arr.push(function() {
    console.log('Helo NodeJS 3');
});
arr[0]();
console.log('==============');
arr.forEach(function(item) {
    item();
});
console.log('==============');
arr.forEach((x)=> x());