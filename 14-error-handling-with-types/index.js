"use strict";
// //error handling with types
Object.defineProperty(exports, "__esModule", { value: true });
// //we can create error using
// // throw new Error("Something went wrong");
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero");
        this.name = "DivisionByZeroError";
    }
}
function divide(a, b) {
    if (b === 0) {
        throw new DivisionByZeroError();
    }
    return a / b;
}
try {
    console.log(divide(2, 3));
    console.log(divide(2, 0));
}
catch (err) {
    if (err instanceof DivisionByZeroError) {
        console.error(err.message);
    }
    else if (err instanceof Error) {
        console.error("General error:", err.message);
    }
    else {
        console.log("Unkonwn error:", err);
    }
}
// function handleError(err:unknown):void{
//     if(err instanceof Error){
//         console.error(err.message);
//     }else{
//         console.error("Unknown error:",err);
//     }
// }
// function test(){
//     throw "Something went wrong!"
// }
// try{
//     test();
// }catch(err:unknown){
//     handleError(err);
// }
//# sourceMappingURL=index.js.map