"use strict";
// i dont wanna give up on this one , i wanna be ... A full stack developer
//convert to more or less specific 
let a = 'hello';
let b = a; //less specific keyword
let c = a; //more specific keyword
let d = 'world'; //tagged template literal
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//type script  assersion is easy  , assesrion is focring your
let myVal = addOrConcat(2, 2, 'concat'); //assering is happening here 
//asser
let nextVal = addOrConcat(2, 2, 'concat');
10;
//the DOM
// ! means not a null , it removes a null possiblity "!" > not null 
const img = document.querySelector('#myID');
const myimg = document.getElementById('#myID');
const dimg = document.querySelector('#myID'); //these tags wont work for react 
