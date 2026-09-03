
import { useCounter } from "../context/useCounter";

const Header = () => {

    const {count}=useCounter();
  return (
    <header>
        <h2>Current Count: {count}</h2>
    </header>
  )
}

export default Header