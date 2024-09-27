import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

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
        <form onSubmit={handleSubmit} className="form-admin">
            <h6>Create Admin</h6>

            {/* Admin Name */}
            <div className="form-group">
                <Input
                    type="text"
                    id="adminName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter admin name"
                    required
                />
            </div>

            {/* Admin Phone */}
            <div className="form-group mt-3">
                <Input
                    type="tel"
                    id="adminPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter admin phone"
                    required
                />
            </div>

            {/* Admin Email */}
            <div className="form-group mt-3">
                <Input
                    type="email"
                    id="adminEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter admin email"
                    required
                />
            </div>

            {/* Admin Password */}
            <div className="form-group mt-3">
                <Input
                    type="password"
                    id="adminPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter admin password"
                    required
                />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="btn-add mt-3">
                Submit
            </Button>
        </form>
    );
}

export default CreateAdmin;
