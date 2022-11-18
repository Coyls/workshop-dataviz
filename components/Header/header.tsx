import React, { useState, useEffect } from "react";
import { HeaderItem } from "../HeaderItem/headerItem";
import { Highlighter } from "../Highlighter/hightlighter";
import { Logo } from "../Logo/logo";
import styles from "./header.module.css";
import cls from "classnames";
import { useScrollContext } from "../scroll-context.context";

type HeaderProps = {
  currentIndex: number,
  setCurrentIndex: Function,
}

export function Header({currentIndex, setCurrentIndex}:HeaderProps) {
  const [isDeployed, setIsDeployed] = useState(true);
  const [refScroll, setRefScroll] = useState<number>(0);

  const { scrollYGlobal } = useScrollContext();

  function update() {
    const previousY = scrollYGlobal.getPrevious();
    const currentY = scrollYGlobal.get();

    const toTop = currentY < previousY;

    if (toTop) {
      if (refScroll === 0) setRefScroll(currentY);

      if (refScroll - currentY > 500 || currentY < 50) {
        setIsDeployed(true);
      }
    } else if (currentY > 50 && currentY > previousY) {
      if (refScroll !== 0) setRefScroll(0);

      setIsDeployed(false);
    }
  }

  useEffect(() => {
    return scrollYGlobal.onChange(() => update());
  });

  return (
    <>
      <div
        className={cls(
          styles.customShadow,
          "flex gap-2 fixed bg-white w-full py-9 px-16 z-10"
        )}
      >
        <div className="w-[15%] flex">
          <Logo />
        </div>
        <div className="flex-1 flex items-stretch gap-2">
          <HeaderItem
            title="La recontre"
            isDeployed={isDeployed}
            index={1}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            Monter dans un bus quand on est handicapé moteur, <br />{" "}
            <Highlighter> une épreuve ?</Highlighter>
          </HeaderItem>
          <HeaderItem
            title="Aider c'est comprendre"
            isDeployed={isDeployed}
            index={2}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            S’arrêter à temps et au bon endroit, <br />{" "}
            <Highlighter> pas si simple !</Highlighter>
          </HeaderItem>
          <HeaderItem
            title="Handicap et métro"
            isDeployed={isDeployed}
            index={3}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            Le labyrinthe à escalier, comment accéder au métro <br />{" "}
            <Highlighter> en toute sécurité ?</Highlighter>
          </HeaderItem>
          <HeaderItem
            title="Des quotidiens différents ?"
            isDeployed={isDeployed}
            index={4}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isLast
          >
            L’autonomie ca s’invente pas, <br />{" "}
            <Highlighter> ca se vit !</Highlighter>
          </HeaderItem>
        </div>
      </div>
      <div className="h-[200px]" />
    </>
  );
}
