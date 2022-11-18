import { BigStat } from "../components/BigStat/bigStat";
import { Header } from "../components/Header/header";
import { IntroSection } from "../components/IntroSection/introSection";
import { BusSection } from "../components/BusSection/busSection";
import { ScrollSection } from "../components/scroll-section/scroll-section";
import { Footer } from "../components/Footer/footer";
import { CONTENT } from "./../public/data/sections";
import { ConclusionText } from "../components/ConclusionText/conclusionText";
import { useState } from "react";
import Head from "next/head";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (<>
    <Head>
      <title>Siah.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="custom-home-bg flex flex-col scroll-smooth">
      <Header 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <IntroSection />
      <BusSection />
      {CONTENT.map((section) => {
        return <ScrollSection section={section} key={section.index} />;
      })}
      <ConclusionText/>
      <BigStat />
      <Footer />
    </div>
  </>
  );
}
