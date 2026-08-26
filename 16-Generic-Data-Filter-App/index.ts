

//normal filter
// const numbers=[10,20,30,40,50];
// const result=numbers.filter((num)=>num>25);
// console.log(result)


// function filterNumbers(numbers:number[],condition:(num:number)=>boolean):number[]{
//     return numbers.filter(condition);
// }
// const numbers=[10,20,30,40,50];

// const result=filterNumbers(numbers,(num)=>num>25);
// console.log(result)


// function filterItems<T>(items:T[],condition:(item:T)=>boolean):T[]{
//     return items.filter(condition);
// }
// const numbers=[10,20,30,40,50];
// const strings=["Alex","Ani","Rohit","java","js"];

// const result=filterItems(numbers,(num)=>num>25);
// const result2=filterItems(strings,(word)=>word.length>3)

// console.log(result)
// console.log(result2)




// function filterItems<T>(items:T[],condition:(item:T)=>boolean):T[]{
//     return items.filter(condition);
// }
// interface User{
//     name:string,
//     age:number
// }
// const users:User[]=[
//     {name:"Alex",age:20},
//     {name:"Ani",age:18},
//     {name:"Rohit",age:21},
//     {name:"Aavash",age:16},
// ]



// const isAdult=(user:User):boolean=>{
//     return user.age>=18;
// }
// const adults=filterItems(users,isAdult);
// console.log(adults)

interface User{
    name:string,
    age:number
}
const users:User[]=[
    {name:"Alex",age:20},
    {name:"Ani",age:18},
    {name:"Rohit",age:21},
    {name:"Aavash",age:16},
]


function filterByProperty<T,K extends keyof T>(items:T[],key:K,value:T[K]):T[]{
    return items.filter(item=>item[key]===value);
}

const res=filterByProperty(users,"age",20);

console.log(res)