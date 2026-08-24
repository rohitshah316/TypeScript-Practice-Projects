"use strict";
// //error handling with types
Object.defineProperty(exports, "__esModule", { value: true });
// //we can create error using
// // throw new Error("Something went wrong");
// function divide(a:number,b:number):number{
//     if(b===0){
//         throw new Error("cannot divide by zero");
//     }
//     return a/b;
// }
// try{
// console.log(divide(2,3));
// console.log(divide(2,0));
// }catch(err:unknown){
//     if(err instanceof Error){
//         console.error(err.message)
//     }else{
//         console.log("Not an error:",err)
//     }
// }
function test() {
    throw "Something went wrong!";
}
try {
    test();
}
catch (err) {
    handleError(err);
}
function handleError(err) {
    if (err instanceof Error) {
        console.error(err.message);
    }
    else {
        console.error("Unknown error:", err);
    }
}
//# sourceMappingURL=index.js.map