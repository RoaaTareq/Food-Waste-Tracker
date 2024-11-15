import React, { useState } from "react";
import Table from './Table';

function FoodWaste() {
  const [formData, setFormData] = useState({
    category: "",
    item: "",
    quantity: "",
    reason: "",
    time: "",
    meal: "",
    note: "",
  });

  const [foodWasteData, setFoodWasteData] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track editing row
  const [formVisible, setFormVisible] = useState(false); // Track form visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new entry or update existing entry
    if (isEditing === null) {
      setFoodWasteData([...foodWasteData, formData]);
    } else {
      // Update existing entry
      const updatedData = foodWasteData.map((item, index) =>
        index === isEditing ? formData : item
      );
      setFoodWasteData(updatedData);
      setIsEditing(null);
    }

    // Reset form and close it
    setFormData({
      category: "",
      item: "",
      quantity: "",
      reason: "",
      time: "",
      meal: "",
      note: "",
    });

    // Close form after submission
    setFormVisible(false);
  };

  // Handle edit action
  const handleEdit = (index) => {
    const selectedData = foodWasteData[index];
    setFormData(selectedData);
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
        <form onSubmit={handleSubmit} className="form-group">
          <h6>Food Waste Form</h6>

          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter food category"
              className="form-control mt-3"
              required
            />
          </div>

          <div>
            <label>Item</label>
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              placeholder="Enter food item"
              className="form-control mt-3"
              required
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="form-control mt-3"
              required
            />
          </div>

          <div className="form-group">
            <label>Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter reason"
              className="form-control mt-3"
              required
            />
          </div>

          <div>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-control mt-3"
              required
            />
          </div>

          <div>
            <label>Meal</label>
            <input
              type="text"
              name="meal"
              value={formData.meal}
              onChange={handleChange}
              placeholder="Enter meal"
              className="form-control mt-3"
              required
            />
          </div>

          <div>
            <label>Note</label>
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter note"
              className="form-control mt-3"
            />
          </div>

          <button type="submit" className="btn-add">
            {isEditing !== null ? "Update Waste" : "Add Waste food"}
          </button>
        </form>
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
