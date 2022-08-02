const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  isLoggedIn: !!token,
  ...user,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
