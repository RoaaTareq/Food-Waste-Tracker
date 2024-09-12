// Table.js
import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ columns, data, className = '', onEdit, onDelete }) => {
  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
          <th>Actions</th> {/* New column for actions */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col.key]}</td>
            ))}
            <td>
              <button onClick={() => onEdit(row)} style={{ marginRight: '10px' }} className='btn btn-info'>
                ✏️ Edit
              </button>
              <button onClick={() => onDelete(row)} className='btn btn-danger'>
                🗑️ Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Column header
      key: PropTypes.string.isRequired    // Key in data corresponding to this column
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Array of row objects
  className: PropTypes.string, // Optional class for styling
  onEdit: PropTypes.func.isRequired, // Callback for edit action
  onDelete: PropTypes.func.isRequired // Callback for delete action
};

export default Table;
