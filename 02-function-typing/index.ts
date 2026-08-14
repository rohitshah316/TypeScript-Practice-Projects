

// function introduce(name:string,age:number):string{
//     return `My name is ${name} and I am ${age} years old.`
// }

// console.log(introduce("Alex",20));


// function greet(name:string,greeting:string="Hello"):string{
//     return `${greeting}, ${name}`
// }

// console.log(greet("Alex","Hi"))
// console.log(greet("Alex"))


function logMessage(message:string):void{
    console.log(message);
}

logMessage("This is a message.");


const introduce=(name:string,age:number):string=>{
    return  `My name is ${name} and I am ${age} years old.`
}

console.log(introduce("Alex",20))