"use strict";
// function introduce(name:string,age:number):string{
//     return `My name is ${name} and I am ${age} years old.`
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(introduce("Alex",20));
// function greet(name:string,greeting:string="Hello"):string{
//     return `${greeting}, ${name}`
// }
// console.log(greet("Alex","Hi"))
// console.log(greet("Alex"))
function logMessage(message) {
    console.log(message);
}
logMessage("This is a message.");
const introduce = (name, age) => {
    return `My name is ${name} and I am ${age} years old.`;
};
console.log(introduce("Alex", 20));
//# sourceMappingURL=index.js.map