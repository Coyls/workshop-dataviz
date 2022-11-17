import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Canvas from "../canvas/canvas";
import { useScrollContext } from "../scroll-context.context";
import cls from "classnames";

export function BusSection() {
  const {
    containerRef,
    YCanvas,
    animationScaleRef,
    YAnimationScale,
    animationTranslateRef,
    YAnimationTranslate,
  } = useScrollContext();

  const scale = useMotionValue(1);
  const translateY = useMotionValue(1);
  const translateX = useMotionValue(1);
  const opacity = useMotionValue(1);

  useEffect(() => {
    const updateScale = (val: number) => {
      scale.set(val);
      val <= 0.5 ? opacity.set(0) : opacity.set(1);
      console.log("val", val);
    };

    const updateTranslate = (val: number) => {
      if (animationTranslateRef.current) {
        const VHHeight = animationTranslateRef.current.clientHeight;
        const distY = VHHeight;
        const distX = 300;
        translateY.set(distY * val);
        translateX.set(-(distX * val));
      }
    };

    const unsubscribeYScale = YAnimationScale.onChange(updateScale);
    const unsubscribeYTranslate = YAnimationTranslate.onChange(updateTranslate);

    return () => {
      unsubscribeYScale();
      unsubscribeYTranslate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div ref={containerRef} className="h-screen w-screen">
        <motion.div
          className={cls("w-full h-full")}
          style={{ scale, translateY, translateX, opacity }}
          transition={{ duration: 1 }}
        >
          <Canvas
            canvasWidth={2560}
            canvasHeight={1440}
            frameCount={50}
            frameFilePath="/bus-rencontre/BUS_RENCONTRE_"
            scrollYProgress={YCanvas}
            className="w-full"
            startingFrame={0}
          />
        </motion.div>
      </div>
      <div ref={animationScaleRef} className="absolute h-screen w-screen"></div>
      <div
        ref={animationTranslateRef}
        className="absolute h-screen w-screen"
      ></div>
    </section>
  );
}
