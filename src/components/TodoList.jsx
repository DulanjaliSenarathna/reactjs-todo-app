import React, { useState } from 'react'
import './TodoList.css'
import { useAuth } from '../context/AuthContext'

const TodoList = () => {
    const {successMessage} = useAuth();

    const [editingIndex, setEditingIndex] = useState(null);
  return (
    <div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <div>
            <h2>{editingIndex !== null ? 'Edit Todo' : 'Add Todo'}</h2>
            <input type="text" placeholder='Title' />
            <textarea placeholder='Description'></textarea>
            <button>Add</button>
        </div>

        <ul>
            <li>Sample todo</li>
        </ul>
    </div>
  )
}

export default TodoList