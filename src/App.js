
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
    <AuthProvider>
    <div className="app">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/todos' element={<TodoList/>}/>
      </Routes>
      </div>
    </AuthProvider>
    </Router>
  );
}

export default App;
