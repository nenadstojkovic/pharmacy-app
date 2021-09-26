import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Name'
          name='name'
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Manufacturer'
          name='manufacturerName'
          value={editFormData.manufacturerName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='number'
          required='required'
          placeholder='Price'
          name='price'
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='date'
          required='required'
          placeholder='Expiry date'
          name='expiryDate'
          value={editFormData.expiryDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type='submit'>✔️ Save</button>
        <button type='button' onClick={handleCancelClick}>
          ✖️ Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
