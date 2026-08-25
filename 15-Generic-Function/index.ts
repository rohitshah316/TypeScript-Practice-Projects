//generic function


// function getValue(value:number):number{
//     return value;
// }


function getValue<T>(value:T):T{
    return value;
}
console.log(getValue(10))
console.log(getValue("abc"))