import React, { useState } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

function CreateEmployee() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      // Retrieve the user from localStorage and parse it
      const user = JSON.parse(localStorage.getItem('user'));

      // Extract hospital_id from the user object
      const hospital_id = user.hospital_id;

      // Make the API call to create the employee
      const response = await axios.post(
        'http://localhost:8000/api/employees', 
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          password_confirmation: values.passwordConfirm,
          hospital_id: hospital_id, // Pass the correct hospital_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token for authorization
          },
        }
      );

      setSuccess('Employee created successfully!');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'An error occurred while creating the employee.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="form-employee">
      <h2>Create New Employee</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <div className="form-group">
              <label>Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter employee name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter employee email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <Field
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter employee phone"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <Field
                type="password"
                name="passwordConfirm"
                className="form-control"
                placeholder="Confirm password"
              />
              <ErrorMessage name="passwordConfirm" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting || loading}>
              {loading ? 'Creating...' : 'Create Employee'}
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

export default CreateEmployee;
