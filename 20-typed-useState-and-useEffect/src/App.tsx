import { useState,useEffect } from "react";
import UserList from "./components/UserList";
import type { User } from "./types/user";
import { fetchUsers } from "./api/users";

const App = () => {

  // const [count,setCount]=useState<number>(0);
  // const [skills,setSkills]=useState<string[]>(["TS","React","Node"])

  const [users,setUsers]=useState<User[]>([]);
  const [loading,setLoading]=useState<boolean>(true);
  const [error,setError]=useState<string|null>(null);

  // const [status,setStatus]=useState<"idle"|"loading"|"success">("idle");


  // useEffect(() => {
  //   console.log("Count changed:",count,"Age:",user.age,"Status:",status)
  // }, [count,user.age,status])
  
  // useEffect(()=>{
  //   console.log("Effect staart")
  //   // const timer=setInterval(() => {
  //   //   console.log("Timer running...")
  //   // }, 1000);

  //   return ()=>{
  //     clearInterval(timer)
  //     console.log("Effect cleanup")
  //   }
  // },[]);


  useEffect(()=>{

    const loadUsers=async()=>{
      try{
        

        const data=await fetchUsers();

        setUsers(data)
      }catch(err){
        setError("Failed to fetch users")
      }finally{
        setLoading(false)
      }
    }

    loadUsers();
    },[])

  
  return (
    <div>
{/* 
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(c=>c+1)}>Count: {count}</button>

        {/* <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <button onClick={()=>setUser(prevUser=>({...prevUser,age:prevUser.age+1}))}>Increase age</button>
        <button onClick={()=>setUser(prevUser=>({
          ...prevUser,
          name:"Ani",
          age:30
        }))}>Change User</button> */}

        {/* <h2>Skills</h2>
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

        {status==="success" && <p>Data loaded successfully.</p>}  */}


        {loading ? ( <p>Loading...</p>):error?(<p>Error: {error}</p>):
      (
        <UserList users={users}/>
      )  
    
    }
        
    </div>
  )
}

export default App