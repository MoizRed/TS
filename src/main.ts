// //default value of type script
// function showdata(name: string | null = "guest", age? : number , country : string = "algera" ) : string{
//     return `${name}  - ${age}  - ${country}`
// }

import { clear } from "console";
import { mkdir } from "fs";

// console.log(showdata(null,987,"hi"))

//Learn Typescript In Arabic 2022 - #10 - Function Rest Parameter

function addAll(...numbs: number[]) {
  let result = 0;
  //     for (let i = 0 ; i < numbs.length ; i ++ )
  // {
  //     result += numbs[i]

  // }
  numbs.forEach((nums) => (result += nums));
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

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

const hello = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(hello(1, 2));

// Learn Typescript In Arabic 2022 - #12 - Data Types - Type Alias

// data alias
//type alias

type job = string;

let JOb: job = "worker";

type hello = string | number;

let hi: hello = "hi";

hi = 3;

console.log(hi);

// Learn Typescript In Arabic 2022 - #13 - Data Types - Type Alias Advanced

type buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};
//take the same type and add for it for the last

type last = buttons & {
  x: boolean;
};

function Getactions(btns: last) {
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
  x: true,
});

// Learn Typescript In Arabic 2022 - #14 - Data Types - Literal Types
type nums = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
function compare(num1: number, num2: number) {
  if (num1 > num2) {
    return 1;
  }

  // Learn Typescript In Arabic 2022 - #15 - Data Types - Tuple

  /*
    
    Tuples is  an array with fixed LENGTH and types
    */

  let Article: [number, string, boolean] = [1, "TITLE", true];

  Article[1] = "hello";

  ///Learn Typescript In Arabic 2022 - #16 - Data Types - Void And Never

  // void functions never return anything
  // void functions will return undefined
  //RETURN TYPE NEVER RETURNS
  //IT THROWS AN ERROR OR NEVER FINISHES RUNNING AT ALL "INFINITE LOOP "

  function show(msg: string) {
    while (true) {
      console.log(msg);
    }
    return;
  }
}

// 0:14 / 5:01
// Learn Typescript In Arabic 2022 - #17 - Data Types - Enums Part 1
//done



let age : number = 38
let country : string = "algeria"


interface  subject_model {

    name : string
    age : number
    country : string


}

let subject1 : subject_model = {
    name : "hi",
    age : 389,
    country : "agleria"



}

//tuple
type __document = [string, number, boolean] ;


let doc1 : __document = ["classified", 2 , false]


//litral type is easy 


let fridge : "salad" | "tomato"


fridge = "tomato"


 
//Learn Typescript In Arabic 2022 - #19 - Data Types - type assertion


let img = <HTMLElement> document.getElementById("img") as HTMLInputElement
 
console.log(img.value);

let data :  any = "1000"

console.log((data as string).length)


//Learn Typescript In Arabic 2022 - #20 - union types intersection types



//Learn Typescript In Arabic 2022 - #21 - type annotations with objects



//Learn Typescript In Arabic 2022 - #22 - interface decliration




interface user {
  readonly name : string,
  age? : number,
   country : string,
   sayhello() : string

   }



let user1 : user ={

  name : "hi",
  country : "agleria",
  sayhello() {
      return "helo"
  },
}

user1 .country = "hello"

// Learn Typescript In Arabic 2022 - #23 - Interface Method And Parameters


// Learn Typescript In Arabic 2022 - #24 - Interface Reopen And Use Cases


interface settings {

  theme : boolean;
  font : string ;


}

// Learn Typescript In Arabic 2022 - #25 - Interface Extend

interface users{
  id : number ; 
  username: string ;
  country : string

}


interface moderator extends users {

  edit : boolean;



}


interface admin extends moderator {
  delete : boolean;

}

let user : admin = {

    id : 3,
    username : "capous",
    country: "alaroda",
    edit : false,
    delete : false,


}

// Learn Typescript In Arabic 2022 - #26 - Interface Final Discussion


//Learn Typescript In Arabic 2022 - #27 - Class Type Annotations

// Learn Typescript In Arabic 2022 - #28 - Class Access Modifiers And Parameters Properties
// Learn Typescript In Arabic 2022 - #30 - Class Static Members
// Learn Typescript In Arabic 2022 - #31 - Class Implements interface

// Learn Typescript In Arabic 2022 - #32 - Abstract Classes And Members 

// Learn Typescript In Arabic 2022 - #33 - Polymorphism And Method Override
