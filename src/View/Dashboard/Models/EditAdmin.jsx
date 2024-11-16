import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Navigate after successful submission
import { Form, Button, Alert } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  // Import Formik components
import * as Yup from 'yup';  // Import Yup for validation

// Validation Schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Admin name is required'),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Admin email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .optional()  // Password is optional, since it's not pre-filled
});

function EditAdmin({ rowData, onUpdate }) {
    const navigate = useNavigate();  // Initialize navigate

    useEffect(() => {
        if (rowData) {
            // You can use useEffect to populate form values if rowData exists
        }
    }, [rowData]);

    const handleSubmit = async (values, { setSubmitting }) => {
        // Handle form submission (e.g., send updated data to API or backend)
        console.log('Updated Admin Data:', values);
        try {
            // Here you can call your API to update the admin information
            // Example: const response = await axios.put('/api/admin/update', values);

            // After successful update, call the onUpdate callback and navigate to another page (optional)
            onUpdate(values);
            navigate("/admin-list");  // Navigate to the admin list page after successful update
        } catch (error) {
            console.error('Error updating admin:', error);
            // Handle any submission errors here
        } finally {
            setSubmitting(false); // Set submitting to false when done
        }
    };

    return (
        <Formik
            initialValues={{
                name: rowData ? rowData.name : '',
                phone: rowData ? rowData.phone : '',
                email: rowData ? rowData.email : '',
                password: '',  // Password is optional, but you can change this to an initial value if needed
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm className="form-admin">
                    <h6>Edit Admin</h6>

                    {/* Success/Error Messages */}
                    {/* You can use state to show success or error messages after submission */}
                    
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Admin Name</Form.Label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter admin name"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="phone" className="mb-3">
                        <Form.Label>Admin Phone</Form.Label>
                        <Field
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter admin phone"
                        />
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Admin Email</Form.Label>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter admin email"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Admin Password</Form.Label>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter new password (optional)"
                        />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button type="submit" className="btn-add mt-3" disabled={isSubmitting}>
                        {isSubmitting ? 'Updating...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default EditAdmin;
