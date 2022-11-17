import { RefObject, useEffect, useRef, useState } from "react";
import { MotionValue, useScroll } from "framer-motion";
import cls from "classnames";
import styles from "./canvas.module.scss";

export interface CanvasProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export default function Canvas(props: CanvasProps) {
  const { scrollYProgress, className = "" } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [frameCount] = useState<number>(21);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const loadImage = (index: number) => {
    return `/bus/BUS_${index.toString().padStart(3, "0")}.png`;
  };

  useEffect(() => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = loadImage(i);
      setImages([...images, img]);
      console.log("images", images);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const img = new Image();

    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext("2d");
    if (context === null) return;

    canvas.width = 2048;
    canvas.height = 2048;
    img.src = loadImage(1);

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      const img = images[index - 1];
      console.log("images", images);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };

    const onScroll = () => {
      const percentScroll = scrollYProgress.get();
      const scrollFraction = percentScroll * (frameCount - 1);

      const frameIndex = Math.min(Math.ceil(scrollFraction));
      if (frameIndex !== currentFrameIndex) {
        setCurrentFrameIndex(frameIndex);
        requestAnimationFrame(() => updateImage(frameIndex + 1));
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
