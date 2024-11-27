import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { createCategory } from "../../services/categoryAPI";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Category name is required"),
  description: Yup.string().optional(),
});

// Reusable form field component for better readability
const FormField = ({ label, name, placeholder, as = "input", rows }) => (
  <Form.Group controlId={name} className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Field
      as={as}
      name={name}
      rows={rows}
      className="form-control"
      placeholder={placeholder}
    />
    <ErrorMessage name={name} component="div" className="text-danger" />
  </Form.Group>
);

function CreateCategory({ onSuccess }) {
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { name, description } = values;
    setMessage({ text: "", type: "" }); // Reset messages

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage({ text: "You are not authorized to create a category. Please login.", type: "error" });
      setSubmitting(false);
      return;
    }

    try {
      const response = await createCategory({ name, description }, token);
      setMessage({ text: "Category created successfully!", type: "success" });
      onSuccess(); // Call the onSuccess callback to refresh the table or close modal
    } catch (error) {
      console.error("Error creating category:", error);
      setMessage({
        text: error.response?.data?.message || "An error occurred while creating the category.",
        type: "error",
      });
    } finally {
      setSubmitting(false); // Stop the submitting state
    }
  };

  return (
    <section className="pt-4">
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm className="add-form pt-4 form mb-3">
              <h6 className="sub-title">Create Category</h6>

              {/* Success or Error Message */}
              {message.text && (
                <div className={`text-${message.type === "error" ? "danger" : "success"}`}>
                  {message.text}
                </div>
              )}

              <FormField
                label="Category Name"
                name="name"
                placeholder="Enter category name"
              />

              <FormField
                label="Category Description"
                name="description"
                placeholder="Enter category description"
                as="textarea"
                rows={3}
              />

              <Button type="submit" className="btn-add" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default CreateCategory;
