import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header/header";
import ScrollSection from "../components/scroll-section/scroll-section";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      <section className="h-screen w-screen bg-cyan-400"></section>
      <ScrollSection />
      <ScrollSection />
      <section className="h-screen w-screen bg-cyan-400"></section>
    </div>
  );
}
