var obj = {
    name: 'John Doe',
    say: function(param1, param2) {
        console.log(`Hello, ${this.name}`);
        console.log(`Params = ${param1} & ${param2}`);
    }
}
var admin = Object.create(obj);
var stranger = Object.create(obj);
admin.name = 'Bao Doan';
stranger.name = 'Some One';

obj.say('Player 01', 'Player 02');
obj.say.call(admin, 'Boss 01', 'Boss 02');
obj.say.apply(stranger, ['Friend 01', 'Friend 02'])
// With the call() & apply() method, you can write a method that can be used on different objects.
// With call() & apply(), an object can use a method belonging to another object.
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// "Strict Mode": In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.