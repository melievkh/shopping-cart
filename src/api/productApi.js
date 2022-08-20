import api from "./api";

const productApi = {
  createProduct: (data) => api.post("/products", data),

  editProduct: (id, data) => api.put(`/products/${id}`, data),

  getAllProducts: () => api.get("/products"),

  deleteProduct: (id) => api.delete(`/products/${id}`),
};

export default productApi;
