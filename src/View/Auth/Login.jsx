import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Button, Alert } from "react-bootstrap";
import { loginUser } from "../services/authApi";
import dashboard from "../../assets/Images/dashboard.jpg";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = ({ updateAuth }) => {
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (values, { setSubmitting }) => {
        const { email, password } = values;
        setLoginError(null);
        try {
            const data = await loginUser(email, password);

            updateAuth();
            if (data.user.role === "admin") {
                navigate("/dashboard");
            } else if (data.user.role === "hospital") {
                navigate("/hospital");
            } else {
                navigate("/employee/employee");
            }
        } catch (error) {
            setLoginError(error.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="login-page">
            <div className="login-container">
                <h2 className="text-black">Login</h2>
                <img src={dashboard} alt="dashboard" className="d-flex m-auto" />
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting, touched, errors }) => (
                        <FormikForm>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    as={Form.Control}
                                    isInvalid={touched.email && errors.email}
                                />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    as={Form.Control}
                                    isInvalid={touched.password && errors.password}
                                />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </Form.Group>

                            {loginError && <Alert variant="danger">{loginError}</Alert>}

                            <Button type="submit" className="btn btn-primary" variant="primary" disabled={isSubmitting}>
                                {isSubmitting ? "Logging in..." : "Login"}
                            </Button>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default Login;
