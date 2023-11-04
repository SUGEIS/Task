import React, { useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import AddUserForm from './Components/AddUserForm';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <UserList users={users} />
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
}

export default App;
