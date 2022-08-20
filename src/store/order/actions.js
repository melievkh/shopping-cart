import orderApi from "../../api/orderApi";

export const getAllOrders = () => (dispatch) => {
  orderApi
    .getAllOrders()
    .then((res) => dispatch({ type: "GET_ALL_ORDERS", payload: res.data }))
    .catch((err) => err.response.data);
};

export const getMyOrders = () => (dispatch) => {
  orderApi
    .getMyOrders()
    .then((res) => dispatch({ type: "GET_MY_ORDERS", payload: res.data }))
    .catch((err) => err.response.data);
};
