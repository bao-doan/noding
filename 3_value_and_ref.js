function changeByValue(b) {
    b = 2;
}
var a = 1;
changeByValue(a);
console.log("a = " + a);

function changeByRef(obj) {
    obj.prop1 = function() {
        //do nothing
    }
    obj.prop3 = {};
    obj.prop4 = 100;
} 
var c = {};
c.prop1 = {};
c.prop2 = {};
changeByRef(c);
console.log(c);
