import React, { useState, useEffect } from "react";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

function EditCategory({ rowData, onUpdate }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Pre-fill the form with the selected row's data (including id)
    useEffect(() => {
        if (rowData) {
            setName(rowData.name);
            setEmail(rowData.email);
        }
    }, [rowData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the selected row's data and pass it back to TableData, including the row's id
        const updatedRow = {
            id: rowData.id,  // Include the id in the updated row data
            name,
            email
        };
        onUpdate(updatedRow); // Call onUpdate with the updated row data
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form" >
            <h6>Edit Category</h6>
            <div className="form-group">
                <Input
                    type="text"
                    id="categoryName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter category name"
                    required
                />
            </div>

            <div className="form-group">
                <Input
                    type="email"
                    id="categoryEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mt-3"
                    placeholder="Enter email"
                    required
                />
            </div>

            <Button type="submit" className="btn-add">
                Submit
            </Button>
        </form>
    );
}

export default EditCategory;
