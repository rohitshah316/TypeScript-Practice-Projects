import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const App = () => {

  const [state,dispatch]=useReducer(reducer,initialState);
  const [amount,setAmount]=useState(5);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {state.count}</p>

      <label>
        Amount: <input type="number"
        value={amount}
        onChange={(e)=>setAmount(Number(e.target.value))} 
        />
      </label>

      <button onClick={()=>dispatch({type:"decrement",payload:amount})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <button onClick={()=>dispatch({type:"increment",payload:amount})}>+</button>
    </div>
  )
}

export default App