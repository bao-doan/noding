var buff = new Buffer('Xin Chào Các Bạn!', 'utf-8');
console.log(buff);
console.log(buff.toString()); // utf-8
console.log(buff.toString('ascii'));
console.log(buff.toJSON());
buff.write('Bảo');
console.log(buff.toString());
