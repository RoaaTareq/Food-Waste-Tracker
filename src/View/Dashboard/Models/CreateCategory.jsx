import React, { useState } from "react";
import axios from "axios";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

function CreateCategory({ onSuccess }) {  // Receive the onSuccess callback as a prop
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Get the token from localStorage (assuming it's stored there after login)
        const token = localStorage.getItem('token');

        if (!token) {
            setError("You are not authorized to create a category. Please login.");
            return;
        }

        try {
            // Send a POST request to the backend API to create the category
            const response = await axios.post('http://localhost:8000/api/categories', 
                {
                    name,
                    description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    }
                }
            );

            // If successful, call onSuccess to close the modal and refresh the table
            setSuccess('Category created successfully!');
            setName('');  // Clear the form fields
            setDescription('');

            onSuccess(); // Call the onSuccess callback to close the modal and refresh table
        } catch (err) {
            console.error('Error creating category:', err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred while creating the category.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h6>Create Category</h6>
            
            {/* Display success or error message */}
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            
            <div className="form-group">
                <Input
                    type="text"
                    id="categoryName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter category name"
                    required
                />
            </div>

          

            <Button type="submit" className="btn-add">
                Submit
            </Button>
        </form>
    );
}

export default CreateCategory;
