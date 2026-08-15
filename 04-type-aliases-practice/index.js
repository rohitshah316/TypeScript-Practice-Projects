"use strict";
//syntax
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "string") {
        console.log("ID (string):", id.toUpperCase());
    }
    else {
        console.log("ID (number):", id * 2);
    }
}
printId(10);
printId("Ten");
//# sourceMappingURL=index.js.map