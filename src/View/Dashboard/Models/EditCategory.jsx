import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";  
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  
import { updateCategory } from '../../services/categoryAPI'; 

// Validation Schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Category name is required'),
    email: Yup.string().email('Invalid email address').optional(),
});

function EditCategory({ rowData, onUpdate }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    useEffect(() => {
        // Reset messages when rowData changes
        setErrorMessage('');
        setSuccessMessage('');
    }, [rowData]);

    const handleSubmit = async (values, { setSubmitting }) => {
        const { name, email } = values;

        setErrorMessage('');  // Reset error message
        setSuccessMessage('');  // Reset success message

        try {
            // Call the API to update the category
            const updatedCategory = await updateCategory(rowData.id, { name, email });

            // On success, show a success message and trigger onUpdate callback
            setSuccessMessage('Category updated successfully!');
            onUpdate(updatedCategory);  // You can use this callback to refresh the list or close the modal
        } catch (error) {
            console.error('Error updating category:', error);
            setErrorMessage('Failed to update category. Please try again.');
        } finally {
            setSubmitting(false);  // Stop the submitting state
        }
    };

    return (
        <Formik
            initialValues={{
                name: rowData ? rowData.name : '',
                email: rowData ? rowData.email : '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm className="form-category">
                    <h6>Edit Category</h6>

                    {/* Success and Error Messages */}
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                    {/* Category Name */}
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter category name"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>

                    {/* Category Email (Optional) */}
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Category Email</Form.Label>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter category email (optional)"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button type="submit" className="btn-add mt-3" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default EditCategory;
