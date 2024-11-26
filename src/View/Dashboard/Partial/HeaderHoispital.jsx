import React, { useState, useRef, useEffect } from "react";
import Button from "../../../Components/Buttons/Buttons";
import CreateHospital from "../Models/CreateHospital"; 

function HeaderHospital() {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);

    const toggleForm = () => {
        setShowForm(!showForm); 
    };

   
    const handleClickOutside = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            setShowForm(false); 
        }
    };

    useEffect(() => {
        
        if (showForm) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showForm]);

    return (
        <div>
            <div className="d-flex justify-content-between pt-5">
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
