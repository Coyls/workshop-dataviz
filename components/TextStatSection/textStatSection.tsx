import React from "react";
import cls from "classnames";
import styles from "./TextStatSection.module.css"

type TextStatSectionProps = {
    title: any,
    statNumber: any,
    statLabel: string, 
    noStat: boolean,
    legend: string,
    children: string;
}

export function TextStatSection({title, statNumber, statLabel,noStat, children, legend}: TextStatSectionProps){

    return <>
            <div className="font-['Eyra-400Bold'] text-xl">
                {title}
            </div>
            <div className=" mt-3.5 mb-5 font-[Eyra-400Regular] text-xl">
                {children}
            </div>
            {legend && 
                <div className="text-2xl mt-3.5 mb-5 font-[Eyra-400Light] text-xs">
                    {legend}
                </div>}
            {!noStat && <>
                <div className={styles.arrow}/>
                <div className="flex items-center">
                    <div className={cls(statNumber.isYellow ? styles.highlightYellow : styles.highlightLila, "flex justify-center items-center")}>
                        <div className="text-[#141414] text-5xl font-['Eyra-400Bold'] pr-[8px]">{statNumber.number}</div>
                    </div>
                    <div className="font-['Eyra-200ExtraLight'] text-2xl uppercase">
                        {statLabel}
                    </div>
                </div> 
            </>}
    </>
}