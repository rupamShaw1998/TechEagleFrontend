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
    // Handle edit logic
  };

  const handleDelete = (productId) => {
    // Handle delete logic
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
      {/* Additional components for adding new items, viewing orders, etc. */}
    </div>
  );
};

export default Manager;
