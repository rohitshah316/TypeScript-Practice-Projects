// // //optional and default props object

// // // put ? after the property name to make a property optional

// // type User={
// //     name:string;
// //     age:number;
// //     email?:string;
// // }

// // const user1:User={
// //     name:"Alex",
// //     age:20
// // }

// // const user2:User={
// //     name:"Ani",
// //     age:20,
// //     email:"ani@gmail.com"
// // }

// // console.log(user1)
// // console.log(user2)


// type Product={
//     name:string;
//     price:number;
//     description?:string;
// }

// let product1:Product={
//     name:"Laptop",
//     price:1000
// }

// let product2:Product={
//     name:"Mobile",
//     price:500,
//     description:"A brand new phone"
// }

// if(product1.description){
    
// console.log(product1.description.toUpperCase())
// }
// console.log(product2)


// function showDescription(product:Product){
//     const description=product.description??"No description available";

//     console.log(description);
// }

// showDescription(product1)
// showDescription(product2)


//default parameter

// function greet(name:string="Guest"){
//     console.log(`Hello ${name}`)
// }


// greet();
// greet("Alex")



type User={
    name:string;
    age?:number;
}

function introduce(user:User){
    const age=user.age??18;
    console.log(`Hi, My name is ${user.name} and I am ${age} years old.`)    
}



let user1={
    name:"Alex",
    age:20
}

let user2={
    name:"ani",
}

introduce(user1)
introduce(user2)