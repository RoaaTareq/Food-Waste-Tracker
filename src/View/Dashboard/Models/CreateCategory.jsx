import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";  // Import React Bootstrap components

function CreateCategory({ onSuccess }) {
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
        <Form onSubmit={handleSubmit}>
            <h6>Create Category</h6>
            
            {/* Display success or error message */}
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            
            {/* Category Name */}
            <Form.Group controlId="categoryName" className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                    required
                />
            </Form.Group>

            {/* Category Description */}
            <Form.Group controlId="categoryDescription" className="mb-3">
                <Form.Label>Category Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter category description"
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" className="btn-add" variant="primary">
                Submit
            </Button>
        </Form>
    );
}

export default CreateCategory;
