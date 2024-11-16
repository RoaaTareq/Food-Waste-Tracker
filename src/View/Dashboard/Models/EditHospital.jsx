import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"; 
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  
import { updateHospital } from '../../services/hosiptalAPI';  // Import the update API function

const validationSchema = Yup.object({
    name: Yup.string().required('Hospital name is required'),
    address: Yup.string().required('Hospital address is required'),
    phone: Yup.string()
        .required('Hospital phone is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
});

function EditHospital({ rowData, onUpdate }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (rowData) {
            // You can handle any specific logic when rowData changes (optional)
        }
    }, [rowData]);

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        const updatedHospital = {
            id: rowData.id,  // Include the ID from rowData
            ...values,  // Include the updated values from the form
        };

        setLoading(true);  // Set loading state to true
        setError('');  // Reset error message
        setSuccess('');  // Reset success message

        try {
            // Call the API to update the hospital
            const response = await updateHospital(updatedHospital.id, updatedHospital);
            
            // If the update is successful, call onUpdate to update parent component state
            onUpdate(response);  // Assuming the API returns the updated hospital data
            setSuccess('Hospital updated successfully!');  // Show success message
        } catch (err) {
            setError('Error updating hospital. Please try again.');  // Show error message
        } finally {
            setLoading(false);  // Reset loading state
            setSubmitting(false);  // Reset Formik submitting state
        }
    };

    return (
        <Formik
            initialValues={{
                name: rowData ? rowData.name : '',
                address: rowData ? rowData.address : '',
                phone: rowData ? rowData.phone : ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}  // Pass handleSubmit as onSubmit handler
        >
            {({ isSubmitting }) => (
                <FormikForm>
                    <h6>Edit Hospital</h6>

                    {/* Display success or error message */}
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Hospital Name</Form.Label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter hospital name"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="address" className="mb-3">
                        <Form.Label>Hospital Address</Form.Label>
                        <Field
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Enter hospital address"
                        />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="phone" className="mb-3">
                        <Form.Label>Hospital Phone</Form.Label>
                        <Field
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter hospital phone"
                        />
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="mt-3" disabled={isSubmitting || loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default EditHospital;
