
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <>
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
    <Toaster position = 'bottom-right' toastOptions={{
      style:{
        fontSize:'1.1rem'
      }
    }}/>
    </>
  );
}

export default App;
