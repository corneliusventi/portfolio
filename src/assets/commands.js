const commands = [
  {
    input: "welcome",
    output: {
      type: "text",
      text: `Welcome to Cornelius Venti's Portfolio (terminal style)

      type "help" to start
      `,
    },
  },
  {
    input: "help",
    output: {
      type: "text",
      text: `welcome (welcome greeting to my portfolio)
        help (show all commands)
        clear (clear terminal)

        about (show about me)
        education (show my education)
        experience (show my experience)
        skill (show my skills)
        project (show my projects)
        resume (show my resume)
        github (show my github profile)
        social (show links to my social media profile)
        contact (show contact me)

        source (show source code of this portfolio)
      `,
    },
  },
  {
    input: "about",
    output: {
      type: "text",
      text: `Hi, I'm Cornelius Venti, a Full Stack Developer. I am from Pontianak, West Kalimantan, Indonesia. I love technology since I was in middle school. I have a passion for programming, solving problems and learning the latest technology. \n
      I graduated from Tanjungpura University with a Bachelor of Computer Science. I graduated with an undergraduate thesis about "On Street and Off-Street Car Parking Management System Based on LBS and Google Maps API". \n
      I want to keep learning and growing both my interpersonal and technical skills so that I can strive to be the most successful version of myself.
      `,
    },
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
  },
  {
    input: "skill",
    output: {
      type: "text",
      text: `HTML, CSS, Javascript, React.js, Next.js, Vue.js, Nuxt.js, Node.js, Express.js and Nest.js, 
      `,
    },
  },
  {
    input: "contact",
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
    input: "github",
    output: {
      type: "link",
      text: "corneliusventi",
      link: "https://github.com/corneliusventi",
    },
  },
  {
    input: "source",
    output: {
      type: "link",
      text: "repository",
      link: "https://github.com/corneliusventi/portfolio",
    },
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
  },
  {
    input: "project",
    output: {
      type: "links",
      links: [
        {
          text: "tic-tac-toe",
          link: "https://nel-tictactoe.netlify.app/",
        },
        {
          text: "portfolio",
          link: "https://corneliusventi.dev/",
        },
      ],
    },
  },
];

export default commands;
