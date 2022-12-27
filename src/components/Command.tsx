import { MouseEvent, MouseEventHandler } from "react";
import styles from "../styles/Command.module.css";
import { ICommand } from "../types/Command";

export interface ICommandProps {
  command: ICommand;
  handleMenu: (event: MouseEvent<HTMLAnchorElement>, menu: string) => void;
}

export const Command = (props: ICommandProps) => {
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
  } else if (command.output.type === "menu") {
    output = command.output.links.map((link, index) => (
      <a
        onClick={(event) => props.handleMenu(event, link.text)}
        className={styles.menu}
        href={link.link}
        key={index}
      >
        {link.text}
      </a>
    ));
  } else {
    output = "output type not supported";
  }

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
      }}
      className={styles.command}
    >
      <div className={styles.input}>
        <span className={styles.arrow}>{"-> "}</span>
        <h2>{command.input}</h2>
      </div>
      <div className={styles.output}>{output}</div>
    </div>
  );
};
