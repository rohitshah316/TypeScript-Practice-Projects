

// // // function processValue(value:string|number|any){
// // //     if(typeof value==="string"){
// // //         console.log(value.toUpperCase());
// // //     }else if(typeof value==="number"){
// // //         console.log(value*2);
// // //     }else{
// // //         console.log("not a number or string")
// // //     }
// // // }

// // // processValue("hello");
// // // processValue(10);
// // // processValue({})



// // function describe(value:string|number|boolean){
// //     if(typeof value==="string"){
// //         console.log("String:",value);
// //     }else if(typeof value==="number"){
// //         console.log("Number:",value);
// //     }else{
// //         console.log("Boolean:",value);
// //     }
// // }


// // describe("Alex");
// // describe(20);
// // describe(true);




// function getLength(value:string|number){
//     if(typeof value==="string"){
//        return value.length
//     }else{
//         return value*2;
//     }
// }

// console.log(getLength("Hello"))
// console.log(getLength(20))



function formatValue(value:string|number|boolean){
    if(typeof value==="string"){
        return value.toUpperCase();
    }else if(typeof value==="number"){
        return value*10;
    }else{
      return value?"YES":"NO"
    }
}
console.log(formatValue("hello")); // HELLO
console.log(formatValue(5));       // 50
console.log(formatValue(true));    // YES
console.log(formatValue(false));   // NO
