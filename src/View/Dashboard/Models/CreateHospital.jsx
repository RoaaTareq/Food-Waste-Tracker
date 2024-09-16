import React, { useState } from "react";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

function CreateHospital() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API or backend)
        console.log("Hospital Name:", name);
        console.log("Hospital Address:", address);
        console.log("Hospital Phone:", phone);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h6>Create Hospital</h6>
            
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

export default CreateHospital;
