import React from 'react';
import HeaderCategory from './HeaderCategory';
import { Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

const DataTable = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: 'Fruits', description: 'Fruits are the mature ovaries of flowering plants, typically containing seeds.' },
    { id: 2, name: 'Vegetables', description: 'Vegetables are edible plants or parts of plants that are typically savory or less sweet than fruits.' },
    { id: 3, name: 'Cheese', description: 'Cheese is a dairy product made from the coagulation of milk proteins (mainly casein).' },
  ];

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
  };

  return (
    <Container className="pt-4">
      {/* Header section */}
      <HeaderCategory /> 

      {/* Table Section */}
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Link
                    to='/dashboard/category/edit-category'
                      variant="primary" 
                      className="me-2 btn btn-primary" 
                      onClick={() => handleEdit(item.id)}>
                      Edit
                    </Link>
                    <Button 
                      variant="danger" 
                      onClick={() => handleDelete(item.id)} 
                      className="me-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DataTable;
