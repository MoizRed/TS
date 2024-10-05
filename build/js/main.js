"use strict";
//literal types 
let myname;
let userName;
userName = "Amy";
//fucntions types are easy lmao
const add = (a, b) => {
    return a + b;
};
const logmsg = (message, ...args) => {
    console.log(message);
};
logmsg("hello", 3);
// function              (arg : type 1  arg: type 2) : return type
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, b) {
    return c * b;
};
//optional paramters 
//rest paramters 
//default param value  a:number = 10
const addAll = (a = 10, b, c, ...args) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b + args.reduce((prev, curr) => prev + curr);
    }
};
//never type
const createError = (errmsg) => {
    throw new Error(errmsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard 
