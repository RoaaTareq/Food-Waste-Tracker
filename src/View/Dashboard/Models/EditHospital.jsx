import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap"; 
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup'; 


const validationSchema = Yup.object({
    name: Yup.string().required('Hospital name is required'),
    address: Yup.string().required('Hospital address is required'),
    phone: Yup.string()
        .required('Hospital phone is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
});

function EditHospital({ rowData, onUpdate }) {
    useEffect(() => {
        
        if (rowData) {
            
        }
    }, [rowData]);

    const handleSubmit = async (values, { setSubmitting }) => {
        const updatedRow = {
            id: rowData.id,  // Include the id in the updated row data
            ...values,  // Spread form values from Formik
        };

        try {
            // Pass the updated row back to the parent component (TableData)
            onUpdate(updatedRow);
        } catch (error) {
            console.error('Error updating hospital:', error);
        } finally {
            setSubmitting(false);  // Stop the submitting state
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
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm>
                    <h6>Edit Hospital</h6>

                   
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

                   
                    <Button type="submit" variant="primary" className="mt-3" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default EditHospital;
