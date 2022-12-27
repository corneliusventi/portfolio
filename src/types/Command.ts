export interface ILink {
  text: string;
  link: string;
}

export interface IOutputText {
  type: "text";
  text: string;
}

export interface IOutputLink {
  type: "link";
  text: string;
  link: string;
}

export interface IOutputLinks {
  type: "links";
  links: ILink[];
}

export interface IOutputMenu {
  type: "menu";
  links: ILink[];
}

export type IOutput = IOutputText | IOutputLink | IOutputLinks | IOutputMenu;

export interface ICommand {
  input: string;
  output: IOutput;
  page: boolean;
  description: string;
}
