import React, { useState } from 'react';
import Table from '../../../Components/Table/Table';
import EditCategory from '../Models/EditCategory'; // Import the EditCategory form

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', descrption: 'john@example.com' },
    { id: 2, name: 'Jane Smith',  descrption: 'jane@example.com' }
  ]);

  const [isEditing, setIsEditing] = useState(false); // To toggle between Table and Form
  const [selectedRow, setSelectedRow] = useState(null); // To store the row being edited

  const columns = [
    { label: 'Categoryname', key: 'name' },
    { label: 'Descrption', key: 'descrption' }
  ];

  // Handle edit button click and pass the id of the selected row
  const handleEdit = (row) => {
    setSelectedRow(row); // Store the selected row's data (including id)
    setIsEditing(true);  // Toggle to the EditCategory form
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
        <EditCategory
          rowData={selectedRow} // Pass the selected row's data to the EditCategory form
          onUpdate={handleUpdate} // Pass the handleUpdate function to update data
        />
      )}
    </div>
  );
};

export default TableData;
