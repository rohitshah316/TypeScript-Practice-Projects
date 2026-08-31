import type {Todo} from "../types/todo";
import { useState, type MouseEvent, type ChangeEvent } from "react";


type TodoItemProps={
    todo:Todo;
    onToggle:(id:number)=>void;
    onDelete:(id:number)=>void;
    onUpdate: (id:number,title:string)=>boolean;
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
                    const success= onUpdate(todo.id,editTitle.trim());
                   
                    if(success){
                        setIsEditing(false)
                    }
                }else{
                    setEditTitle(todo.title)
                setIsEditing(true);
                }
            }}
         >
           {isEditing?'Update':'Edit'}
         </button>
         {" "}
         {isEditing && (
            <button
                onClick={(e:MouseEvent<HTMLButtonElement>)=>{
                    e.stopPropagation();
                    setEditTitle(todo.title);
                    setIsEditing(false)
                }}
            >Cancel</button>
         )}
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