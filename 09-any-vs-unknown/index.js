"use strict";
// //any vs unknown
Object.defineProperty(exports, "__esModule", { value: true });
// let value:any="Hello";
// //any means any type, no restriction;
// let data:unknown="hello";
// if(typeof data==="string"){
//     console.log(data.toUpperCase());
// }
// // console.log(data.toFixed());
let value = "100";
if (typeof value === "number") {
    console.log("Number:", value);
}
else {
    console.log("Not a number");
}
//# sourceMappingURL=index.js.map