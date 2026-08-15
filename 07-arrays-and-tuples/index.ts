

// // let fruits:string[]=["Apple","Banana","Mango"];

// // let vegetables:Array<string>=["Potato","Cauliflower"];


// let languages:string[]=["JavaScript","Python","C"];
// let numbers:number[]=[1,2,3,4,5];


// languages.push("PHP");
// numbers.push(6);
// console.log(languages);
// console.log(numbers)


//type inference
//typescript  can sometimes figure out the array type automatically

// let languages=["JS","Python","C"];

// console.log(typeof languages)



//tuples
//an array usually allows any nubmer of values of the same type
// a tuples lets you specify: exactly how many elements, the type of each position


// let people:[string,number,boolean]=["Alex",20,true];

// console.log(people)



type Product=[string,number,boolean];

let product1:Product=["laptop",1000,true];
let product2:Product=["Phone",500,false];

console.log(product1,product2)



// Array
// [string, string, string, ...]
// → same type, flexible length

// Tuple
// [string, number, boolean]
// → fixed positions, specific types
