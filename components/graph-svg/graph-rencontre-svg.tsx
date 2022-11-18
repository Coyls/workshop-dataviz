/* eslint-disable @next/next/no-img-element */
import cls from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
export interface GraphRencontreSvgProps {
  visible: boolean;
  src: string;
  offset?: string;
}

export const GraphSvg = (props: GraphRencontreSvgProps) => {
  const { visible, src, offset = "bottom-0" } = props;

  const className = cls(
    "w-full h-auto absolute",
    offset,
    visible ? "opacity-100" : "opacity-0"
  );

  return (
    <>
      <img alt="graph" src={src} className={className} />
      <img
        className={cls(className, "z-[-10]")}
        src="./bg-white.png"
        alt="bg"
      />
    </>
  );
};
