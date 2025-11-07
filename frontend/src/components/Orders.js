import React, { useState, useEffect } from 'react';
import { ordersAPI } from '../services/api';

const Orders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadOrders();
  }, [userId]);

  const loadOrders = async () => {
    try {
      const response = await ordersAPI.getUserOrders(userId);
      setOrders(response.data);
    } catch (err) {
      setMessage('Failed to load orders');
    }
  };

  return (
    <div>
      <h2>Order History</h2>
      {message && <div className="error">{message}</div>}
      
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="card">
            <h3>Order #{order.id}</h3>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> ${order.totalAmount}</p>
            <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
            <p><strong>Shipping:</strong> {order.shippingAddress}</p>
            
            <h4>Items:</h4>
            {order.items && order.items.map(item => (
              <div key={item.id} style={{marginLeft: '20px', padding: '5px 0'}}>
                {item.productName} - Qty: {item.quantity} - ${item.subtotal}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;