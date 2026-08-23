"use strict";
// type User={
//     id:number;
//     name:string;
//     email:string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        return null;
    }
}
const main = async () => {
    const user = await fetchData();
    if (user) {
        console.log(user.name);
    }
};
main();
//# sourceMappingURL=index.js.map