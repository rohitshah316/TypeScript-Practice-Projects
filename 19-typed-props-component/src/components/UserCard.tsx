

interface UserCardProps{
  name:string;
  age?:number;
  isAdmin?:boolean;
  role?:"admin"|"user";
  onClick:(name:string)=>void;
}


const UserCard = ({name,age=0,isAdmin=false,role="user",onClick}:UserCardProps) => {
  return (
    <div>
      <h2>{name}{isAdmin?': Admin':''}</h2>
      <p>{age}</p>
      <p>Role: {role}</p>
      <button onClick={()=>onClick(name)}>Say Hello</button>
    </div>
  )
}
export default UserCard