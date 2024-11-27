import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
const EmployeeRow = ({employee, onEdit, onDelete }) => (
  <tr>
    <td>{employee.name}</td>
    <td>{employee.address}</td>
    <td>{employee.email}</td>
    <td>
      <ActionButtons onEdit={() => onEdit(employee.id)} onDelete={() => onDelete(employee.id)} />
    </td>
  </tr>
);

const EmployeeTable = () => {
  const [employees, setEmployee] = useState([
    { id: 1, name: 'Ahmad', address: '123 Main St, Cityville', email: 'contact@cityhospital.com' },
    { id: 2, name: 'Roaa', address: '456 Oak St, Greenwood', email: 'info@greenwoodclinic.com' },
    { id: 3, name: 'no', address: '789 Maple St, Sunnyside', email: 'support@sunshinemed.com' },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit hospital with ID: ${id}`);
    // Example: Update hospital name or show a modal for editing
    setEmployee((prevState) =>
      prevState.map((employee) =>
        employee.id === id ? { ...employee, name: 'Updated Name' } : employee
      )
    );
  };

  const handleDelete = (id) => {
    console.log(`Delete hospital with ID: ${id}`);
    
    setEmployee((prevState) => prevState.filter((employee) => employee.id !== id));
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
          {employees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
