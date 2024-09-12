import React, { useState } from 'react';
import Table from '../../../../Components/Table/Table';
import AdminUpdate from '../../Pages/Models/EditAdmin';

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [isEditing, setIsEditing] = useState(false); // To toggle between Table and Form
  const [selectedRow, setSelectedRow] = useState(null); // To store the row being edited

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' }
  ];

  const handleEdit = (row) => {
    setSelectedRow(row); // Store the row's data for editing
    setIsEditing(true);  // Toggle to the AdminUpdate form
  };

  const handleDelete = (row) => {
    setData(data.filter(item => item.id !== row.id)); // Example delete logic
  };

  const handleFormSubmit = (updatedData) => {
    // Update the data with the newly edited row
    setData(data.map(item => (item.id === updatedData.id ? updatedData : item)));
    setIsEditing(false); // Go back to table view after edit
  };

  return (
    <div>
      <h1>Admin Info</h1>
      {isEditing ? (
        <AdminUpdate
          formData={selectedRow} // Pass the selected row data to form
          onSubmit={handleFormSubmit} // Handle form submission
          onCancel={() => setIsEditing(false)} // Handle form cancellation
        />
      ) : (
        <Table
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TableData;
