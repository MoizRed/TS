"use strict";
// //default value of type script
// function showdata(name: string | null = "guest", age? : number , country : string = "algera" ) : string{
//     return `${name}  - ${age}  - ${country}`
// }
// console.log(showdata(null,987,"hi"))
//Learn Typescript In Arabic 2022 - #10 - Function Rest Parameter 
function addAll(...numbs) {
    let result = 0;
    //     for (let i = 0 ; i < numbs.length ; i ++ )
    // {
    //     result += numbs[i]
    // }
    numbs.forEach(nums => result += nums);
    return result;
}
/// to convert boolean  into number just multiple it or add plus or nagetive sign
console.log(addAll(1, 3, 6, 5, 5, -true * 1));
//learn Typescript In Arabic 2022 - #11 - Type Annotations With Anonymous And Arrow Function
/*
FUNCTION
- anonymous functoin
-arrow function
*/
const add = function (num1, num2) {
    return num1 + num2;
};
const hello = (num1, num2) => {
    return num1 + num2;
};
console.log(hello(1, 2));
let JOb = 'worker';
let hi = "hi";
hi = 3;
console.log(hi);
function Getactions(btns) {
    console.log(`action for button up is ${btns.up}`);
    console.log(`action for button right is ${btns.right}`);
    console.log(`action for button down is ${btns.down}`);
    console.log(`action for button left is ${btns.left}`);
}
Getactions({
    up: "up arrow",
    right: "right arrow",
    down: "down arrow",
    left: "left arrow",
    x: true
});
function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    }
    // Learn Typescript In Arabic 2022 - #15 - Data Types - Tuple
    /*
    
    Tuples is  an array with fixed LENGTH and types
    */
    let Article = [1, "TITLE", true];
    Article[1] = "hello";
    ///Learn Typescript In Arabic 2022 - #16 - Data Types - Void And Never
    // void functions never return anything
    // void functions will return undefined
    //RETURN TYPE NEVER RETURNS 
    //IT THROWS AN ERROR OR NEVER FINISHES RUNNING AT ALL "INFINITE LOOP "
    function show(msg) {
        while (true) {
            console.log(msg);
        }
        return;
    }
    // 0:14 / 5:01
    // Learn Typescript In Arabic 2022 - #17 - Data Types - Enums Part 1 
    //done
}
// 0:14 / 5:01
// Learn Typescript In Arabic 2022 - #17 - Data Types - Enums Part 1 
//done
