import { assertNever, type CounterAction, type CounterState } from "./types/types";



export const reducer=(state:CounterState,action:CounterAction):CounterState=>{

    if(action.type==="increment"){
        return{
            count: state.count+action.payload
        }
    }

    if(action.type==="decrement"){
        return{
            count:state.count-action.payload
        }
    }


    if(action.type==="reset"){
        return{
            count:0
        }
    }
    return assertNever(action);
}