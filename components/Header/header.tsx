import React, { useState } from 'react';
import { HeaderItem } from '../HeaderItem/headerItem';
import { Highlighter } from '../Highlighter/hightlighter';
import { Logo } from '../Logo/logo';
import styles from './header.module.css';

export function Header() {

    const [isDeployed, setIsDeployed] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);

    if ( typeof window !== "undefined") {
        var prevScrollpos = window.pageYOffset;
        // browser code
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setIsDeployed(true)
            } else {
                setIsDeployed(false)
            }
            prevScrollpos = currentScrollPos;
        }
      }

    

    return <div className='flex gap-2 fixed bg-white w-full py-9 px-16 drop-shadow-md'>
        <div className='w-[15%] flex'>
            <Logo />
        </div>
        <div className='flex-1 flex items-stretch gap-16'>

        <HeaderItem title="La recontre" isDeployed={isDeployed} index={1} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
         Monter dans un bus quand on est handicapé moteur, 
         <Highlighter> une épreuve ?</Highlighter>
        </HeaderItem>
        <HeaderItem  title="Aider c'est comprendre" isDeployed={isDeployed} index={2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        S’arrêter à temps et au bon endroit, <Highlighter> pas si simple !</Highlighter>
        </HeaderItem>
        <HeaderItem  title="Handicap et métro" isDeployed={isDeployed} index={3} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        Le labyrinthe à escalier, comment accéder au métro <Highlighter> en toute sécurité ?</Highlighter>
        </HeaderItem>
        <HeaderItem title="Des quotidiens différents ?" isDeployed={isDeployed} index={4} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
            L’autonomie ca s’invente pas, <Highlighter> ca se vit !</Highlighter>
        </HeaderItem>
        </div>
    </div>
}