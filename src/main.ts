

// //default value of type script
// function showdata(name: string | null = "guest", age? : number , country : string = "algera" ) : string{
//     return `${name}  - ${age}  - ${country}`
// }

// console.log(showdata(null,987,"hi"))


//Learn Typescript In Arabic 2022 - #10 - Function Rest Parameter 


function addAll(...numbs : number[]){

   let result = 0;
//     for (let i = 0 ; i < numbs.length ; i ++ )
// {
//     result += numbs[i]


// }
numbs.forEach(nums => result += nums)
return result

}
/// to convert boolean  into number just multiple it or add plus or nagetive sign
console.log(addAll(1,3,6,5,5, -true * 1))



//learn Typescript In Arabic 2022 - #11 - Type Annotations With Anonymous And Arrow Function


/*
FUNCTION
- anonymous functoin
-arrow function
*/

const add = function(num1: number , num2 : number ) : number {

    return num1 + num2

}

 const hello = (num1 : number , num2 : number) : number =>{

    return num1 + num2

}

console.log(hello(1,2))

// Learn Typescript In Arabic 2022 - #12 - Data Types - Type Alias

// data alias
//type alias


type job = string;


let JOb : job = 'worker'

type hello = string | number;

let hi  : hello = "hi"

hi = 3

console.log(hi)


const root = document.getElementById("root") as HTMLElement;

if (root) {
    root.innerHTML = "<h1>hellp</h1>";
} else {
    console.error("root element not fodund");
}

