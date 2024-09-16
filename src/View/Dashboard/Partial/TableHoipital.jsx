import React, { useState } from 'react';
import Table from '../../../Components/Table/Table';
import EditHospital from '../Models/EditHospital'; // Import the EditHospital form

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Oak St', phone: '987-654-3210' }
  ]);

  const [isEditing, setIsEditing] = useState(false); // To toggle between Table and Form
  const [selectedRow, setSelectedRow] = useState(null); // To store the row being edited

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' }
  ];

  // Handle edit button click and pass the row data for editing
  const handleEdit = (row) => {
    setSelectedRow(row); // Store the row's data for editing
    setIsEditing(true);  // Toggle to the EditHospital form
  };

  const handleDelete = (row) => {
    setData(data.filter(item => item.id !== row.id)); // Example delete logic
  };

  const handleUpdate = (updatedRow) => {
    // Update the data after editing the row using the row's id
    setData(data.map(item => (item.id === updatedRow.id ? updatedRow : item)));
    setIsEditing(false); // Hide the form after update
  };

  return (
    <div>
      {!isEditing ? (
        <Table
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <EditHospital
          rowData={selectedRow} // Pass the selected row data to the EditHospital form
          onUpdate={handleUpdate} // Pass the handleUpdate function to update data
        />
      )}
    </div>
  );
};

export default TableData;
