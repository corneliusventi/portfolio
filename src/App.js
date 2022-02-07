import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Terminal theme={theme} />
    </div>
  );
}

export default App;
