// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const registerAdmin = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register/admin`, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
