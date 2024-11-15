import React from "react";

function Table({ foodWasteData, handleEdit, handleDelete }) {
  return (
    <div>
      <h2>Food Waste Data</h2>
      {foodWasteData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Reason</th>
              <th>Time</th>
              <th>Meal</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodWasteData.map((data, index) => (
              <tr key={index}>
                <td>{data.category}</td>
                <td>{data.item}</td>
                <td>{data.quantity}</td>
                <td>{data.reason}</td>
                <td>{data.time}</td>
                <td>{data.meal}</td>
                <td>{data.note}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
