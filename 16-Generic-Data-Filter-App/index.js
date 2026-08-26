"use strict";
//normal filter
// const numbers=[10,20,30,40,50];
// const result=numbers.filter((num)=>num>25);
// console.log(result)
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: "Alex", age: 20 },
    { name: "Ani", age: 18 },
    { name: "Rohit", age: 21 },
    { name: "Aavash", age: 16 },
];
function filterByProperty(items, key, value) {
    return items.filter(item => item[key] === value);
}
const res = filterByProperty(users, "age", 20);
console.log(res);
//# sourceMappingURL=index.js.map