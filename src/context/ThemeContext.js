import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider(props) {
  const { value, children } = props;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
