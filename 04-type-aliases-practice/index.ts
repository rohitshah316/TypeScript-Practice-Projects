//syntax

// type AliasName={
//     field:type;
//     field2:type;
// }

// type Product={
//     name:string;
//     price:number;
//     inStock:boolean;
//     description:string;
//     discount:number|null;
// }

// let product:Product={
//     name:"laptop",
//     price:1000,
//     inStock:true,
//     description:"new gaming laptop",
//     discount:null
// };

// console.log(product.name)
// console.log(product.price)
// console.log(product.discount)

// let product2:Product={
//     name:"mobile",
//     price:400,
//     inStock:true,
//     description:"new phone",
//     discount:15
// }

// console.log(product2.name)
// console.log(product2.price)
// console.log(product2.discount)


type ID=string|number;

function printId(id:ID):void{
    if(typeof id==="string"){
        console.log("ID (string):",id.toUpperCase());
    }else{
        console.log("ID (number):",id*2)
    }
}

printId(10);
printId("Ten")