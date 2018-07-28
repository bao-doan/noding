var fs = require('fs');
readme = fs.readFileSync(__dirname + "/file/readme.txt", 'utf-8');
// __dirname dung de lay address
// readFileSync chi nen su sung load cac file config truoc khi cac tinh nang khac duoc thuc thi
console.log(readme);
fs.readFile(__dirname + '/file/readme.txt', '', (err, data) => {
    if(err) {throw err;} else {console.log('No error !')}
    console.log(data);
})
console.log('Done !');