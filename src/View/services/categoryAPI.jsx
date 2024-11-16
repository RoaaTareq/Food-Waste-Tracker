const API_URL = '/api/categories'; 

const getAuthToken = () => {
    return localStorage.getItem('auth_token'); 
};


const fetchApi = async (url, options = {}) => {
    const token = getAuthToken();
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }), 
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
