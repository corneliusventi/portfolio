import "./Terminal.css";
import commands from "../../assets/commands";
import Command from "../Command/Command";
import { useEffect, useRef, useState } from "react";
import pop from "../../assets/pop.mp3";
import useSound from "use-sound";

function Terminal(props) {
  const [playSound] = useSound(pop);
  const [history, setHistory] = useState([
    commands.find((command) => command.input === "welcome"),
  ]);
  const [lastHistory, setLastHistory] = useState(null);
  const [prompt, setPrompt] = useState("");
  let promptEl = useRef();

  const handlePrompt = (event) => {
    setPrompt(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && prompt) {
      let isCommandExist = commands.find((command) => command.input === prompt);
      let newCommand;

      if (isCommandExist) {
        newCommand = isCommandExist;
      } else {
        newCommand = {
          input: prompt,
          output: {
            type: "text",
            text: `command "${prompt}" is not found`,
          },
        };
      }

      if (prompt === "clear") {
        setHistory([]);
      } else {
        setHistory((oldHistory) => [...oldHistory, newCommand]);
      }

      setPrompt("");
      setLastHistory(null);
    } else if (event.key === "ArrowUp") {
      if (lastHistory !== null && lastHistory > 0) {
        setLastHistory(lastHistory - 1);
      } else if (lastHistory === null && history.length > 0) {
        setLastHistory(history.length - 1);
      }
    } else if (event.key === "ArrowDown") {
      if (lastHistory !== null && lastHistory < history.length - 1) {
        setLastHistory(lastHistory + 1);
      } else {
        setLastHistory(null);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();

      const command = commands.find((command) =>
        command.input.startsWith(prompt)
      );

      if (command) {
        setPrompt(command.input);
      } else {
        playSound();
      }
    }
  };

  useEffect(() => {
    props.setPromptEl(promptEl);
    promptEl.focus();
    promptEl.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (history.length) {
      if (lastHistory !== null) {
        setPrompt(history[lastHistory].input);
      } else if (lastHistory === null) {
        setPrompt("");
      }
    }
  }, [lastHistory, history]);

  return (
    <div
      className={`terminal ${props.theme === "dark" ? "dark" : ""}`}
      onClick={() => promptEl.focus()}
    >
      {Array.isArray(history)
        ? history.map((command, index) => {
            return <Command key={index} command={command} />;
          })
        : ""}
      <div>
        <span className="arrow">{"-> "}</span>
        <input
          className={`prompt ${props.theme === "dark" ? "dark" : ""}`}
          type="text"
          value={prompt}
          onChange={handlePrompt}
          onKeyDown={handleKeyDown}
          ref={(el) => {
            promptEl = el;
          }}
        />
      </div>
    </div>
  );
}

export default Terminal;
