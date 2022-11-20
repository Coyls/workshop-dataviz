/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import cls from "classnames";
import { useEffect, useState } from "react";
import {
  GraphTypeBus,
  useButtons,
} from "../buttons-provider/buttonts-provider";
export interface GraphRencontreSvgProps {
  visible: boolean;
  src: string;
  offset?: string;
  buttons?: () => JSX.Element;
  srcs?: Record<GraphTypeBus, { src: string; offset: string }>;
}

export const GraphSvg = (props: GraphRencontreSvgProps) => {
  const { visible, src, offset = "bottom-0", buttons, srcs } = props;

  const visibleClass = visible ? "opacity-100" : "opacity-0";

  const { switchButtons } = useButtons();
  const [srcGraph, setSrcGraph] = useState(
    srcs ? srcs[switchButtons].src : src
  );
  const [className, setClassName] = useState(
    cls("w-full h-auto absolute", srcs ? srcs[switchButtons].offset : offset)
  );
  const [Buttons, setButtons] = useState<JSX.Element>();

  useEffect(() => {
    if (buttons) {
      setButtons(buttons());
    }
  }, [buttons]);

  useEffect(() => {
    console.log("srcs", srcs);
    if (srcs) {
      setSrcGraph(srcs[switchButtons].src);
      setClassName(
        cls(
          "w-full h-auto absolute",
          srcs ? srcs[switchButtons].offset : offset
        )
      );
    }
    console.log("srcGraph", srcGraph);
  }, [switchButtons, srcs]);

  return (
    <>
      <img
        alt="graph"
        src={srcGraph}
        className={cls(className, visibleClass)}
      />
      <img
        className={cls(className, visibleClass, "z-[-10]")}
        src="./bg-white.png"
        alt="bg"
      />
      <div className={cls("absolute right-0 bottom-0", { hidden: !visible })}>
        {Buttons}
      </div>
    </>
  );
};
