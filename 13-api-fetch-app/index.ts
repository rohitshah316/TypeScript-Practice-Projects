

// type User={
//     id:number;
//     name:string;
//     email:string;
// }


// const user1:User={
//     id:1,
//     name:"Alex",
//     email:"alex@gmail.com"
// }

// const user2:User={
//     id:2,
//     name:"Ani",
//     email:"ani@gmail.com"
// }

// console.log(user1.name)
// console.log(user2.email)



// function getUser():Promise<User>{
//     return Promise.resolve({
//         id:1,
//         name:"Alex",
//         email:"alex@gmail.com"
//     })
// }


// async function main(){
//     const user=await getUser();

//     console.log(user.name)
// }




interface User{
    id:number;
    name:string;
    username:string;
    email:string;
}



async function fetchData():Promise<User|null>{
    
    try{
const response=await fetch('https://jsonplaceholder.typicode.com/users/1');


    if(!response.ok){
        throw new Error("Failed to fetch user");
    }
const data:User=await response.json();

    return data;
    }catch(err:unknown){
            if (err instanceof Error) {
        console.error(err.message);
    }
       return null;
    }
}

const main=async()=>{
    const user=await fetchData();

    if(user){
        console.log(user.name)
    }
};

main();