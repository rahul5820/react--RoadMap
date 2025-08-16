const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Hassan", age: 20 },
  { name: "Rahul", age: 45 },
];

export const  Challange = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((users) => {
         
          return (
            <div>
              <li>Name : {users.name} , Age : {users.age}</li>
              
            </div>

          );
        })}
      </ul>
    </div>
  );
};