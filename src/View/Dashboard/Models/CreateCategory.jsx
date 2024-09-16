import React, { useState } from "react";
import Input from "../../../Components/Inputs/Input";  // Assuming this is the correct path
import Button from "../../../Components/Buttons/Buttons";  // Assuming this is the correct path

function CreateCategory() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API or backend)
        console.log("Category Name:", name);
        console.log("Category Description:", description);
    };

    return (
        <form onSubmit={handleSubmit} >
            <h6>Create Category</h6>
            <div className="form-group">
                {/* <label htmlFor="categoryName">Category Name:</label> */}
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
                {/* <label htmlFor="categoryDescription">Category Description:</label> */}
                <Input
                    type="text"
                    id="categoryDescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control mt-3"
                    placeholder="Enter category description"
                    required
                />
            </div>

            <Button type="submit" className="btn-add">
                Submit
            </Button>
        </form>
    );
}

export default CreateCategory;
