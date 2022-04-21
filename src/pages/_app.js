import { useState } from "react";
import Header from "../components/Header";
import { PromptElementProvider } from "../context/PromptElementContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [promptElement, setPromptElement] = useState();

  return (
    <ThemeProvider value={[theme, setTheme]}>
      <PromptElementProvider value={[promptElement, setPromptElement]}>
        <div
          className={`container ${theme === "dark" ? "dark" : ""}`}
          onClick={() => promptElement.focus()}
        >
          <Header />
          <Component {...pageProps} />
        </div>
      </PromptElementProvider>
    </ThemeProvider>
  );
}

export default MyApp;
