import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; 

export const loginUser = async (email, password) => {
  try {
   
    const response = await axios.post(`${API_URL}/login`, { email, password });

    
    if (response.data.access_token) {
      
      localStorage.setItem('token', response.data.access_token);

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

      return response.data; 
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    
    console.error('Login error:', error.response ? error.response.data : error.message);

    
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};
