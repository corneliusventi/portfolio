import { NextSeo } from "next-seo";
import Terminal from "../components/Terminal";

export default function Home() {
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
