import { useState } from "react";

const useSomething=<T>(initialValue:T)=>{
  const [value,setValue]=useState(initialValue)

  return {value,setValue}
}


export default useSomething