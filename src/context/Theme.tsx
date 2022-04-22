import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type Theme = "dark" | "light";

export interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export interface IThemeProviderProps {
  value: IThemeContext;
  children: JSX.Element;
}

export const initialContext: IThemeContext = {
  theme: "dark",
  setTheme: (): void => {},
};

const ThemeContext = createContext<IThemeContext>(initialContext);

export function ThemeProvider(props: IThemeProviderProps) {
  const { value, children } = props;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
