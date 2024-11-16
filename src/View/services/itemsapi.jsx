const API_URL = '/api/waste-food'; // Your Laravel waste-food API URL

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

// Fetch all waste-food entries
export const getWasteFood = async () => {
    return fetchApi(API_URL);
};

// Fetch a single waste-food entry by ID
export const getWasteFoodById = async (id) => {
    return fetchApi(`${API_URL}/${id}`);
};

// Create a new waste-food entry
export const createWasteFood = async (wasteFoodData) => {
    return fetchApi(API_URL, {
        method: 'POST',
        body: JSON.stringify(wasteFoodData),
    });
};

// Update a waste-food entry by ID
export const updateWasteFood = async (id, wasteFoodData) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(wasteFoodData),
    });
};

// Delete a waste-food entry by ID
export const deleteWasteFood = async (id) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
