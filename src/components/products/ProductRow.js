import React from 'react';

const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.manufacturerName}</td>
      <td>{product.price} €</td>
      <td>{product.expiryDate}</td>
      <td>
        <button
          type='button'
          onClick={(event) => handleEditClick(event, product)}
        >
          🖊️ Edit
        </button>
        <button type='button' onClick={() => handleDeleteClick(product.id)}>
          ❌ Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
