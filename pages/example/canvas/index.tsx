import styles from "./canvas.module.scss";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [frameCount] = useState<number>(21);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);

  const currentFrame = (index: number) => {
    return `/bus/BUS_${index.toString().padStart(3, "0")}.png`;
  };

  useEffect(() => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  }, []);

  useEffect(() => {
    const img = new Image();

    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext("2d");
    if (context === null) return;

    canvas.width = 2048;
    canvas.height = 2048;
    img.src = currentFrame(1);

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };

    const onScroll = () => {
      console.time();

      const percentScroll = scrollYProgress.get();
      const scrollFraction = percentScroll * (frameCount - 1);

      const frameIndex = Math.min(Math.ceil(scrollFraction));
      if (frameIndex !== currentFrameIndex) {
        setCurrentFrameIndex(frameIndex);
        requestAnimationFrame(() => updateImage(frameIndex + 1));
      }
      console.timeEnd();
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [canvasRef, scrollYProgress, frameCount]);

  return (
    <section ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </section>
  );
}
