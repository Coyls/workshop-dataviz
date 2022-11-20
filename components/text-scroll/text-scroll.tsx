import { MotionValue } from "framer-motion";
import Image from "next/image";
import { Highlighter } from "../Highlighter/hightlighter";
import { TextIntroSection } from "../TextIntroSection/textIntroSection";
import { TextStatSection } from "../TextStatSection/textStatSection";
import TextSticky from "./text-sticky";
export interface TextScrollProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
  section: any;
}

export default function TextScroll(props: TextScrollProps) {
  const { className = "", scrollYProgress, section } = props;

  const sections = ["bg-red-600", "bg-yellow-600", "bg-blue-600"];

  return (
    <div className={className}>
      <TextSticky>
        <TextIntroSection
          index={section.index}
          sectionName={section.smallTitle}
          title={section.bigTitle}
        >
          {section.intro.map((sentence: string, index: number) => {
            return <p key={index} className="mb-2">{sentence}</p>;
          })}
        </TextIntroSection>
      </TextSticky>
      <TextSticky>
        <div className="svg-container">
          <section.dialog />
        </div>
      </TextSticky>
      <TextSticky relative>
        <TextStatSection
          title={section.stat.title}
          statNumber={section.stat.statNumber}
          statLabel={section.stat.statLabel}
          noStat={section.stat.noStat}
          legend={section.stat.legend}
          bigLabel={section.stat.bigLabel}
        >
          {section.stat.text.map((sentence: string, index: number) => {
            return <p key={index} className="mb-2">{sentence}</p>;
          })}
        </TextStatSection>
      </TextSticky>
    </div>
  );
}
