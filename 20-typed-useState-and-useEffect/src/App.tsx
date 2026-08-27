import { useState } from "react";

interface User{
  name:string;
  age:number;
}
const App = () => {

  const [count,setCount]=useState<number>(0);

  const [user,setUser]=useState<User>({
    name:"Alex",
    age:20,
  })
  return (
    <div>

        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(c=>c+1)}>Count: {count}</button>

        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <button onClick={()=>setUser(prevUser=>({...prevUser,age:prevUser.age+1}))}>Increase age</button>
    </div>
  )
}

export default App