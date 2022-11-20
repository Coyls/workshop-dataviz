import React from "react";
import styles from './bigStat.module.css';
import cls from 'classnames';
import { BigStatNumber } from "../BigStatNumber/bigStatNumber";

export function BigStat({}){
        return <div className="bg-[#F7F7F7] h-[600px]">
            <div className={cls(styles.bg, "flex flex-col flex-1 self-center justify-center gap-6")}>
                <BigStatNumber>
                    <span className="font-['Eyra-900ExtraBold'] text-7xl"> 65% </span> 
                </BigStatNumber>
                <p className="text-center font-['Eyra-400Bold'] uppercase text-[28px] leading-8">
                    des voyageurs ayant un handicap moteur sont <br /> encore insatisfaits de l’évolution <br /> du métro parisien !
                </p>
            </div>
        </div>
}

function ExpendedLetter({letter}:any): JSX.Element{
    return <span className="font-['Eyra-900Bold']">{letter}</span>
}