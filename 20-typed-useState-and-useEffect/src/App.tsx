import { useState } from "react";

interface User{
  name:string;
  age:number;
}
const App = () => {

  const [count,setCount]=useState<number>(0);
  const [skills,setSkills]=useState<string[]>(["TS","React","Node"])

  const [user,setUser]=useState<User>({
    name:"Alex",
    age:20,
  })

  const [status,setStatus]=useState<"idle"|"loading"|"success">("idle")
  return (
    <div>

        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(c=>c+1)}>Count: {count}</button>

        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <button onClick={()=>setUser(prevUser=>({...prevUser,age:prevUser.age+1}))}>Increase age</button>
        <button onClick={()=>setUser(prevUser=>({
          ...prevUser,
          name:"Ani",
          age:30
        }))}>Change User</button>

        <h2>Skills</h2>
        <ul>
          {skills.map((skill)=>(
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <button onClick={()=>setSkills((prev)=>(
          [...prev,"Next.js"]
        ))}>Add Skill</button>

        <h2>Status: {status}</h2>
        <button onClick={()=>{setStatus("loading")
          setTimeout(() => {
              setStatus("success")
          }, 2000);

        }}>Load Data</button>

        {status==="success" && <p>Data loaded successfully.</p>}
    </div>
  )
}

export default App