import { ICommand } from "../types/Command";

export const allCommands: ICommand[] = [
  {
    input: "about",
    output: {
      type: "text",
      text: `I'm a Frontend Developer with 4 years of experience in building responsive web design and I can collaborate with team members to ensure workloads are effective. Proficient with developing a good understanding and excellent performance in developing web-app using frameworks & libraries such as React and Vue.`,
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
          link: "https://timeist.app/",
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
    input: "now",
    output: {
      type: "text",
      text: `What I'm working on

        Timeist
      	I made a time blocking app with a minimalist look & feel, only time blocking one day at a time, customisable intervals and easy to organize without overlapping.
        (Check it out: https://timeist.app)
      `,
    },
    page: false,
    description: "what i'm working on",
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

      Frontend Developer | Frontend Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML | CSS | Javascript

      type "help" to start
      `,
  },
  page: false,
  description:
    "Cornelius Venti - Frontend Developer | Frontend Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML | CSS | Javascript",
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
