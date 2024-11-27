import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  
import { createHospital } from '../../services/hospitalAPI';  // Import the API function

// Validation Schema using Yup
const validationSchema = Yup.object({
  hospitalName: Yup.string().required('Hospital name is required'),
  hospitalAddress: Yup.string().required('Hospital address is required'),
  hospitalPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required('Hospital phone is required'),
 
  ownerEmail: Yup.string().email('Invalid email address').required('Owner email is required'),
  ownerPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Owner password is required'),
 
});

function FormField({ label, name, type = 'text', placeholder, as = 'input' }) {
  return (
    <Form.Group controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field
        as={as}
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
  );
}

function CreateHospital() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    const { hospitalName, hospitalAddress, hospitalPhone,ownerEmail, ownerPassword } = values;

    const hospitalData = {
      hospitalName,
      hospitalAddress,
      hospitalPhone,
      ownerEmail,
      ownerPassword
    };

    setLoading(true);  // Set loading state to true
    setError('');  // Reset error message
    setSuccess('');  // Reset success message

    try {
      // Call the API to create the hospital
      await createHospital(hospitalData);
      setSuccess('Hospital created successfully!');
    } catch (err) {
      setError('Error creating hospital. Please try again.');
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
  <section className="pt-4">
    <div className="container">
    <Formik
      initialValues={{
        hospitalName: '',
        hospitalAddress: '',
        hospitalPhone: '',
        ownerEmail: '',
        ownerPassword: '',
       
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="add-form ">
          <h6 className="sub-title">Create Hospital</h6>

          {/* Display success or error message */}
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <FormField label="Hospital Name" name="hospitalName" placeholder="Enter hospital name" />
          <FormField label="Hospital Address" name="hospitalAddress" placeholder="Enter hospital address" />
          <FormField label="Hospital Phone" name="hospitalPhone" type="tel" placeholder="Enter hospital phone" />
          <FormField label="Owner Email" name="ownerEmail" type="email" placeholder="Enter owner's email" />
          <FormField label="Owner Password" name="ownerPassword" type="password" placeholder="Enter owner's password" />
          

          {/* Submit Button */}
          <Button type="submit" variant="primary" className="mt-3" disabled={isSubmitting || loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </FormikForm>
      )}
    </Formik>
    </div>
  </section>
  );
}

export default CreateHospital;
