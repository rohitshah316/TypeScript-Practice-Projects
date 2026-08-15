// let id:string|number;

// id="First";
// console.log(id)
// id=1;
// console.log(id);


// function printId(id:string|number):void{
//     console.log("Your ID is: ",id);
// }

// printId(1);
// printId("First")



function printId(id:string|number):void{
    if(typeof id==="string"){
        console.log("ID (string):",id.toUpperCase());
    }else{
        console.log("ID (number):",id*2)
    }
}

printId(10);
printId("Ten")