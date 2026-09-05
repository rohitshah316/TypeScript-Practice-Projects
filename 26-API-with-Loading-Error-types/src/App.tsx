import useUsers from "./useUsers";



const App = () => {

   const {state,fetchUsers}=useUsers();
  return (
    <div>
      <h1>API Users</h1>
      <p>Project 26</p>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.error && <button onClick={fetchUsers}>Retry</button>
}
      {state.data && (
        <div>
          <p>Users Loaded: {state.data.length}</p>
        </div>
      )}

      <ul>
        {state.data && state.data.map((user)=>(
          <li key={user.id}>{user.name} - {user.email} - {user.username}</li>
        ))}
      </ul>
     
    </div>
  )
}

export default App