var EventEmitter = require('events');
var util = require('util');
// Setup for Dialog
function Dialog() {
    this.mess = 'Hello Worlds!';
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function(data) {
    console.log(this.mess, data);
    this.emit('Hello', data);
}
// End of Setup for Dialog, and create an instance of Dialog
var dialog = new Dialog();

dialog.on('Hello', function(data) {
    console.log('có 01 lời chào mới', data);
});
dialog.sayHello('John Doe');

