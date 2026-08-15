// // interface InterfaceName{
// //     field: type;
// //     field2:type;
// // }


// interface ProductInterface{
//     name:string;
//     price:number;
//     inStock:boolean;
//     description:string;
//     discount:number|null;
// }


// let product:ProductInterface={
//     name: "laptop",
//     price: 1000,
//     inStock: true,
//     description: "new gaming laptop",
//     discount: null
// }

// console.log(product.name);
// console.log(product.price);

interface Animal{
    name:string;
}
interface Animal{
    sound:string;
}

const dog:Animal={
    name:"Rex",
    sound:"Woof"
}

console.log(dog)