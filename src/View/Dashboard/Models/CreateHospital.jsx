import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import { Form, Button, Alert } from "react-bootstrap";  // Import necessary components from React Bootstrap

function CreateHospital() {
    const [hospitalName, setHospitalName] = useState('');
    const [hospitalAddress, setHospitalAddress] = useState('');
    const [hospitalPhone, setHospitalPhone] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');
    const [ownerPasswordConfirm, setOwnerPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);  // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true); // Set loading to true

        // Get the token from localStorage (assuming it's stored there after login)
        const token = localStorage.getItem('token');

        if (!token) {
            setError("You are not authorized. Please login.");
            setLoading(false);
            return;
        }

        try {
            // Send a POST request to the backend API to register the hospital and owner
            const response = await axios.post('http://127.0.0.1:8000/api/hospitals', 
                {
                    hospital_name: hospitalName,
                    hospital_address: hospitalAddress,
                    hospital_phone: hospitalPhone,
                    owner_name: ownerName,
                    owner_email: ownerEmail,
                    owner_password: ownerPassword,
                    owner_password_confirmation: ownerPasswordConfirm,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    }
                }
            );

            // If successful, display a success message
            setSuccess('Hospital and owner registered successfully!');
            console.log('Hospital registered:', response.data);

            // Clear the input fields after submission
            setHospitalName('');
            setHospitalAddress('');
            setHospitalPhone('');
            setOwnerName('');
            setOwnerEmail('');
            setOwnerPassword('');
            setOwnerPasswordConfirm('');

        } catch (err) {
            console.error('Error registering hospital:', err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred while registering the hospital.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false); // Stop the loading state
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h6>Create Hospital and Owner</h6>

            {/* Display success or error message */}
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Hospital Details */}
            <Form.Group controlId="hospitalName" className="mb-3">
                <Form.Label>Hospital Name</Form.Label>
                <Form.Control
                    type="text"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    placeholder="Enter hospital name"
                    required
                />
            </Form.Group>

            <Form.Group controlId="hospitalAddress" className="mb-3">
                <Form.Label>Hospital Address</Form.Label>
                <Form.Control
                    type="text"
                    value={hospitalAddress}
                    onChange={(e) => setHospitalAddress(e.target.value)}
                    placeholder="Enter hospital address"
                    required
                />
            </Form.Group>

            <Form.Group controlId="hospitalPhone" className="mb-3">
                <Form.Label>Hospital Phone</Form.Label>
                <Form.Control
                    type="tel"
                    value={hospitalPhone}
                    onChange={(e) => setHospitalPhone(e.target.value)}
                    placeholder="Enter hospital phone"
                    required
                />
            </Form.Group>

            {/* Owner Details */}
            <Form.Group controlId="ownerName" className="mb-3">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Enter owner's name"
                    required
                />
            </Form.Group>

            <Form.Group controlId="ownerEmail" className="mb-3">
                <Form.Label>Owner Email</Form.Label>
                <Form.Control
                    type="email"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                    placeholder="Enter owner's email"
                    required
                />
            </Form.Group>

            <Form.Group controlId="ownerPassword" className="mb-3">
                <Form.Label>Owner Password</Form.Label>
                <Form.Control
                    type="password"
                    value={ownerPassword}
                    onChange={(e) => setOwnerPassword(e.target.value)}
                    placeholder="Enter owner's password"
                    required
                />
            </Form.Group>

            <Form.Group controlId="ownerPasswordConfirm" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    value={ownerPasswordConfirm}
                    onChange={(e) => setOwnerPasswordConfirm(e.target.value)}
                    placeholder="Confirm owner's password"
                    required
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </Button>
        </Form>
    );
}

export default CreateHospital;
