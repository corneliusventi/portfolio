import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

import { commands, welcomeCommand } from "../assets/commands";
import { Terminal } from "../components/Terminal";
import { ICommand } from "../types/Command";

type Props = {
  command: ICommand;
};

type StaticPropsResult = {
  command: ICommand;
  fallback: {
    "/api/commands": { commands: ICommand[] };
  };
};

const Home: NextPage<Props> = ({ command }) => {
  return (
    <>
      <NextSeo
        title="Cornelius Venti"
        description={command.description}
        additionalLinkTags={[
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap",
          },
        ]}
      />
      <Terminal />
    </>
  );
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
  command,
}) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home command={command} />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps<StaticPropsResult> = () => {
  const command = commands.find((command) => command.input === "welcome");

  return {
    props: {
      command: command || welcomeCommand,
      fallback: {
        "/api/commands": { commands },
      },
    },
  };
};

export default Page;
