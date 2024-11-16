import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap"; // Import necessary components from React Bootstrap

function EditAdmin({ rowData, onUpdate }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Password might not be pre-filled

    // Populate form fields with selected row data when rowData is passed
    useEffect(() => {
        if (rowData) {
            setName(rowData.name || '');
            setPhone(rowData.phone || '');
            setEmail(rowData.email || '');
        }
    }, [rowData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare updated row data to send back to TableData for updating
        const updatedRow = {
            ...rowData,
            name,
            phone,
            email,
            password // Optional: You can choose to ignore password if not changed
        };
        onUpdate(updatedRow); // Send updated data to TableData for updating the row
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h6>Edit Admin</h6>

            {/* Admin Name */}
            <Form.Group controlId="adminName" className="mb-3">
                <Form.Label>Admin Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter admin name"
                    required
                />
            </Form.Group>

            {/* Admin Phone */}
            <Form.Group controlId="adminPhone" className="mb-3">
                <Form.Label>Admin Phone</Form.Label>
                <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter admin phone"
                    required
                />
            </Form.Group>

            {/* Admin Email */}
            <Form.Group controlId="adminEmail" className="mb-3">
                <Form.Label>Admin Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter admin email"
                    required
                />
            </Form.Group>

            {/* Admin Password */}
            <Form.Group controlId="adminPassword" className="mb-3">
                <Form.Label>Admin Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="mt-3">
                Submit
            </Button>
        </Form>
    );
}

export default EditAdmin;
