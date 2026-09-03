import { useContext } from "react";
import { CounterContext } from "./CounterContext";




export function useCounter() {

  const context=useContext(CounterContext);

  if(context===undefined){
    throw new Error("useCounter must be used inside a CounterProvider")
  }
  return (
    context
  )
}

