import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap"; // Import necessary components from React Bootstrap

function EditCategory({ rowData, onUpdate }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Pre-fill the form with the selected row's data (including id)
    useEffect(() => {
        if (rowData) {
            setName(rowData.name);
            setEmail(rowData.email);
        }
    }, [rowData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the selected row's data and pass it back to TableData, including the row's id
        const updatedRow = {
            id: rowData.id,  // Include the id in the updated row data
            name,
            email
        };
        onUpdate(updatedRow); // Call onUpdate with the updated row data
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h6>Edit Category</h6>
            
            {/* Category Name */}
            <Form.Group controlId="categoryName" className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                    required
                />
            </Form.Group>

            {/* Category Email (Optional) */}
            <Form.Group controlId="categoryEmail" className="mb-3">
                <Form.Label>Category Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter category email (optional)"
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="mt-3">
                Submit
            </Button>
        </Form>
    );
}

export default EditCategory;
