import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Canvas from "../canvas/canvas";
import { useScrollContext } from "../scroll-context.context";
import TextScroll from "../text-scroll/text-scroll";

export interface ScrollSectionProps {
  section: any;
}

export const ScrollSection = (props: ScrollSectionProps) => {
  const { section } = props;

  const { YAnimationScale } = useScrollContext();

  const containerScrollSectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: scrollSectionY } = useScroll({
    target: containerScrollSectionRef,
    offset: ["start start", "end end"],
  });

  const opacity = useMotionValue(1);

  useEffect(() => {
    const updateOpacity = (val: number) => {
      val >= 0.5 ? opacity.set(0) : opacity.set(1);
    };

    const unsubscribeYOpacity = YAnimationScale.onChange(updateOpacity);

    return () => {
      unsubscribeYOpacity();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id={"section-" + section.index}
      ref={containerScrollSectionRef}
      className="flex flex-row h-[300vh] w-screen relative mt-1 px-16 justify-between"
    >
      <div className="sticky top-0 w-[59vw] h-screen">
        <motion.div
          style={{ opacity }}
          transition={{ duration: 1 }}
          className="flex flex-col h-full justify-center"
        >
          <Canvas
            canvasWidth={section.canvas.canvasWidth}
            canvasHeight={section.canvas.canvasHeight}
            frameCount={section.canvas.frameCount}
            frameFilePath={section.canvas.frameFilePath}
            scrollYProgress={scrollSectionY}
            className="w-full"
            startingFrame={section.canvas.startingFrame}
            graph={section.canvas.graph}
          />
        </motion.div>
      </div>

      <TextScroll
        scrollYProgress={scrollSectionY}
        section={section}
        className="w-[28vw] h-full"
      />
    </section>
  );
};
