import React from 'react';
import { Link } from 'react-router-dom';

const AddRow = ({ handleAddFormSubmit, handleAddFormChange }) => {
  return (
    <>
      <form className='form-style' onSubmit={handleAddFormSubmit}>
        <h2>Add a new product</h2>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Name'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='manufacturerName'
          required='required'
          placeholder='Manufacturer'
          onChange={handleAddFormChange}
        />
        <input
          type='number'
          name='price'
          required='required'
          placeholder='Price'
          onChange={handleAddFormChange}
        />
        <input
          type='date'
          name='expiryDate'
          required='required'
          placeholder='Exp Date'
          onChange={handleAddFormChange}
        />
        <div>
          <Link to='/products-new'>
            <button type='submit'>➕ Add</button>
          </Link>
          <Link to='products-new'>
            <button>🔙 Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddRow;
