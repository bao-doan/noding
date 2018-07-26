// Example for util
var util = require('util');
var name = 'John';
var mess = util.format("Hello, %s", name);
util.log(mess);
console.log(mess);
console.log(util.isArray([]));
console.log(util.isArray({}));
// Example for url
var url = require('url');
var link = 'https://nodejs.org/dist/latest-v10.x/docs/api/url.html';
console.log(url.parse(link).protocol);
var link2 = 'https://nodejs.org/dist/latest-v10.x/docs/api/url.html#url_url_hash';
const checkhash = new URL(link2);
console.log(checkhash.hash);
