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
  } else {
    output = "output not supported";
  }

  return (
    <div className="command">
      <div className="input">{"> cornel --" + command.input}</div>
      <div className="output">
        <span className="arrow">{"=>"}</span>
        {output}
      </div>
    </div>
  );
}

export default Command;
