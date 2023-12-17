import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Manager = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/inventory/get-inventory');
        setInventory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInventory();
  }, []);

  const handleEdit = (productId) => {
    alert("Redirecting to edit page");
  };

  const handleAddNewItem = () => {
    alert('adding new item');
  };

  const handleViewOrders = () => {
    alert("adding new items");
  };

  const handleDelete = async (productId) => {
    try {
        await axios.delete(`http://localhost:5000/inventory/delete-product/${productId}`);
        setInventory((prevInventory) => prevInventory.filter((item) => item._id !== productId));
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      {inventory.map((item) => (
        <div key={item._id}>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Weight: {item.weight}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => handleEdit(item._id)}>Edit</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddNewItem}>Add New Item</button>
      <button onClick={handleViewOrders}>View Orders</button>
    </div>
  );
};

export default Manager;
