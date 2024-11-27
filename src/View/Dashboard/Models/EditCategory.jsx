import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";


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

function EditCategory({ onSuccess }) {
  const [message, setMessage] = useState({ text: "", type: "" });

  

  return (
    <section className="pt-4">
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            description: "",
          }}
          validationSchema={validationSchema}
         
        >
          {({ isSubmitting }) => (
            <FormikForm className="add-form pt-4 form mb-3">
              <h6 className="sub-title">Edit Category</h6>

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

export default EditCategory;
