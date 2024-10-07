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
