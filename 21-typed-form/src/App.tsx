import React, { useState } from "react";

const App = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

  const handleNameChange=(
    e: React.ChangeEvent<HTMLInputElement>
  )=>{
    setName(e.target.value);
  }

  const handleEmailChange=(
    e:React.ChangeEvent<HTMLInputElement>
  )=>{
    setEmail(e.target.value);
  }

  const handleSubmit=(
    e:React.FormEvent
  )=>{
    e.preventDefault();

    console.log(name);
    console.log(email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={name}
        onChange={handleNameChange}
      />
      <input type="email"
        value={email}
        onChange={handleEmailChange}
      />

  <button type="submit">Submit</button>
      
    </form>
  )
}

export default App