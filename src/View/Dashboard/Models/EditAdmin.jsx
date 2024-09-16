import React, { useState, useEffect } from "react";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

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
        <form onSubmit={handleSubmit}>
            <h6>Edit Admin</h6>

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
                />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="btn-add mt-3">
                Submit
            </Button>
        </form>
    );
}

export default EditAdmin;
