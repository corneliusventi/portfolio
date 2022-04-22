import { NextSeo } from "next-seo";
import commands from "../assets/commands";
import Terminal from "../components/Terminal";

export default function command({ command }) {
  return (
    <>
      <NextSeo
        title={`Cornelius Venti - ${command.input}`}
        description={command.description}
      />
      <Terminal command={command.input} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = commands
    .filter((command) => command.page)
    .map((command) => ({
      params: { command: command.input },
    }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const command = commands.find((command) => command.input === params.command);

  return {
    props: {
      command: command,
    },
  };
}
