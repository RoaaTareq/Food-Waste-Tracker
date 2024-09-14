// Login.js
import React, { useState } from 'react';
import Input from '../../Components/Inputs/Input'; // Assuming Input.js is in the same folder

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Add login logic here
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    // Log email and password for testing purposes
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add your authentication logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className='input-custom'
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input-custom'
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-action">Login</button>
      </form>
    </div>
  );
};

export default Login;
