import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
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
      className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
      onClick={() => promptEl.focus()}
    >
      <Head>
        <meta name="description" content="Cornelius Venti - Portfolio" />
        <title>Cornelius Venti</title>
      </Head>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Terminal theme={theme} setPromptEl={setPromptEl} />
    </div>
  );
}
