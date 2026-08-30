import { useState, type ChangeEvent, type FormEvent } from "react";

type FormData={
  name:string;
  email:string;
}

type FormErrors={
  name?:string;
  email?:string;
}

type FormField=keyof FormData;

const App = () => {
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");

  const [formData,setFormData]=useState<FormData>({
    name:"",
    email:"",
  })

  const[errors,setErrors]=useState<FormErrors>({});


  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{

    const field=e.target.name as FormField;
    setFormData({...formData,[field]: e.target.value })
  }


  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const newErrors: FormErrors={};

    if(!formData.name.trim()){
      newErrors.name="Name is required";
    }


    if(!formData.email.trim()){
      newErrors.email="Email is required"
    }
    if(formData.email.trim() && !formData.email.includes("@")){
      newErrors.email="Enter a valid email";
    }

    setErrors(newErrors);
    console.log(newErrors)
    console.log(formData)
  }
  // const handleNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
  //   setName(e.target.value)
  // }

  // const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
  //   setEmail(e.target.value)
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h1>User Form</h1>

      <input type="text" 
      value={formData.name}
      name="name"
      onChange={handleChange}
      
      />
      {errors.name && <p>{errors.name}</p>}
      <input type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      
      />
{errors.email && <p>{errors.email}</p>}
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>

      <button type="submit">Submit</button>
    </form>
  )
}

export default App