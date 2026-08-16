

type User={
    id:number;
    name:string;
    email:string;
}


const user1:User={
    id:1,
    name:"Alex",
    email:"alex@gmail.com"
}

const user2:User={
    id:2,
    name:"Ani",
    email:"ani@gmail.com"
}

console.log(user1.name)
console.log(user2.email)



function getUser():Promise<User>{
    return Promise.resolve({
        id:1,
        name:"Alex",
        email:"alex@gmail.com"
    })
}


async function main(){
    const user=await getUser();

    console.log(user.name)
}