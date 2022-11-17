import { useScroll } from "framer-motion";
import { useRef } from "react";
import Canvas from "../canvas/canvas";
import TextScroll from "../text-scroll/text-scroll";

export default function ScrollSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="flex flex-row h-[300vh] w-screen relative bg-cyan-400 px-16 justify-between"
    >
      <div className="sticky top-0 w-[595px] h-screen">
        <div className="flex flex-col h-full justify-center">
          <Canvas scrollYProgress={scrollYProgress} className="w-full" />
        </div>
      </div>

      <TextScroll
        scrollYProgress={scrollYProgress}
        className="w-[595px] h-full"
      />
    </section>
  );
}
