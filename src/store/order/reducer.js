const initialState = {
  allOrders: [],
  myOrders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ORDERS":
      return { ...state, allOrders: action.payload };
    case "GET_MY_ORDERS":
      return { ...state, myOrders: action.payload };
    default:
      return state;
  }
};

export default reducer;
