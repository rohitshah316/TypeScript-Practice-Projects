"use strict";
// // //optional and default props object
Object.defineProperty(exports, "__esModule", { value: true });
function introduce(user) {
    const age = user.age ?? 18;
    console.log(`Hi, My name is ${user.name} and I am ${age} years old.`);
}
let user1 = {
    name: "Alex",
    age: 20
};
let user2 = {
    name: "ani",
};
introduce(user1);
introduce(user2);
//# sourceMappingURL=index.js.map