import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Get the token from localStorage (assuming it's stored there after login)
        const token = localStorage.getItem('token');

        if (!token) {
            setError("You are not authorized. Please login.");
            return;
        }

        try {
            // Send a POST request to the backend API to register the hospital and owner
            const response = await axios.post('http://localhost:8000/api/hospitals', 
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
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h6>Create Hospital and Owner</h6>

            {/* Display success or error message */}
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Hospital Details */}
            <Input
                type="text"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                placeholder="Hospital Name"
                required
            />
            <Input
                type="text"
                value={hospitalAddress}
                onChange={(e) => setHospitalAddress(e.target.value)}
                placeholder="Hospital Address"
                required
            />
            <Input
                type="tel"
                value={hospitalPhone}
                onChange={(e) => setHospitalPhone(e.target.value)}
                placeholder="Hospital Phone"
                required
            />

            {/* Owner Details */}
            <Input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Owner Name"
                required
            />
            <Input
                type="email"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                placeholder="Owner Email"
                required
            />
            <Input
                type="password"
                value={ownerPassword}
                onChange={(e) => setOwnerPassword(e.target.value)}
                placeholder="Owner Password"
                required
            />
            <Input
                type="password"
                value={ownerPasswordConfirm}
                onChange={(e) => setOwnerPasswordConfirm(e.target.value)}
                placeholder="Confirm Password"
                required
            />

            <Button type="submit" className="btn-add mt-3">
                Submit
            </Button>
        </form>
    );
}

export default CreateHospital;
