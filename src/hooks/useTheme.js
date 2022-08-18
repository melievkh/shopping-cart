import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;