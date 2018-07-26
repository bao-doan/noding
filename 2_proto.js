function Person(name, pass) {
    this.name = name;
    this.pass = pass;
}
Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.getPass = function () {
    console.log('GetPass');
    return this.pass;
}
Person.prototype.getLevel = function () {
    return this.level;
}
Person.prototype.level = 'admin';
function User(name) {
    this.name = name;
}
User.prototype = new Person();
var person = new Person("Bao", "123456");
var user = new User("Khach hang", "654321");
console.log(`user ${JSON.stringify(user)}`);
console.log(`user level = ${user.getLevel()}`);
console.log(`user name = ${user.getName()}`);
console.log(`user pass = ${user.getPass()}`);

Date.prototype.vnformat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return `${dd}/${mm}/${yyyy}`;
}
var now = new Date();
var xms = new Date(2018, 11, 25);
console.log(`now = ${now.vnformat()}`);
console.log(`xms = ${xms.vnformat()}`);