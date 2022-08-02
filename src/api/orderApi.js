import api from './api';

const orderApi = {
  createOrder: (data) => api.post('/orders', data),

  getAllOrders: () => api.get('/orders'),

  deleteOrder: () => api.delete('/orders/:id')
};

export default orderApi;
