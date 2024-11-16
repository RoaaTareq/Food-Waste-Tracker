import React, { useState } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import Table from './Table';  // Assuming you have a Table component

// Validation schema using Yup
const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  item: Yup.string().required("Item is required"),
  quantity: Yup.number().required("Quantity is required").positive("Quantity must be positive"),
  reason: Yup.string().required("Reason is required"),
  time: Yup.string().required("Time is required"),
  meal: Yup.string().required("Meal is required"),
  note: Yup.string().optional(),
});

function FoodWaste() {
  const [foodWasteData, setFoodWasteData] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track editing row
  const [formVisible, setFormVisible] = useState(false); // Track form visibility

  const handleSubmit = (values, { setSubmitting }) => {
    if (isEditing === null) {
      setFoodWasteData([...foodWasteData, values]); // Add new entry
    } else {
      // Update existing entry
      const updatedData = foodWasteData.map((item, index) =>
        index === isEditing ? values : item
      );
      setFoodWasteData(updatedData);
      setIsEditing(null); // Reset editing
    }

    setSubmitting(false); // Stop form submission
    setFormVisible(false); // Close form after submission
  };

  // Handle edit action
  const handleEdit = (index) => {
    const selectedData = foodWasteData[index];
    setIsEditing(index); // Set the index being edited
    setFormVisible(true); // Open the form for editing
  };

  // Handle delete action
  const handleDelete = (index) => {
    const updatedData = foodWasteData.filter((_, i) => i !== index);
    setFoodWasteData(updatedData);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>Food Waste Info</h2>
        <button
          className="btn-add"
          onClick={() => setFormVisible(!formVisible)}
        >
          {formVisible ? "Close Form" : "Add Food Waste"}
        </button>
      </div>

      {formVisible && (
        <Formik
          initialValues={{
            category: "",
            item: "",
            quantity: "",
            reason: "",
            time: "",
            meal: "",
            note: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm className="form-group">
              <h6>Food Waste Form</h6>

              <div>
                <label>Category</label>
                <Field
                  type="text"
                  name="category"
                  className="form-control mt-3"
                  placeholder="Enter food category"
                />
                <ErrorMessage name="category" component="div" className="text-danger" />
              </div>

              <div>
                <label>Item</label>
                <Field
                  type="text"
                  name="item"
                  className="form-control mt-3"
                  placeholder="Enter food item"
                />
                <ErrorMessage name="item" component="div" className="text-danger" />
              </div>

              <div>
                <label>Quantity</label>
                <Field
                  type="number"
                  name="quantity"
                  className="form-control mt-3"
                  placeholder="Enter quantity"
                />
                <ErrorMessage name="quantity" component="div" className="text-danger" />
              </div>

              <div>
                <label>Reason</label>
                <Field
                  type="text"
                  name="reason"
                  className="form-control mt-3"
                  placeholder="Enter reason"
                />
                <ErrorMessage name="reason" component="div" className="text-danger" />
              </div>

              <div>
                <label>Time</label>
                <Field
                  type="time"
                  name="time"
                  className="form-control mt-3"
                />
                <ErrorMessage name="time" component="div" className="text-danger" />
              </div>

              <div>
                <label>Meal</label>
                <Field
                  type="text"
                  name="meal"
                  className="form-control mt-3"
                  placeholder="Enter meal"
                />
                <ErrorMessage name="meal" component="div" className="text-danger" />
              </div>

              <div>
                <label>Note</label>
                <Field
                  type="text"
                  name="note"
                  className="form-control mt-3"
                  placeholder="Enter note"
                />
                <ErrorMessage name="note" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn-add" disabled={isSubmitting}>
                {isEditing !== null ? "Update Waste" : "Add Waste Food"}
              </button>
            </FormikForm>
          )}
        </Formik>
      )}

      <Table
        foodWasteData={foodWasteData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default FoodWaste;
