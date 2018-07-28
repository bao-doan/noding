function readDatabase(callback) {
    var user = {
        name: 'John Doe'
    }
    callback(user);
}
readDatabase(function(data) {
    console.log(' Read done Callback');
    console.log(' - Data: ',data)
});
readDatabase(function(data) {
    console.log(' Read done Callback 2');
    console.log(' - User name: ', data.name);
});