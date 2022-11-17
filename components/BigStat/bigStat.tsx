import React from "react";
import styles from './bigStat.module.css';
import cls from 'classnames';
import { BigStatNumber } from "../BigStatNumber/bigStatNumber";

export function BigStat({}){
        return <div className="bg-[#F7F7F7] h-[500px]">
            <div className={cls(styles.bg, "flex flex-col flex-1 self-center justify-center gap-6")}>
                <BigStatNumber>
                    <span className="font-['Eyra-900ExtraBold'] text-7xl"> 32 700</span> 
                </BigStatNumber>
                <p className="text-center font-['Eyra-400Bold'] uppercase text-[28px]">
                    C’est le n<ExpendedLetter letter="o"/>mbre de bus 
                    ada<ExpendedLetter letter="p"/>té pour 
                    les person<ExpendedLetter letter="n"/>es <br /> à 
                    mobi<ExpendedLetter letter="l"/>ité réduite 
                    à Pa<ExpendedLetter letter="r"/>is.
                </p>
            </div>
        </div>
}

function ExpendedLetter({letter}:any): JSX.Element{
    return <span className="font-['Eyra-900Bold']">{letter}</span>
}