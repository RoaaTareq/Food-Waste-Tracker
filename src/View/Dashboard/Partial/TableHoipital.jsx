import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const HospitalTable = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City Hospital', address: '123 Main St, Cityville', email: 'contact@cityhospital.com' },
    { id: 2, name: 'Greenwood Clinic', address: '456 Oak St, Greenwood', email: 'info@greenwoodclinic.com' },
    { id: 3, name: 'Sunshine Medical Center', address: '789 Maple St, Sunnyside', email: 'support@sunshinemed.com' },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit hospital with ID: ${id}`);
    // Example of updating the data (you could show a modal for editing)
    setHospitals((prevState) =>
      prevState.map((hospital) =>
        hospital.id === id ? { ...hospital, name: 'Updated Name' } : hospital
      )
    );
  };

  const handleDelete = (id) => {
    console.log(`Delete hospital with ID: ${id}`);
    // Example of deleting the data
    setHospitals((prevState) => prevState.filter((hospital) => hospital.id !== id));
  };

  return (
    <div>
      
      <Table striped bordered hover>
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
            <tr key={hospital.id}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.email}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(hospital.id)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(hospital.id)}
                  className="ml-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalTable;
