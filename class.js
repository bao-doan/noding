'use strict';
// Trong node.js 4 thi can phai 'user strict' moi su dung Class duoc
// Con node.js 10 thi bo di thay van binh thuong
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    say() {
        console.log('Hello, '+this.first+" "+this.last)
    }
}
var person = new Person('John','Doe');
person.say();

var person2 = new Person('Black', 'Jack');
person2.say();

console.log(person.__proto__);
console.log(person2.__proto__);
console.log(person.__proto__ === person.__proto__);