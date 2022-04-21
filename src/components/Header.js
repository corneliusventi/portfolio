import styles from "../styles/Header.module.css";
import darkicon from "../assets/darkicon.svg";
import darklogo from "../assets/darklogo.svg";
import lighticon from "../assets/lighticon.svg";
import lightlogo from "../assets/lightlogo.svg";
import Image from "next/image";

function Header(props) {
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
          height={20}
          width={20}
          alt="logo"
          src={props.theme === "dark" ? darklogo : lightlogo}
        />
        <span>corneliusventi.dev</span>
      </div>
      <div title="Theme" className={styles.theme}>
        <Image
          className={styles.icon}
          src={props.theme === "dark" ? darkicon : lighticon}
          height={20}
          width={20}
          alt="theme icon"
          onClick={props.onThemeChange}
        />
      </div>
    </header>
  );
}

export default Header;
