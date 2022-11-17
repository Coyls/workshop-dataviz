import cls from "classnames";
import { MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./canvas.module.scss";

export interface CanvasProps {
  scrollYProgress: MotionValue<number>;
  frameFilePath: string;
  canvasWidth: number;
  canvasHeight: number;
  className?: string;
  frameCount: number;
  startingFrame: number;
}

export default function Canvas(props: CanvasProps) {
  const {
    scrollYProgress,
    className = "",
    frameFilePath,
    canvasWidth,
    canvasHeight,
    frameCount,
    startingFrame,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const imageLoads: HTMLImageElement[] = [];

  const loadImage = (index: number) => {
    return `${frameFilePath}${index.toString()}.png`;
  };

  const preloadImages = () => {
    console.time("preloadImages");
    for (let i = startingFrame; i < frameCount + startingFrame; i++) {
      const img = new Image();
      img.src = loadImage(i);
      console.log("loadImage(i)", loadImage(i));
      imageLoads.push(img);
    }
    console.log("Images Preload ! : ", imageLoads);
    console.log("imageLoads Length !", imageLoads.length);
    console.timeEnd("preloadImages");
  };

  useEffect(() => {
    if (imageLoads.length === 0) {
      preloadImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const img = new Image();

    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext("2d");
    if (context === null) return;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
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
