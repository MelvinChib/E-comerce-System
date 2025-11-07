import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getUser: (id) => api.get(`/auth/user/${id}`),
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  getByCategory: (categoryId) => api.get(`/products/category/${categoryId}`),
};

// Cart API
export const cartAPI = {
  getCart: (userId) => api.get(`/cart/${userId}`),
  addToCart: (userId, item) => api.post(`/cart/${userId}/add`, item),
  updateItem: (userId, productId, quantity) => api.put(`/cart/${userId}/update/${productId}?quantity=${quantity}`),
  removeItem: (userId, productId) => api.delete(`/cart/${userId}/remove/${productId}`),
  clearCart: (userId) => api.delete(`/cart/${userId}/clear`),
};

// Orders API
export const ordersAPI = {
  createOrder: (userId, orderData) => api.post(`/orders/${userId}`, orderData),
  getOrder: (orderId) => api.get(`/orders/${orderId}`),
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  updateStatus: (orderId, status) => api.put(`/orders/${orderId}/status?status=${status}`),
};

export default api;