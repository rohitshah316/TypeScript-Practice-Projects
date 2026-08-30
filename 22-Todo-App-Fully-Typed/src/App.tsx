
import {useState, type ChangeEvent, type FormEvent} from 'react'
import TodoItem from './components/TodoItem';
import type {Todo} from './types/todo'
const App = () => {

  const [todos,setTodos]=useState<Todo[]>([]);
  const [input,setInput]=useState("");

  const addTodo=(title:string)=>{

    if(!title.trim()) return;
    const newTodo:Todo={
      id:Date.now(),
      title:title.trim(),
      completed:false,
    }

    setTodos((prevTodos)=>[...prevTodos,newTodo])
  }

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    addTodo(input);
    setInput("");
  }

  const handleInputChange=(e: ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value);
  }

  const toggleTodo=(id:number)=>{
    setTodos((prevTodos)=>
      prevTodos.map((todo)=>{
        if(todo.id===id){
          return {
            ...todo,completed:!todo.completed
          }
        }
        return todo;
      })
    )
  }

  const handleDelete=(id:number)=>{
    setTodos((prevTodos)=>
      prevTodos.filter((todo)=>todo.id!==id)
    )
  }


  const updateTodo=(id:number,newTitle:string)=>{
    setTodos((prevTodos)=>
      prevTodos.map((todo)=>{
        if(todo.id===id){
          return {
            ...todo, 
            title: newTitle
          }
        }
        return todo;
      })
    )
  }
  return (
    <>
      
      <h1>Todo App</h1>
      <p>Total Todos: {todos.length}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" 
      value={input}
      onChange={handleInputChange}
      placeholder="Enter a todo"
      />
      <button 
        type="submit"
      >Add</button>
      </form>
      

      <ul>
        {todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={handleDelete} onUpdate={updateTodo}/> 
        ))}
      </ul>
      </>
  )
}

export default App