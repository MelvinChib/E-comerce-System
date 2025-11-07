import React, { useState } from 'react';
import { authAPI } from '../services/api';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        const response = await authAPI.login({
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('token', response.data);
        onLogin(formData.email);
      } else {
        await authAPI.register(formData);
        setIsLogin(true);
        setError('Registration successful! Please login.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <div className="card">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => setFormData({...formData, userName: e.target.value})}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need to register?' : 'Already have account?'}
        </button>
      </form>
    </div>
  );
};

export default Auth;