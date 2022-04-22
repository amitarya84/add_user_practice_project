import React, {useState} from 'react';
import Adduser from './Users/AddUser';
import Userslist from './Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  function addUserHandler(user){
    setUsers(prv => [...prv, user])
  }
  
  return (
    <div>
      <Adduser addUser={addUserHandler} />
      <Userslist usersList={users} />
    </div>
  );
}

export default App;
