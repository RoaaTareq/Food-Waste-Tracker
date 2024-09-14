// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Add login logic here, for example:
    // - Validate email and password format
    // - Send login request to the backend

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    // Example: Logging user data
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform your authentication logic, such as calling an API
    // If login fails, set an error message like below
    // setError('Invalid login credentials');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
