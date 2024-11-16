const API_URL = '/api/hospitals'; // Your Laravel hospitals API URL

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

// Fetch all hospitals
export const getHospitals = async () => {
    return fetchApi(API_URL);
};

// Fetch a single hospital by ID
export const getHospitalById = async (id) => {
    return fetchApi(`${API_URL}/${id}`);
};

// Create a new hospital
export const createHospital = async (hospitalData) => {
    return fetchApi(API_URL, {
        method: 'POST',
        body: JSON.stringify(hospitalData),
    });
};

// Update a hospital by ID
export const updateHospital = async (id, hospitalData) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(hospitalData),
    });
};

// Delete a hospital by ID
export const deleteHospital = async (id) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
