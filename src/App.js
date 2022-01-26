import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import { v4 as uuidv4 } from "uuid";
import UserTable from './components/Usertable';
import AddUserForm from './components/AddUserForm';

function App() {

  const userData = [
    { id: uuidv4(), name: 'Lucas', username: 'Patrisio69' },
    { id: uuidv4(), name: 'Facundo', username: 'Facs48' },
    { id: uuidv4(), name: 'Jaume', username: 'Exódya21' },
  ]


  // state
  const [users, setUsers] = useState(userData)

  // Add users
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  return (
  <div className="App-header">
    <header className=''>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
   
    <h1 className='App'>CRUD App with Hooks</h1>
    <div className='flex-row table'>
      <div className='flex-large'>
        <h2>Add User</h2>
        <AddUserForm addUser={addUser} />
      </div>
      <div className='flex-large'>
        <h2>View User</h2>
        <UserTable users={users} />
      </div>
    </div>

  </div>
  );
}

export default App;
