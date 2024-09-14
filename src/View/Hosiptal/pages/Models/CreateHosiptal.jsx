// src/pages/AdminRegister/AdminRegister.js

import React, { useState } from 'react';
import Input from '../../../../Components/Inputs/Input'; // Reusable Input component
import Button from '../../../../Components/Buttons/Buttons'; // Reusable Button component
// Import the service
import styles from '../../CSS/Header.module.css';

function HosiptalRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
   
  };



  return (
    <div>
    
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form  className={styles['form-admin']}>
      <h2> Hospital Registration</h2>
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
          type="text"
          name="address"
          placeholder="Enter your password"
          value={formData.address}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />

<Input
  type="tel"
  name="phone"
  placeholder="Enter your phone"
  value={formData.phone}
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

export default HosiptalRegister;
