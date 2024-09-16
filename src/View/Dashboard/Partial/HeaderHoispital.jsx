import React, { useState, useRef, useEffect } from "react";
import Button from "../../../Components/Buttons/Buttons";
import CreateHospital from "../Models/CreateHospital"; // Import the CreateCategory form

function HeaderHospital() {
    const [showForm, setShowForm] = useState(false); // State to manage form visibility
    const formRef = useRef(null);

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle form visibility
    };

    // Function to handle click outside the form
    const handleClickOutside = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            setShowForm(false); // Close the form if clicked outside
        }
    };

    useEffect(() => {
        // Attach event listener when the form is visible
        if (showForm) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener when component is unmounted or form is hidden
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showForm]);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Hospital Info</h1>
                <div>
                    <Button className="btn-add" onClick={toggleForm}>
                        {showForm ? "Close Form" : "Add Hosiptal +"}
                    </Button>
                </div>
            </div>

            {showForm && (
                <div className="overlay">
                    <div className="form-container" ref={formRef}>
                        <CreateHospital />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderHospital;
