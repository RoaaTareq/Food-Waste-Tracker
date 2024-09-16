import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Input from '../../Components/Inputs/Input'; // Assuming Input.js is in the same folder

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    // Example login logic (replace with your actual authentication logic)
    if (email === 'test@example.com' && password === 'password123') {
      console.log('Login successful');
      // Redirect to dashboard on successful login
      navigate('/hoispital'); // Change '/dashboard' to your actual dashboard route
    } else {
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
