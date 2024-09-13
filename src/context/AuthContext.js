import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
  
    const register = (name, email, password) => {
      setUser({ name, email });
      setSuccessMessage('Registration successful!');
      setTimeout(() => {
        navigate('/todos');
       
      }, 2000);

      setTimeout(()=>{
        setSuccessMessage('');
      },3000)
    };
  
    const login = (email, password) => {
      setUser({ email });
      navigate('/todos');
    };
  
    const logout = () => {
      setUser(null);
      navigate('/login');
    };
  
    return (
      <AuthContext.Provider value={{ user, register, login, logout, successMessage }}>
        {children}
      </AuthContext.Provider>
    );
  };