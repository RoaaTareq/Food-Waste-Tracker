import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'; // Update with your API base URL

// Function to handle login request
export const loginUser = async (email, password) => {
  try {
    // Sending login request to the backend API
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // Check if login is successful
    if (response.data.access_token) {
      // Store the token in localStorage (you could also use cookies or context)
      localStorage.setItem('token', response.data.access_token);

      // Optionally, set the Authorization header for all axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

      return response.data; // You can return any data you want from the response
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    // Log error and provide a meaningful message
    console.error('Login error:', error.response ? error.response.data : error.message);

    // Optionally, throw the error for UI to handle (e.g., show a notification)
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};
