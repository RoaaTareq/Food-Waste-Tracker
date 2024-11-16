import React, { useState, useEffect } from 'react';
import Table from '../../../Components/Table/Table';
import EditHospital from '../Models/EditHospital'; // Import the EditHospital form
import { getHospitals, deleteHospital, getHospitalById } from '../../services/hosiptalAPI'; // Import the API functions

const TableData = () => {
  const [data, setData] = useState([]); // Store the list of hospitals
  const [isEditing, setIsEditing] = useState(false); // To toggle between Table and Form
  const [selectedRow, setSelectedRow] = useState(null); // To store selected row data for editing

  // Fetch hospitals data on component mount
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitals = await getHospitals();
        setData(hospitals); // Set fetched hospitals data
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };
    fetchHospitals();
  }, []);

  // Handle edit button click
  const handleEdit = async (id) => {
    try {
      const hospital = await getHospitalById(id); // Fetch hospital details by ID
      setSelectedRow(hospital); // Set the selected hospital data to state
      setIsEditing(true); // Switch to the editing form
    } catch (error) {
      console.error('Error fetching hospital for editing:', error);
    }
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await deleteHospital(id); // Call delete API
      setData(data.filter((hospital) => hospital.id !== id)); // Remove the deleted hospital from the state
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  // Handle updating the hospital data
  const handleUpdate = (updatedRow) => {
    setData(data.map(item => (item.id === updatedRow.id ? updatedRow : item))); // Update the data array with the updated hospital
    setIsEditing(false); // Switch back to the table view after update
  };

  return (
    <div>
      {!isEditing ? (
        <Table
          columns={['ID', 'Name', 'Address', 'Phone', 'Actions']} // Example columns
          data={data}
          onEdit={handleEdit} // Pass the handleEdit function to Table component
          onDelete={handleDelete} // Pass the handleDelete function to Table component
        />
      ) : (
        <EditHospital
          rowData={selectedRow} // Pass the selected row data to the EditHospital form
          onUpdate={handleUpdate} // Pass the handleUpdate function to update data
        />
      )}
    </div>
  );
};

export default TableData;
