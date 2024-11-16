const API_URL = '/api/categories'; // Your Laravel API URL

// Function to get the token from localStorage (or wherever you store it)
const getAuthToken = () => {
    return localStorage.getItem('auth_token'); // Assuming the token is stored in localStorage
};

// Generic fetch function to make API requests
const fetchApi = async (url, options = {}) => {
    const token = getAuthToken();
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }), // Attach token if available
    };

    const response = await fetch(url, {
        ...options,
        headers: headers,
    });

    // Check for errors
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
};

// Fetch all categories
export const getCategories = async () => {
    return fetchApi(API_URL);
};

// Fetch a single category by ID
export const getCategoryById = async (id) => {
    return fetchApi(`${API_URL}/${id}`);
};

// Create a new category
export const createCategory = async (categoryData) => {
    return fetchApi(API_URL, {
        method: 'POST',
        body: JSON.stringify(categoryData),
    });
};

// Update a category by ID
export const updateCategory = async (id, categoryData) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(categoryData),
    });
};

// Delete a category by ID
export const deleteCategory = async (id) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
