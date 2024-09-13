import React, { useEffect, useState } from 'react'
import './TodoList.css'
import { useAuth } from '../context/AuthContext'
import {MdDelete, MdEdit} from 'react-icons/md';
import {motion} from 'framer-motion';
import CheckButton from './UI/CheckButton';
import { toast } from 'react-hot-toast';

const child = {
    hidden: {y:20, opacity:0},
    visible:{
      y: 0,
      opacity:1
    }
  }

const TodoList = () => {
    const {successMessage, logout} = useAuth();

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({title:'', description:''});
    const [editingIndex, setEditingIndex] = useState(null);
    const [checked, setChecked] = useState(false);

    const handleAddTodo = () => {
        const updatedTodos = [...todos, { ...newTodo, completed: false, addedAt: new Date().toLocaleString() }];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setNewTodo({ title: '', description: '' });
        toast.success('ToDo added successfully')
      };

      const handleEditTodo = (index) => {
        setEditingIndex(index);
        setNewTodo(todos[index]);
      };

      const handleSaveTodo = () => {
        const updatedTodos = todos.map((todo, index) =>
          index === editingIndex ? newTodo : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setEditingIndex(null);
        setNewTodo({ title: '', description: '' });
      };


      const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        toast.success('ToDo deleted successfully')
      };

      const handleCheck = (index) =>{
        // Update the specific todo item
        console.log('hi');
        setChecked(!checked);
        
        const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, status: todo.status === 'complete' ? 'incomplete' : 'complete' } : todo
      );
      
      // Set the updated todos in state
      setTodos(updatedTodos);
  
      // Save updated todos to localStorage
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      }
      
      useEffect(() => {
        // Initial load from localStorage
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
        }
      }, []);

      const classNames = [ 'todoText' ]; // Always apply todoText

    if (todos.status === 'complete') {
        classNames.push('todoText--completed'); // Conditionally apply todoText--completed
    }
    

  return (
    <>
    <button className='logout' onClick={logout}>Logout</button>
    <div className='todo-list'>
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <div>
            <h2>{editingIndex !== null ? 'Edit Todo' : 'Add Todo'}</h2>
            

            <input type="text" placeholder='Title' value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}/>

            <textarea placeholder='Description' value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            />

            {editingIndex !== null ? (
             <button onClick={handleSaveTodo}>Save Todo</button>
            ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
             )}
        </div>

        {
            todos.length > 0 && todos.map((todo, index) => (
                <motion.div className='item' variants={child} key={index}>
                <div className='todoDetails'>
                <CheckButton checked={todo.status === 'complete'} handleCheck={()=>handleCheck(index)}/>
                    <div className='text'>
                    <p className={classNames.join(' ')}>{todo.title}</p>
                    <p className={classNames.join(' ')}>{todo.description}</p>
                    <p className='time'>{todo.addedAt}</p>
                    </div>
                </div>
                <div className='todoActions'>
                    <div className='icon' onClick={() => handleDeleteTodo(index)} 
                    onKeyDown={() => handleDeleteTodo(index)} role='button' tabIndex={0}>
                    <MdDelete />
                    </div>
                    <div className='icon' onClick={() => handleEditTodo(index)} 
                    onKeyDown={() => handleEditTodo(index)} role='button' tabIndex={0}>
                    <MdEdit />
                    </div>
                </div>
                </motion.div>
            ))
}
        </div>
        
       

    </>
  )
}

export default TodoList