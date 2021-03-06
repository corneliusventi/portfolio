import Image from "next/image";

import darkicon from "../../public/darkicon.png";
import darklogo from "../../public/darklogo.png";
import lighticon from "../../public/lighticon.png";
import lightlogo from "../../public/lightlogo.png";
import { useThemeContext } from "../context/Theme";
import styles from "../styles/Header.module.css";

export const Header = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <div className={styles.close} title="Close"></div>
        <div className={styles.minimize} title="Minimize"></div>
        <div className={styles.maximize} title="Maximize"></div>
      </div>
      <div className={styles.title}>
        <Image
          className={styles.logo}
          alt="logo"
          src={theme === "dark" ? darklogo : lightlogo}
        />
        <h1>corneliusventi.dev</h1>
      </div>
      <div title="Theme" className={styles.theme}>
        <Image
          className={styles.icon}
          src={theme === "dark" ? darkicon : lighticon}
          alt="theme icon"
          onClick={handleThemeChange}
        />
      </div>
    </header>
  );
};
