import { MotionValue, useScroll } from "framer-motion";
import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

export interface ScrollContextInterface {
  containerRef: RefObject<HTMLDivElement>;
  YCanvas: MotionValue<number>;
  animationScaleRef: RefObject<HTMLDivElement>;
  YAnimationScale: MotionValue<number>;
  animationTranslateRef: RefObject<HTMLDivElement>;
  YAnimationTranslate: MotionValue<number>;

  scrollYGlobal: MotionValue<number>;
}

const ScrollCtx = createContext<ScrollContextInterface>(
  {} as ScrollContextInterface
);

export const ScrollProvider = ({ children }: { children?: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationScaleRef = useRef<HTMLDivElement>(null);
  const animationTranslateRef = useRef<HTMLDivElement>(null);

  const { scrollY: scrollYGlobal } = useScroll();

  const { scrollYProgress: YCanvas } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: YAnimationScale } = useScroll({
    target: animationScaleRef,
    offset: ["end start", "start end"],
  });

  const { scrollYProgress: YAnimationTranslate } = useScroll({
    target: animationTranslateRef,
    offset: ["start end", "end end"],
  });

  return (
    <ScrollCtx.Provider
      value={{
        containerRef,
        YCanvas,
        animationScaleRef,
        YAnimationScale,
        animationTranslateRef,
        YAnimationTranslate,
        scrollYGlobal,
      }}
    >
      {children}
    </ScrollCtx.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollCtx);
