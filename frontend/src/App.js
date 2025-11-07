import React, { useState, useEffect } from 'react';
import { FiShoppingBag, FiShoppingCart, FiPackage, FiLogOut, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Auth from './components/Auth';
import Products from './components/Products';
import Cart from './components/Cart';
import Orders from './components/Orders';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('products');
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser('user@example.com');
    }
  }, []);

  const handleLogin = (email) => {
    setUser(email);
    setUserId(email === 'admin@example.com' ? 1 : 2);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCurrentView('products');
    toast.success('Logged out successfully');
  };

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <FiShoppingBag style={{ marginRight: '0.5rem' }} />
              E-Commerce Pro
            </div>
            
            <div className="nav-links">
              <button 
                className={`nav-button ${currentView === 'products' ? 'active' : ''}`}
                onClick={() => setCurrentView('products')}
              >
                <FiShoppingBag size={16} />
                Products
              </button>
              <button 
                className={`nav-button ${currentView === 'cart' ? 'active' : ''}`}
                onClick={() => setCurrentView('cart')}
              >
                <FiShoppingCart size={16} />
                Cart
              </button>
              <button 
                className={`nav-button ${currentView === 'orders' ? 'active' : ''}`}
                onClick={() => setCurrentView('orders')}
              >
                <FiPackage size={16} />
                Orders
              </button>
            </div>
            
            <div className="user-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiUser size={16} />
                <span className="user-name">{user}</span>
              </div>
              <button 
                className="btn btn-outline"
                onClick={handleLogout}
                style={{ padding: '0.5rem 1rem' }}
              >
                <FiLogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {currentView === 'products' && <Products userId={userId} />}
        {currentView === 'cart' && <Cart userId={userId} />}
        {currentView === 'orders' && <Orders userId={userId} />}
      </div>
    </div>
  );
};

export default App;