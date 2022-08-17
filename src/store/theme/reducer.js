const currentTheme = window.localStorage.getItem('theme');

const initialState = {
  theme: currentTheme || 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
