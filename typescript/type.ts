export class Hero {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let hero = new Hero('big boss', 60);
console.log(`name = ${hero.name} age = ${hero.age}`)