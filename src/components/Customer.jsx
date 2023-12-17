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

  const handleAddToCart = (productId) => {
    const selectedProduct = inventory.find((item) => item._id === productId);

    const isProductInCart = cart.some((item) => item._id === productId);

    if (!isProductInCart) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      alert('Product added to cart!');
    } else {
      alert('Product is already in the cart!');
    }
  };

  const handleViewOrders = () => {
    alert("adding new items");
  };

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
          <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
        </div>
      ))}
      <h3>Shopping Cart</h3>
      <button onClick={handleViewOrders}>View Orders</button>
    </div>
  );
};

export default Customer;
