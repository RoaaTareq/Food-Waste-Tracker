import React, { useState } from 'react';
import Button from '../../../Components/Buttons/Buttons';
import CreateAdmin from '../Models/CreateAdmin';  // Import the CreateAdmin form

function Header() {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState); // Toggles form visibility
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Admin Info</h1>
        <div>
          <Button className="btn-add" onClick={handleButtonClick}>
            {showForm ? "Close Form" : "Add Admin +"}
          </Button>
        </div>
      </div>

      {showForm && (
        <CreateAdmin />  // Show form if showForm is true
      )}
    </div>
  );
}

export default Header;
