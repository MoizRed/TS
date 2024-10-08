"use strict";
//visibility modifiers
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getage() {
        return `hello , im ${this.name}`;
    }
}
const dave = new Coder('dave ', "classic", 38);
console.log(dave.getage());
class webdev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getlang() {
        return 'hello im ' + this.lang;
    }
}
const sata = new webdev("mac", "sara", "lofi", 20);
class guitatist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return ` i ${action} ${this.instrument}`;
    }
}
const page = new guitatist("jummy", "guitar");
////////////////////////////////////////////////////////
class peeps {
    static getCount() {
        return peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++peeps.count;
    }
}
peeps.count = 0;
const John = new peeps("John");
const steve = new peeps("steve");
const aly = new peeps("aly");
console.log(peeps.count);
///////////////////////////////////////////////
class Bands {
    constructor() {
        this.datastate = [];
    }
    get data() { }
}
