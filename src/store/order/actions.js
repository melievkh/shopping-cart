import orderApi from '../../api/orderApi';

export const getAllOrders = () => (dispatch) => {
  orderApi
    .getAllOrders()
    .then((res) => dispatch({ type: 'GET_ALL_ORDERS', payload: res.data }))
    .catch((err) => console.log(err.response.data));
};
