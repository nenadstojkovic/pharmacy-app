import React from 'react';
import { Link } from 'react-router-dom';

const ProductDataRow = ({ product, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.manufacturerName}</td>
      <td>{product.price} €</td>
      <td>{product.expiryDate}</td>
      <td>
        <Link to='/edit'>
          <button type='button'>🖊️ Edit</button>
        </Link>
        <button type='button' onClick={() => handleDeleteClick(product.id)}>
          ❌ Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductDataRow;
