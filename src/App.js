import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/colors';
import Router from './router/Router';
import useTheme from './hooks/useTheme';

export const ThemeContext = createContext();

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <Router />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
