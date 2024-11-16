import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { Form, Button } from "react-bootstrap";  // Import React Bootstrap Form and Button components

function CreateAdmin() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API or backend)
        console.log("Admin Name:", name);
        console.log("Admin Phone:", phone);
        console.log("Admin Email:", email);
        console.log("Admin Password:", password);
        
        // Add your API call or backend logic here.
        
        // After form submission is successful, navigate to another page (e.g., admin list)
        navigate("/admin-list");  // Replace "/admin-list" with the appropriate path
    };

    return (
        <Form onSubmit={handleSubmit} className="form-admin">
            <h6>Create Admin</h6>

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
                    required
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" className="btn-add mt-3">
                Submit
            </Button>
        </Form>
    );
}

export default CreateAdmin;
