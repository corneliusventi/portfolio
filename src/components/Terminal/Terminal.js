import "./Terminal.css";
import commands from "../../assets/commands";
import Command from "../Command/Command";

function Terminal(props) {
  return (
    <div className={`terminal ${props.theme === "dark" ? "dark" : ""}`}>
      {commands.map((command) => {
        return <Command key={command.input} command={command} />;
      })}
    </div>
  );
}

export default Terminal;
