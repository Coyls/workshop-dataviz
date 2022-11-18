import { BigStat } from "../components/BigStat/bigStat";
import { Header } from "../components/Header/header";
import { IntroSection } from "../components/IntroSection/introSection";
import { BusSection } from "../components/BusSection/busSection";
import { ScrollSection } from "../components/scroll-section/scroll-section";
import { Footer } from "../components/Footer/footer";
import {CONTENT} from "./../public/data/sections";
import { ConclusionText } from "../components/ConclusionText/conclusionText";


export default function Home() {
  return (
    <div className="custom-home-bg flex flex-col">
      <Header />
      <IntroSection />
      <BusSection />
      {
        CONTENT.map((section, index)=>{
          console.log(section)  
          return <ScrollSection section={section} key={index}/>
        })
      }
      <ConclusionText/>
      <BigStat />
      <Footer />
    </div>
  );
}
