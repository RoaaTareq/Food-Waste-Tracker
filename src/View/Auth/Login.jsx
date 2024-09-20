import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Input from '../../Components/Inputs/Input';

const Login = ({ updateAuth }) => { // Receive updateAuth function as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    try {
      // Make a request to the login API
      const response = await axios.post('http://localhost:8000/api/login', { email, password });

      const { access_token, user } = response.data;

      // Store token and user data in localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));

      // Update authentication status immediately
      updateAuth(); 

      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else if (user.role === 'hospital_owner') {
        navigate('/hoispital');
      } else {
        navigate('/employee-dashboard');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-custom"
            required
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-custom"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-action">Login</button>
      </form>
    </div>
  );
};

export default Login;
