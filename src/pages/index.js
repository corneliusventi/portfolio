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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Cornelius Venti's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Cornelius Venti's Portfolio</title>
      </Head>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Terminal theme={theme} setPromptEl={setPromptEl} />
    </div>
  );
}
