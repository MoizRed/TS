"use strict";
//array types
let stringarr = ["one", "hey", "moiz"];
let guitars = ["strat", "les paul", 984];
let someshit = [true, "hello ", 489];
stringarr[0] = "hello";
stringarr.push("hello");
let brands = []; //how to assin the type of array in TS
brands.push("hello");
//Tuple are positing restricing types of array
let myTuple = ["hello", 9, true];
let mixed = ["hi", 1, false];
//Objects
let myobj;
myobj = [];
console.log(typeof myobj);
const exObj = {
    prop1: "Data",
    prop2: false,
};
let evh = {
    name: "moiz",
    actibe: true,
    albums: [389, "sugarleed"]
};
const greetGuitarist = (gutarist) => {
    var _a;
    return `hello ${(_a = gutarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase} ! `;
};
console.log(greetGuitarist(evh));
//Enums
//"Unlike most other languages, Enums are not a type-level addistion  to JavaScript but somthing added to the language and runtim
// what are enums? : enums are a way to define a set of named constants.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
