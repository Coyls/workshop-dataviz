/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import cls from "classnames";
import { useEffect, useState } from "react";
import {
  GraphTypeBus,
  useButtons,
} from "../buttons-provider/buttonts-provider";
export interface GraphSvgProps {
  visible: boolean;
  src: string;
  offset?: string;
  buttons?: () => JSX.Element;
  srcs?: Record<string, { src: string; offset: string }>;
}

export const GraphSvg = (props: GraphSvgProps) => {
  const { visible, src, offset = "bottom-0", buttons, srcs } = props;

  const visibleClass = visible ? "opacity-100" : "opacity-0";

  const { switchButtons, switchButtonsBuilding } = useButtons();
  const [classRight, setClassRight] = useState<string>();

  const [srcGraph, setSrcGraph] = useState(
    srcs
      ? srcs[switchButtons]?.src
        ? srcs[switchButtons].src
        : srcs[switchButtonsBuilding].src
      : src
  );
  const [className, setClassName] = useState(
    cls(
      "w-full h-auto absolute",
      srcs
        ? srcs[switchButtons]?.offset
          ? srcs[switchButtons].offset
          : srcs[switchButtonsBuilding].offset
        : offset
    )
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
      setSrcGraph(
        srcs[switchButtons]?.src
          ? srcs[switchButtons].src
          : srcs[switchButtonsBuilding].src
      );
      setClassRight(srcs[switchButtons] ? "right-[-225px]" : "right-0");

      setClassName(
        cls(
          "w-full h-auto absolute",
          srcs
            ? srcs[switchButtons]?.offset
              ? srcs[switchButtons].offset
              : srcs[switchButtonsBuilding].offset
            : offset
        )
      );
    }
  }, [switchButtons, switchButtonsBuilding, srcs]);

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
      <div
        className={cls(
          "absolute bottom-0 z-50 w-full",
          {
            hidden: !visible,
          },
          classRight
        )}
      >
        {Buttons}
      </div>
    </>
  );
};
