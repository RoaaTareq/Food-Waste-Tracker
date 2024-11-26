import React, { useState } from 'react';
import Button from '../../../Components/Buttons/Buttons';
import CreateAdmin from '../Models/CreateAdmin'; 

function Header() {
  const [showForm, setShowForm] = useState(false); 

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState); 
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
        <CreateAdmin />  
      )}
    </div>
  );
}

export default Header;
