import UserCard from "./components/UserCard";

const handleClick=(name:string):void=>{
  alert(`Hello ${name}`)
}

const App = () => {
  return (
    <div>
      <UserCard name="Alex" age={20} isAdmin={true} role="admin" onClick={handleClick}/>
      <UserCard name="Ani" onClick={handleClick}/>
      
    </div>
  )
}

export default App