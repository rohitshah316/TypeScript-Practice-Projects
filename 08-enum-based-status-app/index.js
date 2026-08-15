"use strict";
//enum let us create a controlled set of values
Object.defineProperty(exports, "__esModule", { value: true });
// enum Status{
//     Loading,
//     Success,
//     Error
// }
// let currentStatus:Status=Status.Loading;
// console.log(currentStatus)
var Status;
(function (Status) {
    Status["Loading"] = "loading";
    Status["Success"] = "success";
    Status["Error"] = "error";
})(Status || (Status = {}));
function getStatus() {
    return Status.Success;
}
function showStatus(status) {
    if (status === Status.Loading) {
        console.log("Loading...");
    }
    else if (status === Status.Success) {
        console.log("Data Loaded successfully!");
    }
    else if (status === Status.Error) {
        console.log("Somethign went wrong.");
    }
}
// let currentStatus:Status=getStatus();
showStatus(Status.Loading);
showStatus(Status.Success);
showStatus(Status.Error);
//this is often more convenient when working with APIs and UI states because the actual value is meaningful.
//# sourceMappingURL=index.js.map