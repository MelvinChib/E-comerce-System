import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiShoppingBag } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { authAPI } from '../services/api';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isLogin) {
        const response = await authAPI.login({
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('token', response.data);
        toast.success('Welcome back!');
        onLogin(formData.email);
      } else {
        await authAPI.register(formData);
        toast.success('Registration successful! Please login.');
        setIsLogin(true);
        setFormData({ userName: '', email: '', password: '' });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <div className="card">
          <div className="card-body">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <FiShoppingBag size={48} color="var(--primary)" />
              <h1 style={{ margin: '1rem 0 0.5rem', fontSize: '1.75rem' }}>E-Commerce Pro</h1>
              <p style={{ color: 'var(--text-muted)' }}>Your premium shopping experience</p>
            </div>
            
            <div style={{ display: 'flex', marginBottom: '2rem', background: 'var(--bg)', borderRadius: 'var(--radius)', padding: '4px' }}>
              <button
                type="button"
                className={`btn ${isLogin ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, margin: 0 }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                type="button"
                className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, margin: 0 }}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label className="form-label">
                    <FiUser style={{ marginRight: '0.5rem' }} />
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.userName}
                    onChange={(e) => setFormData({...formData, userName: e.target.value})}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <label className="form-label">
                  <FiMail style={{ marginRight: '0.5rem' }} />
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <FiLock style={{ marginRight: '0.5rem' }} />
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="spinner" />
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '1.5rem', padding: '1rem', background: 'var(--bg)', borderRadius: 'var(--radius)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Demo Accounts:</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Admin: admin@example.com / admin123</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>User: user@example.com / user123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;