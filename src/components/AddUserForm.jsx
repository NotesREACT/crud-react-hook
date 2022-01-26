import React from "react";
import { v4 as uuidv4 } from "uuid";



const AddUserForm = (props) => {
    
    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
   

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
        
        console.log(e)
        props.addUser({name: name, username: username})
        
        console.log('procesando datos... ' + name +' '+ username)
        e.target.reset()
    }


    return (
        <form onSubmit={ saveData }>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                className="App-input"
                onChange={ (e) => setName(e.target.value) }
            />
            
            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                className="App-input" 
                onChange={ (e) => setUsername(e.target.value) }
            />
            
            <div className="btn-submit">
                <button type="submit">Add new user</button>
            </div>
        </form>
    );
}

export default AddUserForm;