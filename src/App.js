
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
