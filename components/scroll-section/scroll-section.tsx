import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Canvas from "../canvas/canvas";
import { useScrollContext } from "../scroll-context.context";
import TextScroll from "../text-scroll/text-scroll";

export const ScrollSection = ({ section }: any) => {
  const { containerScrollSectionRef, scrollSectionY, YAnimationScale } =
    useScrollContext();

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
      ref={containerScrollSectionRef}
      className="flex flex-row h-[300vh] w-screen relative  px-16 justify-between"
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
          />
        </motion.div>
      </div>

      <TextScroll
        scrollYProgress={scrollSectionY}
        className="w-[28vw] h-full"
        section={section}
      />
    </section>
  );
};
