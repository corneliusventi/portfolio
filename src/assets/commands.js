const commands = [
  // {
  //   input: "help",
  //   output: {
  //     type: "text",
  //     text: `all commands:\n
  //       --help (list all commands)
  //       --fullname (show my fullname)
  //       --origin (show where I am from)
  //       --email (show my email address)
  //       --resume (show my resume)
  //       --twitter (show my twitter handle)
  //       --linkedin (show my linkedin profile)
  //       --github (show my github profile)
  //     `,
  //   },
  // },
  {
    input: "fullname",
    output: {
      type: "text",
      text: "Cornelius Venti",
    },
  },
  {
    input: "origin",
    output: {
      type: "text",
      text: "Pontianak, West Kalimantan, Indonesia",
    },
  },
  {
    input: "email",
    output: {
      type: "link",
      text: "corneliusventi@gmail.com",
      link: "mailto: corneliusventi@gmail.com",
    },
  },
  {
    input: "resume",
    output: {
      type: "link",
      text: "corneliusventi.pdf",
      link: "/corneliusventi.pdf",
    },
  },
  {
    input: "twitter",
    output: {
      type: "link",
      text: "corneliusventi",
      link: "https://twitter.com/corneliusventi",
    },
  },
  {
    input: "linkedin",
    output: {
      type: "link",
      text: "linkedin.com/in/corneliusventi",
      link: "https://www.linkedin.com/in/corneliusventi",
    },
  },
  {
    input: "github",
    output: {
      type: "link",
      text: "corneliusventi",
      link: "https://github.com/corneliusventi",
    },
  },
];

export default commands;
