import { motion, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import cls from "classnames";

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
          <div key={i} className={cls("h-1/3 relative", section)}>
            {/* <Text /> */}
          </div>
        );
      })}
    </div>
  );
}
