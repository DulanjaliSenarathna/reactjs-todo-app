
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/todos' element={<TodoList/>}/>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
