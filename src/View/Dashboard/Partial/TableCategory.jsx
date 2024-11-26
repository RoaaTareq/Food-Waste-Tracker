import React from 'react';
import HeaderCategory from './HeaderCategory'; 
import { Table, Button } from 'react-bootstrap';

const DataTable = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: 'Fruites', description: 'Fruits are the mature ovaries of flowering plants, typically containing seeds.' },
    { id: 2, name: 'vegetables', description: ' Vegetables are edible plants or parts of plants that are typically savory or less sweet than fruits.' },
    { id: 3, name: 'Cheese', description: ' Cheese is a dairy product made from the coagulation of milk proteins (mainly casein).' },
  ];

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
  };

  return (
    <div>
      <HeaderCategory /> 
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>CategoryName</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="primary" className='ml-2 mr-2' onClick={() => handleEdit(item.id)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(item.id)}
                  className="ml-2 mr-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
