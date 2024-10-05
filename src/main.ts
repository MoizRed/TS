

//type Aliases 
type stringOrNumber  = string | number // ALIAS

interface gruitarist {
    name? : string ,
    actibe : boolean, //optional property using ? sign 
    albums : stringOrNumber

}

//literal types 

let myname : 'dave'

let userName : "Dave" | "Jhon" | "Amy"

userName = "Amy"


//fucntions types are easy lmao



const add = (a : number ,b : number ) : number =>{

    return a+b


}

const logmsg = (message : any , ...args : any) : void =>{

    console.log(message)

}

logmsg("hello",3,)
// function              (arg : type 1  arg: type 2) : return type
let subtract = function (c:number , d : number): number {

    return c - d  

}




interface mathfunction { 
    
    (a: number , b: number) : number
}
let multiply : mathfunction = function(c,b){

    return c *b 


}



//optional paramters 
//rest paramters 

//default param value  a:number = 10
const addAll = (a:number = 10, b:number , c?:number , ...args: number[]): number => {

    if (typeof c !== 'undefined'){
    return a+b+c
    }else{
        return a+b + args.reduce((prev , curr) => prev + curr)
    }

}

//never type
const createError = (errmsg : string) : never =>{

        throw new Error(errmsg)
}


const infinite = () =>{

    let i :number = 1 
    while (true){
        i++
        if (i> 100) break
        
    }
}


//custom type guard 
