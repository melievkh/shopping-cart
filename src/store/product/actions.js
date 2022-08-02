import productApi from '../../api/productApi';

export const getAllProducts = () => (dispatch) => {
  productApi
    .getAllProducts()
    .then((res) => {
      dispatch({ type: 'GET_PRODUCTS', payload: res.data });
    })
    .catch((err) => console.log(err.response.data));
};

export const incrementProductByOne = (product, price) => (dispatch) => {
  dispatch({ type: 'INCREMENT', payload: { product, price } });
};

export const decrementProductByOne = (product, price) => (dispatch) => {
  dispatch({ type: 'DECREMENT', payload: { product, price } });
};
