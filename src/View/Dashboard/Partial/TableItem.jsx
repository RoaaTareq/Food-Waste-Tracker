import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ItemCategoryTable = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', description: 'Devices like phones, laptops, etc.' },
    { id: 2, name: 'Furniture', description: 'Chairs, tables, and sofas' },
    { id: 3, name: 'Clothing', description: 'Apparel and fashion items' },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  const handleEditClick = (category) => {
    setCurrentCategory(category);
    setNewCategoryName(category.name);
    setNewCategoryDescription(category.description);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setCategories((prevState) =>
      prevState.map((category) =>
        category.id === currentCategory.id
          ? { ...category, name: newCategoryName, description: newCategoryDescription }
          : category
      )
    );
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setCategories((prevState) => prevState.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h2>Item Categories</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Category ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditClick(category)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(category.id)}
                  className="ml-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="categoryDescription">
              <Form.Label>Category Description</Form.Label>
              <Form.Control
                type="text"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemCategoryTable;
