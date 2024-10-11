

//default value of type script
function showdata(name: string | null = "guest", age? : number , country : string = "algera" ) : string{
    return `${name}  - ${age}  - ${country}`
}

console.log(showdata(null,987,"hi"))