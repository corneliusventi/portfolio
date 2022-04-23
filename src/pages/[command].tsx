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
  return (
    <>
      <NextSeo
        title={`Cornelius Venti - ${command.input}`}
        description={command.description}
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
