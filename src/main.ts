let a : string  = "helllo"

let array  = ["h" , "hi" , 4 , 6 , ["3" , true]] 


let showmsg = true ; 


function showdetails(name: string , age?: number  , salary: number = 489) : string
{


if (showmsg) return `hello ${name} , age ${age} , salary ${salary}` 
else return `no valid data`
}



showdetails("hello" ) 



