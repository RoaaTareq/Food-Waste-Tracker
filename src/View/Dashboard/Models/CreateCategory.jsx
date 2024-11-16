import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";  
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

// Validation Schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Category name is required'),
    description: Yup.string().optional()
});

function CreateCategory({ onSuccess }) {
    const handleSubmit = async (values, { setSubmitting, setError, setSuccess }) => {
        const { name, description } = values;
        setError('');
        setSuccess('');

        // Get the token from localStorage (assuming it's stored there after login)
        const token = localStorage.getItem('token');

        if (!token) {
            setError("You are not authorized to create a category. Please login.");
            setSubmitting(false);
            return;
        }

        try {
            // Send a POST request to the backend API to create the category
            const response = await axios.post('http://localhost:8000/api/categories', 
                { name, description },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
                    }
                }
            );

            // If successful, call onSuccess to close the modal and refresh the table
            setSuccess('Category created successfully!');
            onSuccess();  // Call the onSuccess callback to close the modal and refresh the table
        } catch (err) {
            console.error('Error creating category:', err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred while creating the category.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setSubmitting(false);  // Stop the submitting state
        }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                description: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm>
                    <h6>Create Category</h6>

                   
                    <Field name="success" type="hidden" />
                    <ErrorMessage name="error" component="div" className="text-danger" />

                    
                    <ErrorMessage name="success" component="div" className="text-success" />

                   
                    <Form.Group controlId="categoryName" className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter category name"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>

                   
                    <Form.Group controlId="categoryDescription" className="mb-3">
                        <Form.Label>Category Description</Form.Label>
                        <Field
                            as="textarea"
                            name="description"
                            rows={3}
                            className="form-control"
                            placeholder="Enter category description"
                        />
                        <ErrorMessage name="description" component="div" className="text-danger" />
                    </Form.Group>

                    
                    <Button type="submit" className="btn-add" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default CreateCategory;
