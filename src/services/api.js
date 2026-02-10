import axios from 'axios';

const api = axios.create({
// The base URL of the backend
  baseURL: 'http://localhost:5000/api', 
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};

export default api;
