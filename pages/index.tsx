import { BigStat } from "../components/BigStat/bigStat";
import { Header } from "../components/Header/header";
import { IntroSection } from "../components/IntroSection/introSection";
import { BusSection } from "../components/BusSection/busSection";
import { ScrollSection } from "../components/scroll-section/scroll-section";
import { Footer } from "../components/Footer/footer";
import { CONTENT } from "./../public/data/sections";
import { ConclusionText } from "../components/ConclusionText/conclusionText";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useScroll } from "framer-motion";
import { useScrollContext } from "../components/scroll-context.context";

export default function Home() {

  function getScrollInterval(id: number){
    if(typeof window !== 'undefined'){
      const section = document.getElementById('section-'+id);
      const top = section?.offsetTop ?? 0;
      const height = section?.offsetHeight ?? 0;
      const bot = top + height;
      return {top, bot}
    }
    return {top: 0, bot: 0}
  }

  function getCurrentBySection(){
    const y = scrollYGlobal.get();
    let id = 1;
    CONTENT.map((section)=>{
      const {top, bot} = getScrollInterval(section.index)
      if(section.index == 4){
        if((y >= top && y<= bot )|| y>bot)
          id= section.index
      }else{
        if(y >= top && y<= bot)
          id=section.index
      }
    })
    return id;
  }

  const [currentIndex, setCurrentIndex] = useState(1);
  const { scrollYGlobal } = useScrollContext();

  useEffect(() => {
    return scrollYGlobal.onChange(() => {
      setCurrentIndex(getCurrentBySection())
    });
  });

  return (<>
    <Head>
      <title>Siah.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/icon.ico" />
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
