import React, { useState, Fragment } from 'react';

import ProductRow from '../products/ProductRow';
import ProductRowEdit from '../products/ProductRowEdit';

const Products = () => {
  const productsData = JSON.parse(localStorage.getItem('data'));
  const [products, setProducts] = useState(productsData);

  const [addFormData, setAddFormData] = useState({
    name: '',
    manufacturerName: '',
    price: '',
    expiryDate: '',
  });

  const [editFormData, setEditFormData] = useState({
    name: '',
    manufacturerName: '',
    price: '',
    expiryDate: '',
  });

  const [editProductId, setEditProductId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: 15 + 1,
      name: addFormData.name,
      manufacturerName: addFormData.manufacturerName,
      price: addFormData.price,
      expiryDate: addFormData.expiryDate,
    };

    const newProducts = [...products, newProduct];
    localStorage.setItem('data', JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProduct = {
      id: editProductId,
      name: editFormData.name,
      manufacturerName: editFormData.manufacturerName,
      price: editFormData.price,
      expiryDate: editFormData.expiryDate,
    };

    const newProducts = [...products];

    const index = products.findIndex((product) => product.id === editProductId);

    newProducts[index] = editedProduct;

    localStorage.setItem('data', JSON.stringify(newProducts));
    setProducts(newProducts);
    setEditProductId(null);
  };

  const handleEditClick = (event, product) => {
    event.preventDefault();
    setEditProductId(product.id);

    const formValues = {
      name: product.name,
      price: product.price,
      manufacturerName: product.manufacturerName,
      expiryDate: product.expiryDate,
    };

    localStorage.setItem('data', JSON.stringify(formValues));
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProductId(null);
  };

  const handleDeleteClick = (productId) => {
    const newProducts = [...products];

    const index = products.findIndex((product) => product.id === productId);

    newProducts.splice(index, 1);

    localStorage.setItem('data', JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  return (
    <div className='products'>
      <h2>Add a product</h2>
      <form onSubmit={handleAddFormSubmit}>
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
        <button type='submit'>➕ Add</button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
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
            {products.map((product) => (
              <Fragment>
                {editProductId === product.id ? (
                  <ProductRowEdit
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ProductRow
                    product={product}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Products;
