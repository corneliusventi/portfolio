import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

import { commands, notFoundCommand } from "../assets/commands";
import { Terminal } from "../components/Terminal";
import { ICommand } from "../types/Command";

type Props = {
  command: ICommand;
};

type StaticPropsParams = {
  command: string;
};

type StaticPropsResult = {
  command: ICommand;
  fallback: {
    "/api/commands": { commands: ICommand[] };
  };
};

const Command: NextPage<Props> = ({ command }) => {
  const titleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  return (
    <>
      <NextSeo
        title={`Cornelius Venti - ${titleCase(command.input)}`}
        description={titleCase(command.description)}
        canonical={`https://corneliusventi.dev/${command.input}`}
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
        openGraph={{
          type: "website",
          url: `https://corneliusventi.dev/${command.input}`,
          title: `Cornelius Venti - ${titleCase(command.input)}`,
          description: titleCase(command.description),
          images: [{ url: "https://corneliusventi.dev/cover.png" }],
          site_name: "Cornelius Venti",
        }}
        twitter={{
          handle: "@corneliusventi",
          site: "@corneliusventi",
          cardType: "summary_large_image",
        }}
      />
      <Terminal command={command} />
    </>
  );
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
  command,
}) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Command command={command} />
    </SWRConfig>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = commands
    .filter((command) => command.page)
    .map((command) => ({
      params: { command: command.input },
    }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<
  StaticPropsResult,
  StaticPropsParams
> = ({ params }) => {
  const command = commands.find((command) => command.input === params?.command);

  return {
    props: {
      command: command || notFoundCommand,
      fallback: {
        "/api/commands": { commands },
      },
    },
  };
};

export default Page;
