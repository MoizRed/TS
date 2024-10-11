

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


