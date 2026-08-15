//enum let us create a controlled set of values

// enum Status{
//     Loading,
//     Success,
//     Error
// }

// let currentStatus:Status=Status.Loading;

// console.log(currentStatus)

enum Status{
    Loading="loading",
    Success="success",
    Error="error"
}

// function getStatus(){
//     return Status.Success
// }
// let currentStatus:Status=getStatus();

function showStatus(status:Status):void{
if(status===Status.Loading){
    console.log("Loading...");
}else if(status===Status.Success){
    console.log("Data Loaded successfully!");
}else if(status===Status.Error){
    console.log("Something went wrong.")
}
}

showStatus(Status.Loading)
showStatus(Status.Success)
showStatus(Status.Error)




//this is often more convenient when working with APIs and UI states because the actual value is meaningful.


