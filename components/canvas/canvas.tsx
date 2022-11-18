import cls from "classnames";
import { MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraphSvg } from "../graph-svg/graph-rencontre-svg";

export interface CanvasProps {
  scrollYProgress: MotionValue<number>;
  frameFilePath: string;
  canvasWidth: number;
  canvasHeight: number;
  className?: string;
  frameCount: number;
  startingFrame: number;
  graph?: {
    src: string;
    offset?: string;
    frame: number;
  };
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
    graph,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [graphVisibility, setGraphVisibility] = useState<boolean>(false);

  const imageLoads: HTMLImageElement[] = [];

  const loadImage = (index: number) => {
    return `${frameFilePath}${index.toString()}.png`;
  };

  const duplicateLastFrame = () => {
    const lastFrame = imageLoads[imageLoads.length - 1];

    for (let i = 0; i < 50; i++) {
      imageLoads.push(lastFrame);
    }
  };

  const preloadImages = () => {
    console.time("preloadImages");
    for (let i = startingFrame; i < frameCount + startingFrame; i++) {
      const img = new Image();
      img.src = loadImage(i);
      imageLoads.push(img);
    }

    duplicateLastFrame();

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
        console.log("frameIndex", frameIndex);
        if (graph) setGraphVisibility(frameIndex >= graph.frame);
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
    <div ref={canvasContainerRef} className="width-full relative  mt-56">
      <canvas ref={canvasRef} className={cls(className)}></canvas>

      <div className="hidden bottom-[-5px]"></div>
      <div className="hidden bottom-[-110px]"></div>

      {graph && (
        <GraphSvg
          visible={graphVisibility}
          src={graph?.src as string}
          offset={graph?.offset}
        />
      )}
    </div>
  );
}
