import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  
import { createHospital } from '../../services/hosiptalAPI';  // Import the API function

// Validation Schema using Yup
const validationSchema = Yup.object({
    hospitalName: Yup.string().required('Hospital name is required'),
    hospitalAddress: Yup.string().required('Hospital address is required'),
    hospitalPhone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required('Hospital phone is required'),
    ownerName: Yup.string().required('Owner name is required'),
    ownerEmail: Yup.string().email('Invalid email address').required('Owner email is required'),
    ownerPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Owner password is required'),
    ownerPasswordConfirm: Yup.string()
        .oneOf([Yup.ref('ownerPassword'), null], 'Passwords must match')
        .required('Password confirmation is required'),
});

function CreateHospital() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (values) => {
        const {
            hospitalName,
            hospitalAddress,
            hospitalPhone,
            ownerName,
            ownerEmail,
            ownerPassword,
        } = values;

        const hospitalData = {
            hospitalName,
            hospitalAddress,
            hospitalPhone,
            ownerName,
            ownerEmail,
            ownerPassword
        };

        setLoading(true);  // Set loading state to true
        setError('');  // Reset error message
        setSuccess('');  // Reset success message

        try {
            // Call the API to create the hospital
            const response = await createHospital(hospitalData);
            
            // If the API call is successful, show success message
            setSuccess('Hospital created successfully!');
        } catch (err) {
            // If an error occurs, show error message
            setError('Error creating hospital. Please try again.');
        } finally {
            setLoading(false);  // Reset loading state
        }
    };

    return (
        <Formik
            initialValues={{
                hospitalName: '',
                hospitalAddress: '',
                hospitalPhone: '',
                ownerName: '',
                ownerEmail: '',
                ownerPassword: '',
                ownerPasswordConfirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}  // Pass handleSubmit to onSubmit
        >
            {({ isSubmitting }) => (
                <FormikForm>
                    <h6>Create Hospital</h6>

                    {/* Display success or error message */}
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group controlId="hospitalName" className="mb-3">
                        <Form.Label>Hospital Name</Form.Label>
                        <Field
                            type="text"
                            name="hospitalName"
                            className="form-control"
                            placeholder="Enter hospital name"
                        />
                        <ErrorMessage name="hospitalName" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="hospitalAddress" className="mb-3">
                        <Form.Label>Hospital Address</Form.Label>
                        <Field
                            type="text"
                            name="hospitalAddress"
                            className="form-control"
                            placeholder="Enter hospital address"
                        />
                        <ErrorMessage name="hospitalAddress" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="hospitalPhone" className="mb-3">
                        <Form.Label>Hospital Phone</Form.Label>
                        <Field
                            type="tel"
                            name="hospitalPhone"
                            className="form-control"
                            placeholder="Enter hospital phone"
                        />
                        <ErrorMessage name="hospitalPhone" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="ownerName" className="mb-3">
                        <Form.Label>Owner Name</Form.Label>
                        <Field
                            type="text"
                            name="ownerName"
                            className="form-control"
                            placeholder="Enter owner's name"
                        />
                        <ErrorMessage name="ownerName" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="ownerEmail" className="mb-3">
                        <Form.Label>Owner Email</Form.Label>
                        <Field
                            type="email"
                            name="ownerEmail"
                            className="form-control"
                            placeholder="Enter owner's email"
                        />
                        <ErrorMessage name="ownerEmail" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="ownerPassword" className="mb-3">
                        <Form.Label>Owner Password</Form.Label>
                        <Field
                            type="password"
                            name="ownerPassword"
                            className="form-control"
                            placeholder="Enter owner's password"
                        />
                        <ErrorMessage name="ownerPassword" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="ownerPasswordConfirm" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Field
                            type="password"
                            name="ownerPasswordConfirm"
                            className="form-control"
                            placeholder="Confirm owner's password"
                        />
                        <ErrorMessage name="ownerPasswordConfirm" component="div" className="text-danger" />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="mt-3" disabled={isSubmitting || loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default CreateHospital;
