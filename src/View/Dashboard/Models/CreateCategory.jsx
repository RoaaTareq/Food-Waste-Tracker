import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { createCategory } from '../../services/categoryAPI';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
    name: Yup.string().required('Category name is required'),
    description: Yup.string().optional()
});

function CreateCategory({ onSuccess }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        const { name, description } = values;

        setErrorMessage(''); // Reset error message
        setSuccessMessage(''); // Reset success message

        // Get the token from localStorage (assuming it's stored there after login)
        const token = localStorage.getItem('token');

        if (!token) {
            setErrorMessage("You are not authorized to create a category. Please login.");
            setSubmitting(false);
            return;
        }

        try {
            // Call the service to create a category
            const response = await createCategory({ name, description }, token);
            
            // On success, show success message and trigger onSuccess
            setSuccessMessage("Category created successfully!");
            onSuccess();  // Call the onSuccess callback to refresh the table or close modal

        } catch (error) {
            console.error('Error creating category:', error);
            setErrorMessage(error.response?.data?.message || 'An error occurred while creating the category.');
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

               
                    {successMessage && <div className="text-success">{successMessage}</div>}
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}

                 
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
