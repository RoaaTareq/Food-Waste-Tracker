import React, { useState, useEffect } from 'react';
import Table from '../../../Components/Table/Table';
import EditCategory from '../Models/EditCategory'; 
import HeaderCategory from './HeaderCategory'; 
import { deleteCategory, getCategories, getCategoryById } from '../../services/categoryAPI';

const TableData = () => {
  const [categories, setCategories] = useState([]); // Store categories data
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [selectedRow, setSelectedRow] = useState(null); // Store selected category for editing
  const [error, setError] = useState(null); // Declare error state

  // Define the columns for the table
  const columns = [
    { header: 'Category Name', accessor: 'name' },
    { header: 'Descrption', accessor: 'Descrption' },
    {
        header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
            <>
                <button onClick={() => handleEdit(row.original.id)}>Edit</button>
                <button onClick={() => handleDeleteCategory(row.original.id)}>Delete</button>
            </>
        ),
    },
  ];

  // Function to fetch categories
  const fetchCategories = async () => {
    try {
        const data = await getCategories(); // Fetch categories
        setCategories(data); // Set categories state
        setError(null); // Clear any previous error
    } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to fetch categories. Please try again.'); // Set error state
    }
  };

  useEffect(() => {
    fetchCategories(); // Call fetchCategories when the component mounts
  }, []); 

  // Handle editing a category: Set selectedRow and enable editing
  const handleEdit = async (id) => {
    try {
      const category = await getCategoryById(id); // Fetch category by ID
      setSelectedRow(category); // Set the selected row data
      setIsEditing(true); // Enable edit mode
    } catch (error) {
      console.error('Error fetching category for editing:', error);
      setError('Failed to fetch category for editing.');
    }
  };

  // Handle deleting a category
  const handleDeleteCategory = async (id) => {
    try {
        await deleteCategory(id); // Delete category by ID
        setCategories(categories.filter((category) => category.id !== id)); // Remove from the list
    } catch (error) {
        console.error('Error deleting category:', error);
        setError('Failed to delete category.');
    }
  };

  // Handle updating a category: Update categories state and exit edit mode
  const handleUpdate = (updatedRow) => {
    setCategories(categories.map(item => (item.id === updatedRow.id ? updatedRow : item))); // Update category data in state
    setIsEditing(false); // Exit edit mode
    setSelectedRow(null); // Clear selected row
  };

  return (
    <div>
      <HeaderCategory refreshTable={fetchCategories} /> {/* Header with refresh function */}

      {/* Display error message if there's an error */}
      {error && <div className="alert alert-danger">{error}</div>}

      {!isEditing ? (
        <Table
          columns={columns} // Pass columns to Table component
          data={categories} // Pass categories as data to Table
          onEdit={handleEdit} // Edit action will call handleEdit with category ID
          onDelete={handleDeleteCategory} // Delete action will call handleDeleteCategory with category ID
        />
      ) : (
        <EditCategory
          rowData={selectedRow} // Pass the selected category's data to the EditCategory component
          onUpdate={handleUpdate} // Callback to update the category after edit
        />
      )}
    </div>
  );
};

export default TableData;
