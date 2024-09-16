import React, { useState, useEffect } from "react";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

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
        <form onSubmit={handleSubmit} className="edit-form">
            <h6>Edit Hospital</h6>
            
            {/* Hospital Name */}
            <div className="form-group">
                <Input
                    type="text"
                    id="hospitalName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter hospital name"
                    required
                />
            </div>

            {/* Hospital Address */}
            <div className="form-group mt-3">
                <Input
                    type="text"
                    id="hospitalAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    placeholder="Enter hospital address"
                    required
                />
            </div>

            {/* Hospital Phone */}
            <div className="form-group mt-3">
                <Input
                    type="tel"
                    id="hospitalPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter hospital phone"
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

export default EditHospital;
