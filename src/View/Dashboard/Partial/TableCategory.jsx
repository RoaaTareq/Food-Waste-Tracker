import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Table from '../../../Components/Table/Table';
import EditCategory from '../Models/EditCategory'; // Import the EditCategory form
import HeaderCategory from './HeaderCategory'; // Import the updated HeaderCategory component

const TableData = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To toggle between Table and Form
  const [selectedRow, setSelectedRow] = useState(null); // To store the row being edited
  const [error, setError] = useState(''); // To handle errors

  // Define columns for the table
  const columns = [
    { label: 'Category Name', key: 'name' },
    
  ];

  // Function to fetch categories from the API
  const fetchCategories = async () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    if (!token) {
      setError('You are not authorized. Please login.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8000/api/categories', {
        headers: {
          Authorization: `Bearer ${token}` // Pass token in the Authorization header
        }
      });

      setData(response.data); // Update state with the fetched categories
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to fetch categories. Please try again.');
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle edit button click and pass the id of the selected row
  const handleEdit = (row) => {
    setSelectedRow(row); // Store the selected row's data (including id)
    setIsEditing(true);  // Toggle to the EditCategory form
  };

  // Handle delete button
  const handleDelete = async (row) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    if (!token) {
      setError('You are not authorized. Please login.');
      return;
    }

    try {
      // Send DELETE request to API
      await axios.delete(`http://localhost:8000/api/categories/${row.id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Pass token in the Authorization header
        }
      });

      // Remove the deleted item from the state
      setData(data.filter(item => item.id !== row.id));
    } catch (err) {
      console.error('Error deleting category:', err);
      setError('Failed to delete the category. Please try again.');
    }
  };

  // Handle update after editing a category
  const handleUpdate = (updatedRow) => {
    setData(data.map(item => (item.id === updatedRow.id ? updatedRow : item)));
    setIsEditing(false); // Hide the form after update
  };

  return (
    <div>
      <HeaderCategory refreshTable={fetchCategories} /> {/* Pass refreshTable function */}

      {error && <div className="alert alert-danger">{error}</div>}

      {!isEditing ? (
        <Table
          columns={columns}  
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}  // Pass the handleDelete function to the Table component
        />
      ) : (
        <EditCategory
          rowData={selectedRow} // Pass the selected row's data to the EditCategory form
          onUpdate={handleUpdate} // Pass the handleUpdate function to update data
        />
      )}
    </div>
  );
};

export default TableData;
