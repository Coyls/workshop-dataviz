import cls from "classnames";
import { motion, MotionValue, Variants } from "framer-motion";
import TextSticky from "./text-sticky";

export interface TextScrollProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export default function TextScroll(props: TextScrollProps) {
  const { className = "", scrollYProgress } = props;

  const sections = ["bg-red-600", "bg-yellow-600", "bg-blue-600"];

  return (
    <div className={className}>
      {sections.map((section, i) => {
        return (
          <motion.div key={i} className={cls("h-1/3 relative", section)}>
            <TextSticky className=" sticky top-[20vh]" />
          </motion.div>
        );
      })}
    </div>
  );
}
