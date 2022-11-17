import cls from "classnames";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
export interface TextStickyProps {
  children?: ReactNode;
  relative?: boolean;
}

export default function TextSticky(props: TextStickyProps) {
  const { children, relative = false } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref !== null) {
      console.log("ref.current?.clientHeight;", ref.current?.clientHeight);
    }
  }, [ref]);

  return (
    <motion.div className={cls("h-1/3 relative")}>
      <div ref={ref} className={cls(relative ? "relative" : "sticky", "top-0")}>
        <article className="flex flex-col h-full justify-center pt-[30vh]">
          {children}
        </article>
      </div>
    </motion.div>
  );
}
