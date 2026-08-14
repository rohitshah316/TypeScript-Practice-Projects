"use strict";
// let username: string="Alex";
// let age: number=25;
// let isStudent: boolean=true;
Object.defineProperty(exports, "__esModule", { value: true });
// // let variableName: type=value;
// //type inference: ts doesn't always need us to explicitly write the type. it automatically figures out.
// //let username:string="Alex";
// //let username="Alex";
// //both are strongly typed. second one is preferred because ts can already figure out the type.
// let city="kathmandu";
// let score=95;
// let loggedIn=true;
// let currentAge=21;
// const birthYear=2005;
// let username: string="Alex";
// let age: number=25;
// let isStudent:boolean=true;
// console.log("Username: ",username);
// console.log("Age: ",age);
// console.log("Student: ",isStudent);
// let nickname: string | null=null;
// let email: string | undefined=undefined;
// nickname="alex";
// nickname=null;
//any
// let anything: any="hello";
// anything=100;
// console.log(anything.toUpperCase())
//avoid using any type
//object type shape
// let user={
//     username:"Alex",  //ts automatically username->string
//     age:20,             //age->number
//     isStudent:true   //isStudent->boolean
// };
let product = {
    name: "laptop",
    price: 1000,
    inStock: true,
    description: "new gaming laptop",
    discount: null
};
console.log(product.name);
console.log(product.price);
console.log(product.inStock);
console.log(product.description);
console.log(product.discount);
//# sourceMappingURL=index.js.map