import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";



const AddUserForm = (props) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    
    
    const saveDataEdit = (e) => {
        e.preventDefault()
        
        if (!name.trim()) {
            console.log('esta vacio el name')
            return
        }
        if (!username.trim()) {
            console.log('esta vacio el username')
            return
        }

        // console.log(props.currentUser.id)

        props.updateUser(
            props.currentUser.id, 
            {id: props.currentUser.id, name: name, username: username} 
        )
        
        e.target.reset()
        setName("")
        setUsername("")
        
    }

    const saveData = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            console.log('esta vacio el name')
            return
        }
        if (!username.trim()) {
            console.log('esta vacio el username')
            return
        }
        
        // console.log(e)

        props.addUser({name: name, username: username});
            
        
        console.log('procesando datos... ' + name +' '+ username)
        
        e.target.reset()
        setName("")
        setUsername("")
    }


    return (
        <div>
        {
            props.editing ? (
                <div> 
                    <h2>Edit User</h2>
                    <form onSubmit={ saveDataEdit }>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="App-input"
                            defaultValue={props.currentUser.name}
                            onChange={ (e) => setName(e.target.value) }
                        />
                        
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="App-input" 
                            defaultValue={props.currentUser.username}
                            onChange={ (e) => setUsername(e.target.value) }
                        />
                        
                        <div className="btn-submit">
                            <button type="submit">Edit user</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div> 
                    <h2>Add User</h2>
                    <form onSubmit={ saveData }>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="App-input"
                            defaultValue=""
                            onChange={ (e) => setName(e.target.value) }
                        />
                        
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="App-input" 
                            defaultValue=""
                            onChange={ (e) => setUsername(e.target.value) }
                        />
                        
                        <div className="btn-submit">
                            <button type="submit">Add new user</button>
                        </div>
                    </form>
                </div>
            )
        }
    </div>
    );
}

export default AddUserForm;