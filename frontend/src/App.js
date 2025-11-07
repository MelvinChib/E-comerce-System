import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Products from './components/Products';
import Cart from './components/Cart';
import Orders from './components/Orders';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('products');
  const [userId, setUserId] = useState(1); // Default to user ID 1 for demo

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser('user@example.com'); // Demo user
    }
  }, []);

  const handleLogin = (email) => {
    setUser(email);
    // For demo purposes, set userId based on email
    setUserId(email === 'admin@example.com' ? 1 : 2);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCurrentView('products');
  };

  if (!user) {
    return (
      <div className="container">
        <div className="header">
          <h1>E-Commerce System</h1>
        </div>
        <Auth onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <h1>E-Commerce System</h1>
          <button onClick={() => setCurrentView('products')}>Products</button>
          <button onClick={() => setCurrentView('cart')}>Cart</button>
          <button onClick={() => setCurrentView('orders')}>Orders</button>
          <div style={{marginLeft: 'auto'}}>
            <span>Welcome, {user}</span>
            <button onClick={handleLogout} style={{marginLeft: '10px'}}>Logout</button>
          </div>
        </div>
      </div>

      <div className="main-content">
        {currentView === 'products' && <Products userId={userId} />}
        {currentView === 'cart' && <Cart userId={userId} />}
        {currentView === 'orders' && <Orders userId={userId} />}
      </div>
    </div>
  );
};

export default App;