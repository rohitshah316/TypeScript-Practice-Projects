import { useCounter } from "../context/useCounter";



const Counter = () => {

    const {count,increment,decrement}=useCounter();
  return (
    <div>
        <h2>Count:{count}</h2>

        <button onClick={increment}>+</button>{" "}
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter