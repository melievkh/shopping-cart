import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import { darkTheme, lightTheme } from './styles/colors';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
