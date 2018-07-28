var util = require('util');
function Person() {
    this.first = 'John';
    this.last = 'Doe';
}
Person.prototype.say = function () {
    console.log('Hello' + " " + this.first + " " + this.last);
}
function Student() {
    Person.call(this);
    // this = Student
    // we use 'this' to apply Person's method for Student object
    // then everything in Person will be in Student.
    this.id = '1234';
}
util.inherits(Student, Person);
var student = new Student();
student.say();
console.log(student.first, student.id);
var test = (param1, param2) => {
    return param1 + param2;
}
