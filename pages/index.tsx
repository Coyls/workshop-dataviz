import { BigStat } from "../components/BigStat/bigStat";
import { Header } from "../components/Header/header";
import { IntroSection } from "../components/IntroSection/introSection";
import { BusSection } from "../components/BusSection/busSection";
import { ScrollSection } from "../components/scroll-section/scroll-section";
import { Footer } from "../components/Footer/footer";
import { CONTENT } from "./../public/data/sections";

export default function Home() {
  return (
    <div className="custom-home-bg flex flex-col">
      <Header />
      <IntroSection />
      <BusSection />
      <ScrollSection section={CONTENT[0]} />
      <ScrollSection section={CONTENT[1]} />
      <ScrollSection section={CONTENT[2]} />
      {/* {CONTENT.map((section, index) => {
        console.log(section);
        return <ScrollSection section={section} key={index} />;
      })} */}
      <BigStat />
      <Footer />
    </div>
  );
}
