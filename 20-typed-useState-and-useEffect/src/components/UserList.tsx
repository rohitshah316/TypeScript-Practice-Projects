
import type {User} from "../types/user"


interface UserListProps{
    users:User[];
}
const UserList = ({users}:UserListProps) => {
  return (
    <ul>
        {users.map(user => (
      <li key={user.id}>
        {user.name} - {user.email}
      </li>
    ))}
    </ul>
  )
}

export default UserList