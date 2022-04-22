import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import { commands } from "../assets/commands";
import { Terminal } from "../components/Terminal";
import { ICommand } from "../types/Command";

type StaticPropsResult = {
  fallback: {
    "/api/commands": { commands: ICommand[] };
  };
};

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Cornelius Venti"
        description="Cornelius Venti' Portfolio"
      />
      <Terminal />
    </>
  );
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
}) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps<StaticPropsResult> = () => {
  return {
    props: {
      fallback: {
        "/api/commands": { commands },
      },
    },
  };
};

export default Page;
