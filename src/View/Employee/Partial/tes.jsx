import React, { useState } from 'react';
import Button from '../../../Components/Buttons/Buttons';
import CreateFood from '../Partial/CreateFood';  // Import the CreateFood form

function Header() {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState); // Toggles form visibility
  };

  // Function to close the form after submission
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Food Waste Info</h1>
        <div>
          <Button className="btn-add" onClick={handleButtonClick}>
            {showForm ? "Close Form" : "Add food waste +"}
          </Button>
        </div>
      </div>

      {showForm && (
        <CreateFood closeForm={closeForm} />  // Pass closeForm function as prop
      )}
    </div>
  );
}

export default Header;
