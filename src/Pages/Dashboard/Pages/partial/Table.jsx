import React, { useState } from 'react';
import Table from '../../../../Components/Table/Table';

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' }
  ];

  const handleEdit = (row) => {
    console.log('Edit row:', row);
    // Add your edit logic here
  };

  const handleDelete = (row) => {
    console.log('Delete row:', row);
    // Add your delete logic here
    setData(data.filter(item => item.id !== row.id)); // Example delete logic
  };

  return (
    <div>
      <h1>Admin Info</h1>
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TableData;
