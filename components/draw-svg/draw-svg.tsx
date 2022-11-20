/* eslint-disable @next/next/no-img-element */
import cls from "classnames";
export interface DrawSvgProps {
  visible: boolean;
  src: string;
  offset?: string;
}

export const DrawSvg = (props: DrawSvgProps) => {
  const { visible, src, offset = "bottom-0" } = props;

  const visibleClass = visible ? "opacity-100" : "opacity-0";

  const className = cls("w-full h-auto absolute", offset);

  return (
    <>
      <img alt="draw" src={src} className={cls(className, visibleClass)} />
    </>
  );
};
