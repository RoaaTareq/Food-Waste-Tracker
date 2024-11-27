import React from 'react';
import { Table } from 'react-bootstrap';

const FoodTable = () => {
  // Sample food data
  const foodItems = [
    { id: 1, name: 'Apple', quantity: 20 },
    { id: 2, name: 'Banana', quantity: 15 },
    { id: 3, name: 'Orange', quantity: 25 },
    { id: 4, name: 'Grapes', quantity: 30 },
    { id: 5, name: 'Mango', quantity: 10 },
  ];

  return (
    <div className="container mt-5">
      <h2 className='sub-title'>Food Items and Quantities</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Food Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FoodTable;
