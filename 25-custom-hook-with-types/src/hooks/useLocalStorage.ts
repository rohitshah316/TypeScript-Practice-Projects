import React, { useEffect, useRef, useState } from "react";



const useLocalStorage = <T>(key:string,initialValue:T):{value:T;setValue:React.Dispatch<React.SetStateAction<T>>} => {

    const skipSave = useRef(false);
    const [value,setValue]=useState<T>(()=>{

        const storedValue=localStorage.getItem(key);

        if(storedValue!==null){
            return JSON.parse(storedValue);
        }

        return initialValue;
    });


    useEffect(()=>{


        if(skipSave.current){
            skipSave.current=false;
            return;
        }
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])


    const clearValue=()=>{

        skipSave.current=true;
        localStorage.removeItem(key);
        setValue(initialValue);
     
    }

  return {
    value,setValue,clearValue,
  }
}

export default useLocalStorage