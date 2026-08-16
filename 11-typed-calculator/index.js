"use strict";
// // function add(a:number,b:number):number{
// //     return a+b;
// // }
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    }
    if (operator === "-") {
        return a - b;
    }
    if (operator === "*") {
        return a * b;
    }
    if (b === 0) {
        return `Cannot Divide By Zero`;
    }
    return a / b;
}
// // console.log(calculate(20, 5, "+"));
// // console.log(calculate(20, 5, "-"));
// // console.log(calculate(20, 5, "*"));
// // console.log(calculate(20, 0, "/"));
// const result=calculate(20,5,"/")
// if(typeof result==="number"){
//     console.log(result.toFixed(2));
// }else{
//    console.log(result);
// }
function showResult(result) {
    if (typeof result === "number") {
        console.log(result.toFixed(2));
    }
    else {
        console.log(result);
    }
}
showResult(calculate(20, 5, "+"));
showResult(calculate(20, 3, "/"));
showResult(calculate(20, 0, "/"));
//# sourceMappingURL=index.js.map