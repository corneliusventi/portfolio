import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  let promptEl;

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const setPromptEl = (el) => {
    promptEl = el;
  };

  return (
    <div
      className={`container ${theme === "dark" ? "dark" : ""}`}
      onClick={() => promptEl.focus()}
    >
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Terminal theme={theme} setPromptEl={setPromptEl} />
    </div>
  );
}

export default App;
