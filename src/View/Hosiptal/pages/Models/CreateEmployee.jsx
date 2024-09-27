import React, { useState } from "react";
import axios from "axios";

function CreateEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');
            // Retrieve the user from localStorage and parse it
            const user = JSON.parse(localStorage.getItem('user'));

            // Extract hospital_id from the user object
            const hospital_id = user.hospital_id;

            // Make the API call to create the employee
            const response = await axios.post(
                'http://localhost:8000/api/employees', 
                {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    password_confirmation: passwordConfirm,
                    hospital_id: hospital_id  // Pass the correct hospital_id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // Include the token for authorization
                    }
                }
            );

            setSuccess('Employee created successfully!');
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setPasswordConfirm('');
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred while creating the employee.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-employee ">
            <h2>Create New Employee</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Employee'}
                </button>
            </form>
        </div>
    );
}

export default CreateEmployee;
