import { NextSeo } from "next-seo";
import { Header, Hero } from "../components";

export default function Index() {
  return (
    <>
      <NextSeo title="Advocacia" />
      <div className="">
        <Header />
        <Hero />
      </div>
    </>
  );
}
