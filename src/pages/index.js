import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import { commands } from "../assets/commands";
import Terminal from "../components/Terminal";

function Home() {
  return (
    <>
      <NextSeo
        title="Cornelius Venti"
        description="Cornelius Venti' Portfolio"
      />
      <Terminal />
    </>
  );
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  return {
    props: {
      fallback: {
        "/api/commands": { commands },
      },
    },
  };
}
