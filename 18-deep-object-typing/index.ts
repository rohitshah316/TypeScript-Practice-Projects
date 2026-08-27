
// interface Contact{
//     phone:string;
//     email:string;
// }
// interface Address{
//     city:string;
//     country:string;
//     contact?:Contact;
// }

// interface Project{
//     name:string;
//     completed:boolean;
// }
// interface Employee{
//     id:number;
//     name:string;
//     address?:Address;
//     skills?:string[];
//     projects?:Project[];
// }
// const employee:Employee={
//     id:1,
//     name:"Alex",
//     skills:["TS","React","Node"],
//     projects:[
//         {
//             name:"Web App",
//             completed:true
//         },
//         {
//             name:"TS Based App",
//             completed:false
//         }
//     ]
//     // address:{
//     //     city:"Lalitpur",
//     //     country:"Nepal",
//     //     // contact:{
//     //     //     phone:"+977 9474747444",
//     //     //     email:"alex@gmail.com"
//     //     // }
//     // }
// }




// // console.log(employee.name);
// // console.log(employee.address?.city);
// // console.log(employee.address?.country);
// // console.log(employee.address?.contact?.email)

// // console.log(employee.skills);
// // console.log(employee.skills?.[0]);

// console.log(employee.projects?.[0]?.name)


// const completedProjects=employee.projects?.filter(project=>project.completed);

// console.log(completedProjects)



//api style nested data

interface ApiUser {
    id: number;
    name: string;
    contact: {
        email: string;
        phone: string;
    }
}

interface Project {
    name: string;
    completed: boolean;
}

interface ApiResponse {
    success: boolean;
    data: {
        user: ApiUser;
        projects: Project[];
    }
}


const response: ApiResponse = {
    success: true,
    data: {
        user: {
            id: 1,
            name: "Alex",
            contact: {
                email: "alex@gmail.com",
                phone: "+977 9234211234"
            }
        },

        projects: [{
            name: "Web App",
            completed: true
        },
        {
            name: "Mobile App",
            completed: false
        }]
    }

}


console.log(response.data.user.name);
console.log(response.data.user.contact.email);
console.log(response.data.projects?.[0]?.name);