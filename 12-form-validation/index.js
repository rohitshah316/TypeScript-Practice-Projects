"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formData = {
    name: "Alex",
    email: "alex@gmail.com",
    age: 20,
    password: "hello123"
};
function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }
    return undefined;
}
function validateEmail(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }
    return undefined;
}
function validateAge(age) {
    if (age < 18) {
        return "Age must be at least 18";
    }
    return undefined;
}
function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }
    return undefined;
}
function validateForm(data) {
    const errors = {};
    const nameError = validateName(data.name);
    if (nameError) {
        errors.name = nameError;
    }
    const emailError = validateEmail(data.email);
    if (emailError) {
        errors.email = emailError;
    }
    const ageError = validateAge(data.age);
    if (ageError) {
        errors.age = ageError;
    }
    const passwordError = validatePassword(data.password);
    if (passwordError) {
        errors.password = passwordError;
    }
    return errors;
}
const errors = validateForm(formData);
console.log(errors);
function isformValid(errors) {
    return (Object.keys(errors).length === 0) ? true : false;
}
console.log(isformValid(errors));
//# sourceMappingURL=index.js.map