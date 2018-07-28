var EventEmitter = require('events');
module.exports = class Dialog extends EventEmitter {
    constructor() {
        super(); // Can phai co ham super()
        this.mess = 'Hello Worlds!';
    }
    say(data) {
        console.log(this.mess, data);
        this.emit('Hello', data);
    }
}