import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Admin name is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Admin email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function CreateAdmin() {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        //
        console.log("Form Submitted:", values);

        try {
            // Here, you can call your API or backend to submit the form data.
            // For example:
            // const response = await axios.post('/api/admin', values);

            // If successful, navigate to the admin list page
            navigate("/admin-list");
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error (e.g., show an alert)
        } finally {
            setSubmitting(false); // Set submitting to false when done
        }
    };

    return (
        <Formik
            initialValues={{
                name: "",
                phone: "",
                email: "",
                password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm className="form-admin">
                    <h6>Create Admin</h6>

                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Admin Name</Form.Label>
                        <Field type="text" name="name" className="form-control" placeholder="Enter admin name" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="phone" className="mb-3">
                        <Form.Label>Admin Phone</Form.Label>
                        <Field type="tel" name="phone" className="form-control" placeholder="Enter admin phone" />
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Admin Email</Form.Label>
                        <Field type="email" name="email" className="form-control" placeholder="Enter admin email" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Admin Password</Form.Label>
                        <Field type="password" name="password" className="form-control" placeholder="Enter admin password" />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                    </Form.Group>

                    <Button type="submit" className="btn-add mt-3" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </FormikForm>
            )}
        </Formik>
    );
}

export default CreateAdmin;
