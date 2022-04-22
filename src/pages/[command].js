import Head from "next/head";
import commands from "../assets/commands";
import Terminal from "../components/Terminal";

export default function command({ command }) {
  return (
    <>
      <Head>
        <title>Cornelius Venti - {command}</title>
        <meta name="description" content={`Cornelius Venti - ${command}`} />
      </Head>
      <Terminal command={command} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = commands.map((command) => ({
    params: { command: command.input },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      command: params.command,
    },
  };
}
