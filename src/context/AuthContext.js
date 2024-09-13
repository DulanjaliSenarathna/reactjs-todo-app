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
    const existingUser = JSON.parse(localStorage.getItem('user'));

    if (existingUser && existingUser.email === email) {
      setSuccessMessage('User already exists!');
      setTimeout(() => setSuccessMessage(''), 3000);
      return false;
    }

    const newUser = { name, email, password }; // Save password for login
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setSuccessMessage('Registration successful!');

    setTimeout(() => {
      navigate('/todos');
    }, 2000);

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    return true;
  };

  const login = (email, password) => {
    // Retrieve the user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user exists and the password matches
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser); // Set the user in context
      navigate('/todos'); // Navigate to the todos page

      console.log('click');
      return true;
      
      
    } else {
      setSuccessMessage('Invalid email or password!');
      setTimeout(() => setSuccessMessage(''), 3000);
      return false;
    }
  };

  

  return (
    <AuthContext.Provider value={{ user, register, login, successMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
