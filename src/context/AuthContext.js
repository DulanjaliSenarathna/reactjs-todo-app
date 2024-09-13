import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      // Check if user data exists in local storage on initial load
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  
    const register = (name, email, password) => {
      const newUser = { name, email };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setSuccessMessage('Registration successful!');
      setTimeout(() => {
        navigate('/todos');
       
      }, 2000);

      setTimeout(()=>{
        setSuccessMessage('');
      },3000)
    };
  
    const login = (email, password) => {
      const existingUser = { email };
      localStorage.setItem('user', JSON.stringify(existingUser));
      setUser(existingUser);
      navigate('/todos');
    };
  
    const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
      navigate('/login');
    };
  
    return (
      <AuthContext.Provider value={{ user, register, login, logout, successMessage }}>
        {children}
      </AuthContext.Provider>
    );
  };