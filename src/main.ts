// i dont wanna give up on this one , i wanna be ... A full stack developer



//ALIASES 


type one = string //simple
type two = string | number //union
type three = 'hello' //literal type

//convert to more or less specific 
let a : one = 'hello'

let b = a as two //less specific keyword

let c = a as three //more specific keyword

let d = <one | number>'world' //tagged template literal


const addOrConcat = (a: number , b: number , c : 'add' | 'concat') : number | string =>{

    if (c === 'add') return a +b 
    return '' + a + b
 
}

//type script  assersion is easy  , assesrion is focring your


let myVal : string = addOrConcat(2,2,'concat') as string //assering is happening here 



//asser
let nextVal : number = addOrConcat(2,2,'concat') as number 

(10 as unknown)as string 


//the DOM


// ! means not a null , it removes a null possiblity "!" > not null 
const img = document.querySelector('#myID') as HTMLImageElement
const myimg= document.getElementById('#myID')!
const dimg = <HTMLAudioElement>document.querySelector('#myID') //these tags wont work for react 
