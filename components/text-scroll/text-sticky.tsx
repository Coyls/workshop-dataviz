import cls from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";
export interface TextStickyProps {
  children?: ReactNode;
  relative?: boolean;
}

export default function TextSticky(props: TextStickyProps) {
  const { children, relative = false } = props;

  return (
    <motion.div className={cls("h-1/3 relative")}>
      <div className={cls(relative ? "relative" : "sticky", "top-0")}>
        <article className="flex flex-col h-full justify-center pt-[30vh]">
          {children}
        </article>
      </div>
    </motion.div>
  );
}
