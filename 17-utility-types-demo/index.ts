// //utility types demo


// //partial,pick, readonly


// //partial
// interface User{
//     id:number,
//     name:string,
//     email:string
// }


// const user:User={
//     id:1,
//     name:"Alex",
//     email:"alex@gmail.com"
// }

// function updateUser(user:User,updates:Partial<User>):User{
//     return {
//         ...user,...updates
//     }
// }

// const updatedUser=updateUser(user,{email:"alex123@gmail.com"})

// console.log(updatedUser)



//pick
interface User{
    id:number;
    name:string;
    email:string;
}

// const profile:Pick<User, "name"|"email">={
//     name:"alex",
//     email:"alex@gmail.com"
// }

// console.log(profile)


//readonly
// const user:User={
//     id:1,
//     name:"Alex",
//     email:"alex@gmail.com"
// }


const readonlyUser:Readonly<User>={
    id:1,
    name:"Alex",
    email:"alex@gmail.com"
}

console.log(readonlyUser.name)