import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function FoodWasteTable() {
  return (
    <div>
    
      <Table striped bordered hover>
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
          {/* Sample row of food waste data */}
          <tr>
            <td>ff</td>
            <td>yy</td>
            <td>20</td>
            <td>20</td>
            <td>44</td>
            <td>njkbh</td>
            <td>88</td>
            <td>
              {/* Edit and Delete buttons */}
              <Link to ='/employee/edit-food'variant="primary"  className="me-2 btn btn-primary">
                Edit
              </Link>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FoodWasteTable;
