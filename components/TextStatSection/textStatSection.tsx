import React from "react";
import cls from "classnames";
import styles from "./TextStatSection.module.css"

type TextStatSectionProps = {
    title: any,
    statNumber: any,
    statLabel: string, 
    children: string;
}

export function TextStatSection({title, statNumber, statLabel, children}: TextStatSectionProps){


    return <>
            <div className="font-['Eyra-400Bold'] text-[28px] leading-9">
                {title}
            </div>
            <div className="text-2xl mt-3.5 mb-5 font-[Eyra-400Light] text-xl">
                {children}
            </div>
            <div className={styles.arrow}/>
            <div className="flex items-center">
              <div className={cls(statNumber.number.isYellow ? styles.highlightYellow : styles.highlightLila, "flex justify-center items-center")}>
                <div className="text-[#141414] text-5xl font-['Eyra-400Bold'] pr-[8px]">{statNumber.number}</div>
              </div>
              <div className="font-['Eyra-400Light'] text-2xl uppercase text-gray-700">
                {statLabel}
              </div>
            </div>
    </>
}