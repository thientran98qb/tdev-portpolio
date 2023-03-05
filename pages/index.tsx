import AboutMe from "@/components/AboutMe";
import BannerHero from "@/components/BannerHero";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-2">
      <Head>
        <title>TDev Porpolio</title>
      </Head>
      {/*==== Header ==== */}
      <HeaderNav/>
      <BannerHero/>
      {/*==== About ==== */}
      <AboutMe/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  )
}
