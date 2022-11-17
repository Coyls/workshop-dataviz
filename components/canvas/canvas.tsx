import cls from "classnames";
import { MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./canvas.module.scss";

export interface CanvasProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export default function Canvas(props: CanvasProps) {
  const { scrollYProgress, className = "" } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const imageLoads: HTMLImageElement[] = [];
  const frameCount = 191;

  const loadImage = (index: number) => {
    return `/bus-rencontre/BUS_RENCONTRE_${index.toString()}.png`;
  };

  const preloadImages = () => {
    console.time("preloadImages");
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = loadImage(i);
      imageLoads.push(img);
    }
    console.log("Images Preload ! : ", imageLoads);
    console.timeEnd("preloadImages");
  };

  useEffect(() => {
    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const img = new Image();

    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext("2d");
    if (context === null) return;

    canvas.width = 2560;
    canvas.height = 1440;
    img.src = loadImage(0);

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      const img = imageLoads[index];
      context.clearRect(0, 0, canvas.width, canvas.height);
      img
        ? context.drawImage(img, 0, 0)
        : console.log("img | imageLoads | index", img, imageLoads, index);
    };

    let frameIndex = 0;
    const onScroll = () => {
      const percentScroll = scrollYProgress.get();
      const scrollFraction = percentScroll * (frameCount - 1);
      const frameIndexTarget = Math.min(Math.ceil(scrollFraction));
      frameIndex += (frameIndexTarget - frameIndex) * 0.6;
      frameIndex = Math.round(frameIndex);

      if (frameIndex !== currentFrameIndex) {
        setCurrentFrameIndex(frameIndex);
        requestAnimationFrame(() => updateImage(frameIndex));
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasRef, scrollYProgress]);

  return (
    <canvas ref={canvasRef} className={cls(styles.canvas, className)}></canvas>
  );
}
