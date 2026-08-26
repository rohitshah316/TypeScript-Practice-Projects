// // //generic function


// // // function getValue(value:number):number{
// // //     return value;
// // // }


// function getValue<T>(value:T):T{
//     return value;
// }
// // console.log(getValue<number>(10))
// // console.log(getValue<string>("abc"))


// // getValue<number>(100);
// // getValue<string>("hello");



// const user={
//     id:1,
//     name:"Alex"
// }

// const result=getValue(user)

// console.log(result.id)
// console.log(result.name)


// const numbers=[10,20,30];

// const res=getValue(numbers)

// const names=["Alex","Ani"]
// const resultString=getValue(names);
// res.push(40)
// console.log(res)
// console.log(resultString)



//mulitiple generic types
// function makePair<T,U>(a:T,b:U):[T,U]{
//     return [a,b];
// }

// const pair=makePair(25,"Alex");


// const age:number=pair[0];
// const name:string=pair[1]
// console.log(age,name)


//constraint

// function getLength<T extends {length: number}>(value:T):number{
//     return value.length;
// }


// console.log(getLength("Hello"))
// console.log(getLength([10,20,30]))
// console.log(getLength(123));


// function getName<T extends {name:string}>(obj:T):string{
//     return obj.name;
// }

// const user={
//     name:'Alex',
//     age:20
// }

// console.log(getName(user))





function getProperty<T ,K extends keyof T>(obj:T,key:K):T[K]{
        return obj[key];
}

const user={
    name:'Alex',
    age:20
}


console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
// console.log(getProperty(user,"email"));