var _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);

var newResult = _.difference([2, 1], [2, 3]);
console.log(newResult);

// Collection
var users = [
    { "name": "John Doe", "age": 30, "active": true },
    { "name": "Tom Cruise", "age": 34, "active": true },
    { "name": "Bao Doan", "age": 23, "active": false },
]

var user = _.find(users, function (user) {
    return user.age < 32;
});
var user2 = _.filter(users, (user) => {
    return user.age < 32;
})
console.log(user);
console.log(user2);