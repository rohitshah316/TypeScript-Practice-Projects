"use strict";
// //utility types demo
Object.defineProperty(exports, "__esModule", { value: true });
// const profile:Pick<User, "name"|"email">={
//     name:"alex",
//     email:"alex@gmail.com"
// }
// console.log(profile)
//readonly
const user = {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com"
};
const readonlyUser = {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com"
};
console.log(readonlyUser.name);
//# sourceMappingURL=index.js.map