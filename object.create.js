var person = {
    first: "",
    last: "",
    full: function() {
        return this.first + " " + this.last;
    }
}
var User = Object.create(person);
User.first = 'John';
User.last = 'Doe';
User.fullName = User.full();

var Admin = Object.create(person);
Admin.first = 'Node';
Admin.last = 'JS';
Admin.fullName = Admin.full();

console.log(User.full(), Admin.full());
console.log(User, Admin);