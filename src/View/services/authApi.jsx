import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const getToken = () => localStorage.getItem("token");
const setAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
};

const clearAuthHeader = () => {
    delete axios.defaults.headers.common["Authorization"];
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });

        if (response.data?.access_token) {
            const token = response.data.access_token;

            localStorage.setItem("token", token);
            setAuthHeader(token);

            return response.data;
        } else {
            throw new Error("Login failed: No token received");
        }
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);

        throw new Error(error.response?.data?.message || "An error occurred during login.");
    }
};

export const logoutUser = () => {
    localStorage.removeItem("token");

    clearAuthHeader();
};

const token = getToken();
if (token) {
    setAuthHeader(token);
}

export const isLoggedIn = () => !!getToken();
