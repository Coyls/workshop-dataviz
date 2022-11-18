import { MotionValue } from "framer-motion";
import Image from "next/image";
import { Highlighter } from "../Highlighter/hightlighter";
import { TextIntroSection } from "../TextIntroSection/textIntroSection";
import { TextStatSection } from "../TextStatSection/textStatSection";
import TextSticky from "./text-sticky";
export interface TextScrollProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
  section: any
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
          {section.intro}
        </TextIntroSection>
      </TextSticky>
      <TextSticky>
        <section.dialog />
      </TextSticky>
      <TextSticky relative>
      <TextStatSection
          title={section.stat.title}
          statNumber={section.stat.statNumber}
          statLabel={section.stat.statLabel}
        >
          {section.stat.text}
        </TextStatSection>
      </TextSticky>
    </div>
  );
}
