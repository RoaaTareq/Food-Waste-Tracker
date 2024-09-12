// src/pages/AdminRegister/AdminRegister.js

import React, { useState } from 'react';
import Input from '../../../../Components/Inputs/Input'; // Reusable Input component
import Button from '../../../../Components/Buttons/Buttons'; // Reusable Button component
import { registerAdmin } from '../services/authService'; // Import the service
import styles from '../../CSS/Header.module.css';

function AdminRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAdmin(formData); // Call the service function
      setSuccess(response.message);
      setError(null);
    } catch (err) {
      setError(err);
      setSuccess(null);
    }
  };

  return (
    <div>
    
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleRegister} className={styles['form-admin']}>
      <h2>Admin Registration</h2>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm your password"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        
        <Button type="submit" className={styles['btn-add']}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default AdminRegister;
