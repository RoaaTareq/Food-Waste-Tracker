import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Update with your API base URL

// Function to handle login request
export const loginUser = async (email, password) => {
  try {
    // Sending login request to the backend API
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // Check if login is successful
    if (response.data.token) {
      // Store the token in localStorage (you could also use cookies or context)
      localStorage.setItem('token', response.data.token);
      return response.data; // You can return any data you want from the response
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error.response || error.message);
    throw error; // You can throw an error to handle it later in the UI
  }
};
