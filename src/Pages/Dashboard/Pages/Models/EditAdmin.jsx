import React, { useState, useEffect } from 'react';
import Input from '../../../../Components/Inputs/Input'; // Reusable Input component
import Button from '../../../../Components/Buttons/Buttons'; // Reusable Button component
import styles from '../../CSS/Header.module.css';

function AdminUpdate({ formData, onSubmit, onCancel }) {
  const [localFormData, setLocalFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (formData) {
      setLocalFormData({
        ...formData,
        password: '', // Clear password for editing
        passwordConfirmation: ''
      });
    }
  }, [formData]);

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localFormData.password !== localFormData.passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    const updatedData = { ...localFormData };
    onSubmit(updatedData); // Pass the updated data to parent
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles['form-admin']}>
        <h2>Edit Admin</h2>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={localFormData.name}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={localFormData.email}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={localFormData.password}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm your password"
          value={localFormData.passwordConfirmation}
          onChange={handleChange}
          className={styles['custom-input-class']}
        />
        <Button type="submit" className={styles['btn-add']}>
          Update
        </Button>
        {/* <Button type="button" onClick={onCancel} className={styles['btn-cancel']}>
          Cancel
        </Button> */}
      </form>
    </div>
  );
}

export default AdminUpdate;
