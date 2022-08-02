const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_ORDERS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
