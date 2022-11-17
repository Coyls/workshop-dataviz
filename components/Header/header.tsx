import React, { useState, useEffect } from 'react';
import { HeaderItem } from '../HeaderItem/headerItem';
import { Highlighter } from '../Highlighter/hightlighter';
import { Logo } from '../Logo/logo';
import styles from './header.module.css';
import cls from 'classnames';
import { useScroll } from 'framer-motion';

export function Header() {

    const [isDeployed, setIsDeployed] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const { scrollY } = useScroll();

    function update() {
        if (scrollY?.get() < scrollY?.getPrevious()) {
          setIsDeployed(true);
        } else if (scrollY?.get() > 150 && scrollY?.get() > scrollY?.getPrevious()) {
          setIsDeployed(false);
        }
      }
      
      useEffect(() => {
        return scrollY.onChange(() => update());
      });

    // useEffect(() => {
    //     return scrollY.onChange(() => {
    //       console.log("current: ", scrollY.get())
    //       console.log("prev: ", scrollY.getPrevious())
    //     })
    //   }, [])

    // if ( typeof window !== "undefined") {
    //     var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function() {
    //         var currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             setIsDeployed(true)
    //         } else {
    //             setIsDeployed(false)
    //         }
    //         prevScrollpos = currentScrollPos;
    //     }
    //   }

    

    return <div className={cls(styles.customShadow, 'flex gap-2 fixed bg-white w-full py-9 px-16 z-10')}>
        <div className='w-[15%] flex'>
            <Logo />
        </div>
        <div className='flex-1 flex items-stretch gap-2'>
            <HeaderItem title="La recontre" isDeployed={isDeployed} index={1} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                Monter dans un bus quand on est handicapé moteur, <br /> <Highlighter> une épreuve ?</Highlighter>
            </HeaderItem>
            <HeaderItem  title="Aider c'est comprendre" isDeployed={isDeployed} index={2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                S’arrêter à temps et au bon endroit, <br /> <Highlighter> pas si simple !</Highlighter>
            </HeaderItem>
            <HeaderItem  title="Handicap et métro" isDeployed={isDeployed} index={3} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                Le labyrinthe à escalier, comment accéder au métro <br />  <Highlighter> en toute sécurité ?</Highlighter>
            </HeaderItem>
            <HeaderItem title="Des quotidiens différents ?" isDeployed={isDeployed} index={4} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} isLast>
                L’autonomie ca s’invente pas, <br /> <Highlighter> ca se vit !</Highlighter>
            </HeaderItem>
        </div>
    </div>
}