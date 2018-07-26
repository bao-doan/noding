var Emitter = require('./my-module/emitter');
var emitter = new Emitter();
var eventConfig = require('./my-module/config').events;
emitter.on(eventConfig.BAD_SCORE, function(){
    console.log('Mot mon nao do bi diem kem');
});
emitter.on(eventConfig.BAD_SCORE, function(){
    console.log('Can phat thong bao toi phu huynh');
});
// Bang diem
 var scores = [10,4];
 for (s of scores) {
     if (s<5) {
         console.log(s, 'Diem thap qua');
         emitter.emit(eventConfig.BAD_SCORE);
     } else {
         console.log(s, 'Diem tot qua');
     }
 }