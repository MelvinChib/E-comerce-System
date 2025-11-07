import React, { useState, useEffect } from 'react';
import { productsAPI, cartAPI } from '../services/api';

const Products = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (err) {
      setMessage('Failed to load products');
    }
  };

  const addToCart = async (productId) => {
    try {
      await cartAPI.addToCart(userId, { productId, quantity: 1 });
      setMessage('Added to cart successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Failed to add to cart');
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {message && <div className="success">{message}</div>}
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <p>Stock: {product.stock}</p>
            <button 
              className="btn" 
              onClick={() => addToCart(product.id)}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;