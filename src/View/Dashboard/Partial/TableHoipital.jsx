import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Reusable Action Buttons Component
const ActionButtons = ({ onEdit, onDelete }) => (
  <div>
    <Link to="/dashboard/hospital/edit-hospital" variant="primary" className='btn btn-primary me-2' onClick={onEdit}>
      Edit
    </Link>
    <Button variant="danger" onClick={onDelete} className="me-2">
      Delete
    </Button>
  </div>
);

// Reusable HospitalRow Component
const HospitalRow = ({ hospital, onEdit, onDelete }) => (
  <tr>
    <td>{hospital.name}</td>
    <td>{hospital.address}</td>
    <td>{hospital.email}</td>
    <td>
      <ActionButtons onEdit={() => onEdit(hospital.id)} onDelete={() => onDelete(hospital.id)} />
    </td>
  </tr>
);

const HospitalTable = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City Hospital', address: '123 Main St, Cityville', email: 'contact@cityhospital.com' },
    { id: 2, name: 'Greenwood Clinic', address: '456 Oak St, Greenwood', email: 'info@greenwoodclinic.com' },
    { id: 3, name: 'Sunshine Medical Center', address: '789 Maple St, Sunnyside', email: 'support@sunshinemed.com' },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit hospital with ID: ${id}`);
    // Example: Update hospital name or show a modal for editing
    setHospitals((prevState) =>
      prevState.map((hospital) =>
        hospital.id === id ? { ...hospital, name: 'Updated Name' } : hospital
      )
    );
  };

  const handleDelete = (id) => {
    console.log(`Delete hospital with ID: ${id}`);
    // Example: Remove the hospital from the list
    setHospitals((prevState) => prevState.filter((hospital) => hospital.id !== id));
  };

  return (
    <div>
     

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <HospitalRow
              key={hospital.id}
              hospital={hospital}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalTable;
