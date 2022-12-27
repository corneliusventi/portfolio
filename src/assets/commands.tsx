import { ICommand } from "../types/Command";

export const allCommands: ICommand[] = [
  {
    input: "about",
    output: {
      type: "text",
      text: `Frontend Developer with 4+ years of experience building and maintaining responsive websites in Orange Multimedia, Satumarket and FWD Insurance. Recently, I delivered an e-commerce web from scratch in 3 months to kick start their journey and worked in FWD Group to help each region to create a coherence back office`,
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
      text: `Full Stack Developer - FWD Group
        Oct 2020 - Aug 2022
        • Built Lead Generation Form using Vue.js and Nest.js in 3 months
        • Built Logger Module For Microservice using Nest.js, Wiston and AWS Cloud Watch in 2 months
        • Built Email/Report Microservice using Nestjs, HTML-PDF and SendGrid in 6 months
        • Built Back Office Promotion Management using Nestjs, Nextjs and Material UI in 6 months

        Staff Development - Satumarket
        Feb 2020 - Sep 2020
        • Built Local E-commerce at Pontianak from scratch using Nuxtjs, Vuetify, Vuex and Laravel in 3 months
        • Built Back Office System for E-Commerce from scratch using Vue.js, Vuetify, Vuex, and Laravel in 3 months

        Web Developer - Orange Multimedia
        Aug 2018 - Feb 2020
        • Built Letter System Based on Electronic Signatures using Bootstrap, jQuery and Laravel in 4 months
        • Built Online Tax Reporting System using Bootstrap, jQuery and Laravel in 3 months
        • Built Regional Financial Management Information System using Bootstrap, jQuery and Laravel in 1 year

        Web Developer Intern - Orange Multimedia
        Feb 2018 - Jul 2020
        • Delivered a health data management system with 81 tables of resources in 6 months by componentizing to speed up the building process
      `,
    },
    page: true,
    description: "my experience",
  },
  {
    input: "skill",
    output: {
      type: "text",
      text: `Typescript, Next.js, React.js, Nuxt.js, Vue.js, Nest.js, Node.js, HTML5, CSS3, Javascript, Git, Postman, SendGrid, Figma, Jira and Slack.
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
          text: "Timeist - Minimalist time blocking app",
          link: "https://timeist.app/",
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
          link: "https://instagram.com/corneliusventi/",
        },
        {
          text: "linkedin: linkedin.com/in/corneliusventi",
          link: "https://linkedin.com/in/corneliusventi",
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

      Frontend Developer | Frontend Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML5 | CSS3 | Javascript
      `,
  },
  page: false,
  description:
    "Cornelius Venti - Frontend Developer | Frontend Development | Typescript | Next.js | React.js | Nuxt.js | Vue.js | Nest.js | Node.js | HTML5 | CSS3 | Javascript",
};

export const menuCommand: ICommand = {
  input: "menu",
  output: {
    type: "menu",
    links: [],
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
  if (menuCommand.output.type === "menu") {
    menuCommand.output.links.push({
      text: command.input,
      link: `/${command.input}`,
    });
  }
});

export const commands = [welcomeCommand, menuCommand, ...allCommands];
