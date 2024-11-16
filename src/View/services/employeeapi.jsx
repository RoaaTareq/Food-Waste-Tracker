const API_URL = '/api/employees'; // Your Laravel employees API URL

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

// Fetch all employees
export const getEmployees = async () => {
    return fetchApi(API_URL);
};

// Fetch a single employee by ID
export const getEmployeeById = async (id) => {
    return fetchApi(`${API_URL}/${id}`);
};

// Create a new employee
export const createEmployee = async (employeeData) => {
    return fetchApi(API_URL, {
        method: 'POST',
        body: JSON.stringify(employeeData),
    });
};

// Update an employee by ID
export const updateEmployee = async (id, employeeData) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(employeeData),
    });
};

// Delete an employee by ID
export const deleteEmployee = async (id) => {
    return fetchApi(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
