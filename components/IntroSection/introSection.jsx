import Image from "next/image";
import React from "react";
import { BigStatNumber } from "../BigStatNumber/bigStatNumber";
import { Highlighter } from "../Highlighter/hightlighter";

export function IntroSection() {
    return <div className="w-full flex flex-col items-center py-24 gap-24">
        <div className="ml-28 w-2/3 flex flex-col gap-10">
            <div className="relative">
                <span className="font-[Eyra-500ExtraBold] text-[56px] leading-tight">
                Handicapés moteurs et accès aux transports en commun, 
                <Highlighter> un enjeu pour l’autonomie ?</Highlighter>
                </span>
                <div className="absolute -left-[150px] top-1/2 flex flex-col items-end ">
                    <Image 
                        src={"/image/introSection-arrow.svg"}
                        width="49" 
                        height="53"
                        />
                    <span className="font-['Hynings'] text-2xl font-normal"> Rien que ça ! </span>
                </div>
            </div>
            <div className="font-[Eyra-400Regular] text-[28px] leading-7">
                La mobilité est un enjeu majeur pour l’inclusion sociale, 
                particulièrement chez les personnes à handicap moteur, qui sont davantage susceptibles d’être isolées.
            </div>
        </div>
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center">
                <span className="font-['Hynings'] text-2xl font-normal">En effet, ce sont plus de</span>
                <BigStatNumber noArrow>
                    <span className="font-['Eyra-900ExtraBold'] text-7xl"> 850 000</span> 
                </BigStatNumber>
            </div>
            <div className="uppercase w-3/5 text-center">
                <p className="font-['Eyra-400Bold'] text-[28px] mb-2">
                    personnes qui sont en situation de handicap moteur en france
                </p>
                <p className="font-['Eyra-400Medium'] text-xl">Soit 1,5% de la population adulte</p>
            </div>
        </div>
    </div>
}
