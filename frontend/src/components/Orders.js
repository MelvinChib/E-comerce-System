import React, { useState, useEffect } from 'react';
import { FiPackage, FiTruck, FiCheck, FiClock, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { ordersAPI } from '../services/api';

const Orders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, [userId]);

  const loadOrders = async () => {
    try {
      const response = await ordersAPI.getUserOrders(userId);
      setOrders(response.data);
    } catch (err) {
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'PENDING': return <FiClock />;
      case 'CONFIRMED': return <FiCheck />;
      case 'SHIPPED': return <FiTruck />;
      case 'DELIVERED': return <FiPackage />;
      case 'CANCELLED': return <FiX />;
      default: return <FiClock />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'PENDING': return 'status-pending';
      case 'CONFIRMED': return 'status-confirmed';
      case 'SHIPPED': return 'status-shipped';
      case 'DELIVERED': return 'status-delivered';
      case 'CANCELLED': return 'status-cancelled';
      default: return 'status-pending';
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        Loading orders...
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <FiPackage size={24} color="var(--primary)" />
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Order History</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            {orders.length === 0 ? 'No orders yet' : `${orders.length} order${orders.length > 1 ? 's' : ''} found`}
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h3 className="empty-state-title">No orders yet</h3>
          <p className="empty-state-description">Your order history will appear here once you make your first purchase.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {orders.map(order => (
            <div key={order.id} className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Order #{order.id}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      Placed on {new Date(order.orderDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div style={{ textAlign: 'right' }}>
                    <div className={`order-status ${getStatusClass(order.status)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                    <p style={{ fontSize: '1.125rem', fontWeight: '600', marginTop: '0.5rem' }}>
                      ${order.totalAmount}
                    </p>
                  </div>
                </div>
                
                <div style={{ padding: '1rem', background: 'var(--bg)', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Shipping Address:</p>
                  <p style={{ fontWeight: '500' }}>{order.shippingAddress}</p>
                </div>
                
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text)' }}>Order Items:</h4>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {order.items && order.items.map(item => (
                      <div key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem',
                        background: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)'
                      }}>
                        <div>
                          <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{item.productName}</p>
                          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Quantity: {item.quantity}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontWeight: '600' }}>${item.subtotal}</p>
                          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>${item.price} each</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;