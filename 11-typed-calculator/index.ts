

// // function add(a:number,b:number):number{
// //     return a+b;
// // }


// // function subtract(a: number, b: number): number {
// //   return a - b;
// // }

// // function multiply(a: number, b: number): number {
// //   return a * b;
// // }

// // function divide(a: number, b: number): number {
// //   return a / b;
// // }
// // console.log(add(10, 5));
// // console.log(subtract(10, 5));
// // console.log(multiply(10, 5));
// // console.log(divide(10, 5));


type Operator = "+" | "-" | "*" | "/";

function calculate(
    a: number,
    b: number,
    operator: Operator
): number | string {

    if (operator === "+") {
        return a + b;
    }

    if (operator === "-") {
        return a - b;
    }

    if (operator === "*") {
        return a * b;
    }

    if(b===0){
        return `Cannot Divide By Zero`
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

function showResult(result:number|string):void{
    if(typeof result==="number"){
        console.log(result.toFixed(2));
    }else{
        console.log(result);
    }
}

showResult(calculate(20, 5, "+"));
showResult(calculate(20, 3, "/"));
showResult(calculate(20, 0, "/"));