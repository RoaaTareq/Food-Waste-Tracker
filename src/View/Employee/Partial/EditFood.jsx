import React from 'react';
import { Form, Button } from 'react-bootstrap';

function EditFood() {
  return (
    <Form className='bg-form'>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" />
      </Form.Group>

      <Form.Group controlId="item">
        <Form.Label>Item</Form.Label>
        <Form.Control type="text" placeholder="Enter item" />
      </Form.Group>

      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter quantity" />
      </Form.Group>

      <Form.Group controlId="reason">
        <Form.Label>Reason</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter reason" />
      </Form.Group>

      <Form.Group controlId="meal">
        <Form.Label>Meal</Form.Label>
        <Form.Control type="text" placeholder="Enter meal" />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditFood;
