import darkicon from "../../assets/darkicon.svg";
import lighticon from "../../assets/lighticon.svg";
import darklogo from "../../assets/darklogo.svg";
import lightlogo from "../../assets/lightlogo.svg";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="controls">
        <div className="close" title="Close"></div>
        <div className="minimize" title="Minimize"></div>
        <div className="maximize" title="Maximize"></div>
      </div>
      <div className="title">
        <img
          className="logo"
          alt="logo"
          src={props.theme === "dark" ? darklogo : lightlogo}
        />
        <span>corneliusventi.dev</span>
      </div>
      <div title="Theme" className="theme">
        <img
          alt="theme icon"
          className="icon"
          src={props.theme === "dark" ? darkicon : lighticon}
          onClick={props.onThemeChange}
        />
      </div>
    </header>
  );
}

export default Header;
