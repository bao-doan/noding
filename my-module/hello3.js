function Person() {
    this.mess = ' Hello NodeJS !!!';
    this.sayHello = function() {
        console.log(this.mess);
    }
}
module.exports = new Person();