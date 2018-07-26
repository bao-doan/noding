"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    function Hero(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hero;
}());
exports.Hero = Hero;
var hero = new Hero('big boss', 60);
console.log("name = " + hero.name + " age = " + hero.age);
