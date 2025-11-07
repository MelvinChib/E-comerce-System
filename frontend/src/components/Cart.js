import React, { useState, useEffect } from 'react';
import { cartAPI, ordersAPI } from '../services/api';

const Cart = ({ userId }) => {
  const [cart, setCart] = useState(null);
  const [shippingAddress, setShippingAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadCart();
  }, [userId]);

  const loadCart = async () => {
    try {
      const response = await cartAPI.getCart(userId);
      setCart(response.data);
    } catch (err) {
      setMessage('Failed to load cart');
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await cartAPI.updateItem(userId, productId, quantity);
      loadCart();
    } catch (err) {
      setMessage('Failed to update quantity');
    }
  };

  const removeItem = async (productId) => {
    try {
      await cartAPI.removeItem(userId, productId);
      loadCart();
    } catch (err) {
      setMessage('Failed to remove item');
    }
  };

  const createOrder = async () => {
    if (!shippingAddress.trim()) {
      setMessage('Please enter shipping address');
      return;
    }
    
    try {
      await ordersAPI.createOrder(userId, { shippingAddress });
      setMessage('Order created successfully!');
      setShippingAddress('');
      loadCart();
    } catch (err) {
      setMessage('Failed to create order');
    }
  };

  if (!cart) return <div>Loading cart...</div>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {message && <div className="error">{message}</div>}
      
      {cart.items && cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items && cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.productName}</h4>
                <p>${item.productPrice} x {item.quantity} = ${item.subtotal}</p>
              </div>
              <div>
                <button 
                  className="btn" 
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                >
                  -
                </button>
                <span style={{margin: '0 10px'}}>{item.quantity}</span>
                <button 
                  className="btn" 
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="card">
            <h3>Total: ${cart.totalPrice}</h3>
            <div className="form-group">
              <label>Shipping Address:</label>
              <input
                type="text"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter your shipping address"
              />
            </div>
            <button className="btn" onClick={createOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;