import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

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

    const handleSubmit = async (values) => {
        setError('');
        setSuccess('');
        setLoading(true);

        // Get the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            setError("You are not authorized. Please login.");
            setLoading(false);
            return;
        }

        try {
            // Send a POST request to the backend API to register the hospital and owner
            const response = await axios.post('http://127.0.0.1:8000/api/hospitals', {
                hospital_name: values.hospitalName,
                hospital_address: values.hospitalAddress,
                hospital_phone: values.hospitalPhone,
                owner_name: values.ownerName,
                owner_email: values.ownerEmail,
                owner_password: values.ownerPassword,
                owner_password_confirmation: values.ownerPasswordConfirm,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            // If successful, display a success message
            setSuccess('Hospital and owner registered successfully!');
            console.log('Hospital registered:', response.data);

            // Clear the input fields after submission
            values.hospitalName = '';
            values.hospitalAddress = '';
            values.hospitalPhone = '';
            values.ownerName = '';
            values.ownerEmail = '';
            values.ownerPassword = '';
            values.ownerPasswordConfirm = '';

        } catch (err) {
            console.error('Error registering hospital:', err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred while registering the hospital.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
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
            onSubmit={handleSubmit}
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
