import React, { useState } from 'react';
import Table from '../../../Components/Table/Table';
import EditAdmin from '../Models/EditAdmin'; 

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' }
  ]);

  const [isEditing, setIsEditing] = useState(false); 
  const [selectedRow, setSelectedRow] = useState(null); 

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' }
  ];

  const handleEdit = (row) => {
    setSelectedRow(row); 
    setIsEditing(true); 
  };

  const handleDelete = (row) => {
    setData(data.filter(item => item.id !== row.id)); 
  };

  const handleUpdate = (updatedRow) => {
    
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
        <EditAdmin
          rowData={selectedRow}  // Pass the selected row data to EditAdmin form
          onUpdate={handleUpdate} // Function to handle the update after editing
        />
      )}
    </div>
  );
};

export default TableData;
