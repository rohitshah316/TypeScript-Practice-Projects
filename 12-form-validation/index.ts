
type FormData={
    name:string;
    email:string;
    age:number;
    password:string;
}

type FormErrors={
    name?:string;
    email?:string;
    age?:string;
    password?:string;
}
const formData:FormData={
    name:"Alex",
    email:"alex@gmail.com",
    age:20,
    password:"hello123"
};




function validateName(name:string):string|undefined{
    if(name.trim()===""){
        return "Name is required"
    }

    return undefined;
}

function validateEmail(email:string):string|undefined{
    if(!email.includes("@")){
        return "Invalid Email"
    }
    return undefined;
}

function validateAge(age:number):string|undefined{
    if(age<18){
        return "Age must be at least 18"
    }

    return undefined
}

function validatePassword(password:string):string|undefined{
    if(password.length<8){
        return "Password must be at least 8 characters."
    }
    return undefined;
}



function validateForm(data:FormData):FormErrors{
    const errors:FormErrors={};

const nameError=validateName(data.name);
if(nameError){
    errors.name=nameError;
}

const emailError=validateEmail(data.email);
if(emailError){
    errors.email=emailError;
}

const ageError=validateAge(data.age);
if(ageError){
    errors.age=ageError;
}

const passwordError=validatePassword(data.password);
if(passwordError){
    errors.password=passwordError;
}



    return errors;
}

const errors=validateForm(formData);
console.log(errors)

function isFormValid(errors:FormErrors):boolean{

    return Object.keys(errors).length===0;
}

console.log(isFormValid(errors));