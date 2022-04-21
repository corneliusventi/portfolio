import styles from "../styles/Command.module.css";

function Command(props) {
  const command = props.command;
  let output;
  if (command.output.type === "text") {
    output = command.output.text;
  } else if (command.output.type === "link") {
    output = (
      <a target="_blank" href={command.output.link} rel="noreferrer">
        {command.output.text}
      </a>
    );
  } else if (command.output.type === "links") {
    output = command.output.links.map((link, index) => (
      <div key={index}>
        <a target="_blank" href={link.link} rel="noreferrer">
          {link.text}
        </a>
      </div>
    ));
  } else {
    output = "output type not supported";
  }

  return (
    <div className={styles.command}>
      <div className={styles.input}>
        <span className={styles.arrow}>{"-> "}</span>
        {command.input}
      </div>
      <div className={styles.output}>{output}</div>
    </div>
  );
}

export default Command;
