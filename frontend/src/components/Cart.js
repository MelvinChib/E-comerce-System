import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2, FiTruck, FiCreditCard } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { cartAPI, ordersAPI } from '../services/api';

const Cart = ({ userId }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shippingAddress, setShippingAddress] = useState('');
  const [placingOrder, setPlacingOrder] = useState(false);
  const [updatingItems, setUpdatingItems] = useState({});

  useEffect(() => {
    loadCart();
  }, [userId]);

  const loadCart = async () => {
    try {
      const response = await cartAPI.getCart(userId);
      setCart(response.data);
    } catch (err) {
      toast.error('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    setUpdatingItems(prev => ({ ...prev, [productId]: true }));
    try {
      await cartAPI.updateItem(userId, productId, quantity);
      loadCart();
    } catch (err) {
      toast.error('Failed to update quantity');
    } finally {
      setUpdatingItems(prev => ({ ...prev, [productId]: false }));
    }
  };

  const removeItem = async (productId) => {
    setUpdatingItems(prev => ({ ...prev, [productId]: true }));
    try {
      await cartAPI.removeItem(userId, productId);
      toast.success('Item removed from cart');
      loadCart();
    } catch (err) {
      toast.error('Failed to remove item');
    } finally {
      setUpdatingItems(prev => ({ ...prev, [productId]: false }));
    }
  };

  const createOrder = async () => {
    if (!shippingAddress.trim()) {
      toast.error('Please enter shipping address');
      return;
    }
    
    setPlacingOrder(true);
    try {
      await ordersAPI.createOrder(userId, { shippingAddress });
      toast.success('Order placed successfully!');
      setShippingAddress('');
      loadCart();
    } catch (err) {
      toast.error('Failed to create order');
    } finally {
      setPlacingOrder(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        Loading cart...
      </div>
    );
  }

  const isEmpty = !cart?.items || cart.items.length === 0;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <FiShoppingCart size={24} color="var(--primary)" />
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Shopping Cart</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            {isEmpty ? 'Your cart is empty' : `${cart.items.length} item${cart.items.length > 1 ? 's' : ''} in your cart`}
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="empty-state">
          <div className="empty-state-icon">🛍️</div>
          <h3 className="empty-state-title">Your cart is empty</h3>
          <p className="empty-state-description">Add some products to get started!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 400px' }}>
          <div>
            <div className="card">
              <div className="card-body" style={{ padding: 0 }}>
                {cart.items.map((item, index) => (
                  <div key={item.id} className="cart-item" style={{ 
                    borderBottom: index === cart.items.length - 1 ? 'none' : '1px solid var(--border)'
                  }}>
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.productName}</h4>
                      <p className="cart-item-price">${item.productPrice} each</p>
                      <p style={{ color: 'var(--primary)', fontWeight: '600' }}>Subtotal: ${item.subtotal}</p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          disabled={updatingItems[item.productId] || item.quantity <= 1}
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          disabled={updatingItems[item.productId]}
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        className="btn btn-danger"
                        onClick={() => removeItem(item.productId)}
                        disabled={updatingItems[item.productId]}
                        style={{ padding: '0.5rem' }}
                      >
                        {updatingItems[item.productId] ? (
                          <div className="spinner" style={{ width: '16px', height: '16px' }} />
                        ) : (
                          <FiTrash2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="checkout-summary">
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCreditCard />
                Order Summary
              </h3>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${cart.totalPrice}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span style={{ color: 'var(--success)' }}>Free</span>
              </div>
              <div className="summary-row">
                <span>Tax:</span>
                <span>${(cart.totalPrice * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-row summary-total">
                <span>Total:</span>
                <span>${(cart.totalPrice * 1.08).toFixed(2)}</span>
              </div>
              
              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label">
                  <FiTruck style={{ marginRight: '0.5rem' }} />
                  Shipping Address
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Enter your shipping address"
                />
              </div>
              
              <button 
                className="btn btn-success"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={createOrder}
                disabled={placingOrder || !shippingAddress.trim()}
              >
                {placingOrder ? (
                  <>
                    <div className="spinner" />
                    Placing Order...
                  </>
                ) : (
                  <>
                    <FiCreditCard />
                    Place Order
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;