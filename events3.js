var Dialog = require('./my-module/dialog');

var dialog = new Dialog();

dialog.on('Hello', function (data) {
    console.log('có 01 lời chào mới', data);
});
dialog.say('John Doe');

