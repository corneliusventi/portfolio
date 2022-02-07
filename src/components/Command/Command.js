import "./Command.css";

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
    <div className="command">
      <div className="input">
        <span className="arrow">{"-> "}</span>
        {command.input}
      </div>
      <div className="output">{output}</div>
    </div>
  );
}

export default Command;
