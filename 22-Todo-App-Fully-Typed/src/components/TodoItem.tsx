import type {Todo} from "../types/todo";
import { useState, type MouseEvent, type ChangeEvent } from "react";


type TodoItemProps={
    todo:Todo;
    onToggle:(id:number)=>void;
    onDelete:(id:number)=>void;
    onUpdate: (id:number,title:string)=>void;
}


const TodoItem = ({todo,onToggle,onDelete,onUpdate}:TodoItemProps) => {

    const [isEditing,setIsEditing]=useState(false);
    const [editTitle,setEditTitle]=useState(todo.title);
  return (
    <li onClick={()=>onToggle(todo.id)}>
         {isEditing ?(
            <input type="text" 
            value={editTitle}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>
                setEditTitle(e.target.value)
            }

            onClick={(e:MouseEvent<HTMLInputElement>)=>
                e.stopPropagation()
            }
            />
         ):(
           <>
            {todo.completed ? "completed" : "pending"} - {todo.title}
           </>
         )}
             {" "}
         
         
         <button
            onClick={(e:MouseEvent<HTMLButtonElement>)=>{
                e.stopPropagation();


                if(isEditing){
                    onUpdate(todo.id,editTitle.trim());
                    setIsEditing(false)
                }else{
                setIsEditing(true);
                }
            }}
         >
           {isEditing?'Update':'Edit'}
         </button>
         {" "}
         <button
            onClick={(e:MouseEvent<HTMLButtonElement>)=>{

                e.stopPropagation()
                onDelete(todo.id)
            }}
         >Delete</button>
    </li>
  )
}

export default TodoItem