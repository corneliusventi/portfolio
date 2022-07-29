import { ICommand } from "../types/Command";

export const allCommands: ICommand[] = [
  {
    input: "about",
    output: {
      type: "text",
      text: `I'm a Javascript Engineer with four years of Full Stack Development. I worked in industries such as Software House (2 years), E-commerce (1 year) and Insurance (2 years). \n
        Skills that I learned during four years of Full Stack Development such as Typescript (2 years), Next.js (1 year), React.js (1 year), Nuxt.js (3 years), Vue.js (3 years), Nest.js (2 years), Node.js (1 year), HTML (4 years), CSS (4 years) and Javascript (4 years). \n
        I already work on projects such as a regional financial management site, an online tax reporting site, a letter approval & electronic signature site, an e-commerce site, a lead generation form & microservice, a logging module, a partnership API, an email & report microservice and a promotion's back-office site.
      `,
    },
    page: true,
    description: "about me",
  },
  {
    input: "education",
    output: {
      type: "text",
      text: `Universitas Tanjungpura
        Bachelor of Computer Science, Informatics
        Jun 2015 - Aug 2019
      `,
    },
    page: true,
    description: "my education",
  },
  {
    input: "experience",
    output: {
      type: "text",
      text: `Full Stack Developer - FWD Insurance Singapore
        Oct 2020 - Present

        Staff Development - Satumarket
        Feb 2020 - Sep 2020

        Web Developer - Orange Multimedia
        Feb 2018 - Feb 2020
      `,
    },
    page: true,
    description: "my experience",
  },
  {
    input: "skill",
    output: {
      type: "text",
      text: `Typescript (2 years), Next.js (1 year), React.js (1 year), Nuxt.js (3 years), Vue.js (3 years), Nest.js (2 years), Node.js (1 year), HTML (4 years), CSS (4 years) and Javascript (4 years).
        `,
    },
    page: true,
    description: "my skills",
  },
  {
    input: "project",
    output: {
      type: "links",
      links: [
        {
          text: "Timeist",
          link: "https://timeist.corneliusventi.dev/",
        },
        {
          text: "portfolio",
          link: "https://corneliusventi.dev/",
        },
        {
          text: "tic-tac-toe",
          link: "https://nel-tictactoe.netlify.app/",
        },
      ],
    },
    page: true,
    description: "my projects",
  },
  {
    input: "resume",
    output: {
      type: "link",
      text: "corneliusventi.pdf",
      link: "/corneliusventi.pdf",
    },
    page: true,
    description: "my resume",
  },
  {
    input: "github",
    output: {
      type: "link",
      text: "corneliusventi",
      link: "https://github.com/corneliusventi",
    },
    page: true,
    description: "my github profile",
  },
  {
    input: "social",
    output: {
      type: "links",
      links: [
        {
          text: "twitter: @corneliusventi",
          link: "https://twitter.com/corneliusventi",
        },
        {
          text: "instagram: @corneliusventi",
          link: "https://www.instagram.com/corneliusventi/",
        },
        {
          text: "linkedin: linkedin.com/in/corneliusventi",
          link: "https://www.linkedin.com/in/corneliusventi",
        },
      ],
    },
    page: true,
    description: "links to my social media profile",
  },
  {
    input: "contact",
    output: {
      type: "link",
      text: "corneliusventi@gmail.com",
      link: "mailto: corneliusventi@gmail.com",
    },
    page: true,
    description: "contact me",
  },
  {
    input: "source",
    output: {
      type: "link",
      text: "repository",
      link: "https://github.com/corneliusventi/portfolio",
    },
    page: false,
    description: "source code of this portfolio",
  },
];

export const welcomeCommand: ICommand = {
  input: "welcome",
  output: {
    type: "text",
    text: `Cornelius Venti

      Javascript Engineer | Full Stack Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML | CSS | Javascript

      type "help" to start
      `,
  },
  page: false,
  description:
    "Cornelius Venti - Javascript Engineer | Full Stack Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML | CSS | Javascript",
};

export const helpCommand: ICommand = {
  input: "help",
  output: {
    type: "text",
    text: `all commands:

        welcome (welcome greeting to my portfolio)
        help (show all commands)
        clear (clear terminal)\n
    `,
  },
  page: false,
  description: "helper command",
};

export const notFoundCommand: ICommand = {
  input: "404",
  output: {
    type: "text",
    text: "this page could not be found",
  },
  page: false,
  description: "not found page",
};

allCommands.map((command: ICommand) => {
  if (helpCommand.output.type === "text") {
    if (command.input === "source") helpCommand.output.text += "\n";

    helpCommand.output.text += `${command.input} (show ${command.description})\n`;
  }
});

export const commands = [welcomeCommand, helpCommand, ...allCommands];
