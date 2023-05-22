"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.error(`I am ${this.name}.`);
    }
    tellMyAge() {
        console.error(`I am ${this.age} years old ! `);
    }
}
const pers1 = new person('John', 40);
const pers2 = new person('Mary', 35);
// cas de John
pers1.tellMyName();
pers1.tellMyAge();
// cas de Mary
pers2.tellMyName();
pers2.tellMyAge();
