import Counter from "./components/Counter";
import Header from "./components/Header";
import { CounterProvider } from "./context/CounterContext";

const App = () => {
  return (
    <CounterProvider>
      <div>
      <h1>Counter App</h1>
      <Header/>
      <Counter/>
    </div>
    </CounterProvider>
  )
}

export default App