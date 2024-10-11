"use strict";
//default value of type script
function showdata(name = "guest", age, country = "algera") {
    return `${name}  - ${age}  - ${country}`;
}
console.log(showdata(null, 987, "hi"));
