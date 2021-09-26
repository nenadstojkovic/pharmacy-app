import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditableRow = ({}) => {
  return (
    <table className='table-style-edit'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Price</th>
          <th>Expiry date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type='text'
              required='required'
              placeholder='Name'
              name='name'
            ></input>
          </td>
          <td>
            <input
              type='text'
              required='required'
              placeholder='Manufacturer'
              name='manufacturerName'
            ></input>
          </td>
          <td>
            <input
              type='number'
              required='required'
              placeholder='Price'
              name='price'
            ></input>
          </td>
          <td>
            <input
              type='date'
              required='required'
              placeholder='Expiry date'
              name='expiryDate'
            ></input>
          </td>
          <td>
            <Link to='/products-new'>
              <button type='submit'>✔️ Save</button>
            </Link>
            <Link to='/products-new'>
              <button type='button'>✖️ Cancel</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EditableRow;
