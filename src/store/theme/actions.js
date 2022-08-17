export const toggleTheme = (mode) => {
  window.localStorage.setItem('theme', mode);

  return { type: 'TOGGLE_THEME', payload: mode };
};
