import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import { v4 as uuidv4 } from "uuid";
import UserTable from './components/Usertable';
import AddUserForm from './components/AddUserForm';

function App() {

  //DB
  const userData = [
    { id: uuidv4(), name: 'Lucas', username: 'Patrisio69' },
    { id: uuidv4(), name: 'Facundo', username: 'Facs48' },
    { id: uuidv4(), name: 'Jaume', username: 'Exódya21' },
  ]

  // state
  const [users, setUsers] = useState([])

  // Add users
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuario
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id)
    setUsers(arrayFiltrado)
  }

  //Editar usuarios
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(
      users.map(
        user => (user.id === id ? updatedUser : user)
      )
    )
  }


  return (
  <div className="App-header">
    <header className=''>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
   
    <h1 className='App'>CRUD App with Hooks</h1>
    <div className='flex-row table'>
      <div className='flex-large'>
        <AddUserForm addUser={addUser} editing={editing} currentUser={currentUser} updateUser={updateUser} />
      </div>
      <div className='flex-large'>
        <h2>View User</h2>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
      </div>
    </div>

  </div>
  );
}

export default App;
