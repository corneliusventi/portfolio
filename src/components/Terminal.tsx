import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";
import useSound from "use-sound";
import { welcomeCommand } from "../assets/commands";
import { usePromptElementContext } from "../context/PromptElement";
import { useThemeContext } from "../context/Theme";
import styles from "../styles/Terminal.module.css";
import { ICommand } from "../types/Command";
import { fetcher } from "../utils/fetcher";
import { Command } from "./Command";

export interface ITerminalProps {
  command?: ICommand;
}

export const Terminal = (props: ITerminalProps) => {
  const { data: { commands } = { commands: [] } } = useSWR<{
    commands: ICommand[];
  }>("/api/commands", fetcher);

  const [beep] = useSound("/beep.mp3", { volume: 0.5 });

  const [history, setHistory] = useState<ICommand[]>([
    props.command ||
      commands.find((command) => command.input === "welcome") ||
      welcomeCommand,
  ]);
  const [prompt, setPrompt] = useState("");
  const [lastHistory, setLastHistory] = useState<number | null>(null);

  const { theme } = useThemeContext();
  const { promptElement, setPromptElement } = usePromptElementContext();

  const handlePrompt: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrompt(event.target.value);
  };

  const handleEnter = () => {
    let existingCommand = commands.find((command) => command.input === prompt);
    const newCommand = existingCommand || {
      input: prompt,
      output: {
        type: "text",
        text: `command "${prompt}" is not found`,
      },
      page: false,
      description: "command is not found",
    };

    if (prompt === "clear") {
      setHistory([]);
    } else {
      setHistory((oldHistory) => [...oldHistory, newCommand]);
    }

    setPrompt("");
    setLastHistory(null);
  };

  const handleArrowUp = () => {
    if (lastHistory !== null && lastHistory > 0) {
      setLastHistory(lastHistory - 1);
    } else if (lastHistory === null && history.length > 0) {
      setLastHistory(history.length - 1);
    }
  };

  const handleArrowDown = () => {
    if (lastHistory !== null && lastHistory < history.length - 1) {
      setLastHistory(lastHistory + 1);
    } else {
      setLastHistory(null);
    }
  };

  const handleTab = () => {
    const command = commands.find((command) =>
      command.input.startsWith(prompt)
    );

    if (prompt && command) {
      setPrompt(command.input);
    } else {
      beep();
    }
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    switch (event.key) {
      case "Enter":
        handleEnter();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "ArrowDown":
        handleArrowDown();
        break;
      case "Tab":
        event.preventDefault();
        handleTab();
        break;
    }
  };

  useEffect(() => {
    if (promptElement) {
      promptElement.focus();
      promptElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [prompt, promptElement]);

  useEffect(() => {
    if (history.length) {
      if (lastHistory !== null) {
        setPrompt(history[lastHistory]!.input);
      } else if (lastHistory === null) {
        setPrompt("");
      }
    }
  }, [lastHistory, history]);

  return (
    <div className={styles.terminal}>
      {Array.isArray(history)
        ? history.map((command, index) => {
            return <Command key={index} command={command} />;
          })
        : ""}
      <div>
        <span className={styles.arrow}>{"-> "}</span>
        <input
          className={`${styles.prompt} ${theme === "dark" ? styles.dark : ""}`}
          type="text"
          value={prompt}
          onChange={handlePrompt}
          onKeyDown={handleKeyDown}
          ref={(element) => setPromptElement(element)}
        />
      </div>
    </div>
  );
};
