import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = () => {
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

  return (
    <div>
      <h2>Customer Dashboard</h2>
      {inventory.map((item) => (
        <div key={item._id}>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Weight: {item.weight}</p>
          <p>Price: {item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
      {/* Additional components for cart, order placement, etc. */}
    </div>
  );
};

export default Customer;
