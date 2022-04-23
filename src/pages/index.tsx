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
