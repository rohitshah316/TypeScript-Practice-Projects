"use strict";
// interface Contact{
//     phone:string;
//     email:string;
// }
// interface Address{
//     city:string;
//     country:string;
//     contact?:Contact;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
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
};
console.log(response.data.user.name);
console.log(response.data.user.contact.email);
console.log(response.data.projects[0].name);
//# sourceMappingURL=index.js.map