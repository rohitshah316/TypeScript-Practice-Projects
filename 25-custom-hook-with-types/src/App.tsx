import { useState } from "react";
import useCounter from "./hooks/useCounter";
import useSomething from "./hooks/useSomething";
import useLocalStorage from "./hooks/useLocalStorage";




const App = () => {

  const {count,setCount}=useCounter();

  // const {value:name,setValue:setName}=useSomething<string>("Alex");

  // const {value:age,setValue:setAge}=useSomething<number>(20);

 

  const {value:name,setValue:setName,clearValue:clearName}=useLocalStorage("name","Alex")
  const {value:age,setValue:setAge,clearValue:clearAge}=useLocalStorage("age",20)

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>


      <h2>My name is {name}. I am {age} years old.</h2>


      <input type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <input type="number" 
      value={age}
      onChange={(e)=>setAge(Number(e.target.value))}
      />

  <button onClick={clearName}>
  Clear Name
</button>

<button onClick={clearAge}>
  Clear Age
</button>

    </div>



  )
}

export default App