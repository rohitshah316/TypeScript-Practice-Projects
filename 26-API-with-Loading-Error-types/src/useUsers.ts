import { useEffect, useState } from "react";


type User={
  id:number;
  name:string;
  username:string;
  email:string;
}

type ApiState<T>={
  data: T | null;
  loading:boolean;
  error:string|null;
}


const useUsers=()=>{
    const [state,setState]=useState<ApiState<User[]>>({
        data:null,
        loading:true,
        error:null
    })


    const fetchUsers=()=>{

        setState({
            data:null,
            loading:true,
            error:null
        })
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        if(!res.ok) throw new Error("Failed to fetch users");
        return res.json() as Promise<User[]>
    }).then(data=>
        setState({
            data:data,
            loading:false,
            error:null
        })
    ).catch(err=>{
        setState({
            data:null,
            loading:false,
            error:err.message
        })
    })
    }

   useEffect(()=>{
        fetchUsers()
  },[])
    

  return {state,fetchUsers}
}

export default useUsers