import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiPackage, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { productsAPI, cartAPI } from '../services/api';

const Products = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState({});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (err) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    setAddingToCart(prev => ({ ...prev, [productId]: true }));
    try {
      await cartAPI.addToCart(userId, { productId, quantity: 1 });
      toast.success('Added to cart!');
    } catch (err) {
      toast.error('Failed to add to cart');
    } finally {
      setAddingToCart(prev => ({ ...prev, [productId]: false }));
    }
  };

  const getProductIcon = (categoryName) => {
    return categoryName?.toLowerCase() === 'electronics' ? '💻' : '👕';
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        Loading products...
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Products</h1>
          <p style={{ color: 'var(--text-muted)' }}>Discover our premium collection</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <FiPackage />
          <span>{products.length} products</span>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h3 className="empty-state-title">No Products Available</h3>
          <p className="empty-state-description">Check back later for new arrivals!</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {getProductIcon(product.category?.name)}
              </div>
              
              <div className="product-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 className="product-title">{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24' }}>
                    <FiStar size={14} fill="currentColor" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>4.5</span>
                  </div>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-price">${product.price}</div>
                
                <div className="product-stock">
                  {product.stock > 0 ? (
                    <span style={{ color: 'var(--success)' }}>✓ {product.stock} in stock</span>
                  ) : (
                    <span style={{ color: 'var(--danger)' }}>✗ Out of stock</span>
                  )}
                </div>
                
                <button 
                  className={`btn ${product.stock === 0 ? 'btn-outline' : 'btn-primary'}`}
                  style={{ width: '100%' }}
                  onClick={() => addToCart(product.id)}
                  disabled={product.stock === 0 || addingToCart[product.id]}
                >
                  {addingToCart[product.id] ? (
                    <>
                      <div className="spinner" style={{ width: '16px', height: '16px' }} />
                      Adding...
                    </>
                  ) : product.stock === 0 ? (
                    'Out of Stock'
                  ) : (
                    <>
                      <FiShoppingCart />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;