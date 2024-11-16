import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap"; // Import necessary components from React Bootstrap

function EditHospital({ rowData, onUpdate }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // Pre-fill the form with the selected row's data when the row is passed
    useEffect(() => {
        if (rowData) {
            setName(rowData.name);
            setAddress(rowData.address);
            setPhone(rowData.phone);
        }
    }, [rowData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare updated row data and pass it back to TableData for updating
        const updatedRow = {
            ...rowData,
            name,
            address,
            phone
        };
        onUpdate(updatedRow); // Pass the updated row back to TableData
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h6>Edit Hospital</h6>

            {/* Hospital Name */}
            <Form.Group controlId="hospitalName" className="mb-3">
                <Form.Label>Hospital Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter hospital name"
                    required
                />
            </Form.Group>

            {/* Hospital Address */}
            <Form.Group controlId="hospitalAddress" className="mb-3">
                <Form.Label>Hospital Address</Form.Label>
                <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter hospital address"
                    required
                />
            </Form.Group>

            {/* Hospital Phone */}
            <Form.Group controlId="hospitalPhone" className="mb-3">
                <Form.Label>Hospital Phone</Form.Label>
                <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter hospital phone"
                    required
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="mt-3">
                Submit
            </Button>
        </Form>
    );
}

export default EditHospital;
