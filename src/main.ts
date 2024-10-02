//array types

let stringarr = ["one", "hey", "moiz"];

let guitars = ["strat", "les paul", 984];

let someshit = [true, "hello ", 489];

stringarr[0] = "hello";

stringarr.push("hello");

let brands: string[] = []; //how to assin the type of array in TS

brands.push("hello");

//Tuple are positing restricing types of array

let myTuple: [string, number, boolean] = ["hello", 9, true];

let mixed = ["hi", 1, false];

//Objects

let myobj: object;

myobj = [];

console.log(typeof myobj);

const exObj = {
  prop1: "Data",
  prop2: false,
};


// Type, interface is like mongoose model 
interface gruitarist {
    name? : string ,
    actibe : boolean, //optional property using ? sign 
    albums : (string | number)[]

}


let evh : gruitarist =  {

    name : "moiz",
    actibe : true,
    albums : [389 , "sugarleed"]

}


const greetGuitarist = (gutarist : gruitarist) =>{
    

    return `hello ${gutarist.name?.toLocaleLowerCase} ! `

}


console.log(greetGuitarist(evh))



//Enums
//"Unlike most other languages, Enums are not a type-level addistion  to JavaScript but somthing added to the language and runtim
// what are enums? : enums are a way to define a set of named constants.

enum Grade {

    U ,
    D ,
    C ,
    B ,
    A ,

}

console.log(Grade.A)