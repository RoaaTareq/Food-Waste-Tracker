import React, { useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";  
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

// Validation Schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Category name is required'),
    email: Yup.string().email('Invalid email address').optional()  
});

function EditCategory({ rowData, onUpdate }) {
    // Prefill form values if rowData is available
    useEffect(() => {
        if (rowData) {
            // You can use useEffect to populate form values if rowData exists
        }
    }, [rowData]);

    const handleSubmit = async (values, { setSubmitting }) => {
        // Prepare updated row data
        const updatedRow = {
            id: rowData.id,  // Include the id in the updated row data
            ...values,       // Spread the values from Formik
        };

        try {
            // Here you can call the onUpdate function passed from the parent
            onUpdate(updatedRow);

            // You can add a success message or redirect here if needed
        } catch (error) {
            console.error('Error updating category:', error);
            // Handle any errors here (optional)
        } finally {
            setSubmitting(false);  // Stop the submission state
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
