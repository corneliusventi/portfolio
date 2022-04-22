import { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import { PromptElementProvider } from "../context/PromptElement";
import { Theme, ThemeProvider } from "../context/Theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [promptElement, setPromptElement] = useState<HTMLInputElement | null>(
    null
  );

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <PromptElementProvider value={{ promptElement, setPromptElement }}>
        <div
          className={`container ${theme === "dark" ? "dark" : ""}`}
          onClick={() => promptElement?.focus()}
        >
          <Header />
          <Component {...pageProps} />
        </div>
      </PromptElementProvider>
    </ThemeProvider>
  );
}

export default MyApp;
