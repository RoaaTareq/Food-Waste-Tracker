import React, { useState, useEffect } from 'react';
import Input from '../../../../Components/Inputs/Input'; // Reusable Input component
import Button from '../../../../Components/Buttons/Buttons'; // Reusable Button component
import styles from '../../CSS/Header.module.css';

function HospitalUpdate({ formData, onSubmit, onCancel }) {
  const [localFormData, setLocalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (formData) {
      setLocalFormData(formData); // Pre-fill the form with the selected row data
    }
  }, [formData]);

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated data
    onSubmit(localFormData);
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      <form onSubmit={handleSubmit} className={styles['form-admin']}>
        <h2>Hospital Update</h2>
        <Input
          type="text"
          name="name"
          placeholder="Enter hospital name"
          value={localFormData.name}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter hospital email"
          value={localFormData.email}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="text"
          name="address"
          placeholder="Enter hospital address"
          value={localFormData.address}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Enter hospital phone"
          value={localFormData.phone}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Button type="submit" className={styles['btn-add']}>
          Update
        </Button>
        
      </form>
    </div>
  );
}

export default HospitalUpdate;
