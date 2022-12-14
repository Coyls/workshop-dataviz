import React from "react";
import { BigStatNumber } from "../BigStatNumber/bigStatNumber";
import { Highlighter } from "../Highlighter/hightlighter";
import {IntroSectionArrow} from './../IntroSectionArrow/introSectionArrow';

export function IntroSection() {
    return <div className="w-full flex flex-col items-center py-24 gap-24" id="top">
        <div className="ml-28 w-2/3 flex flex-col gap-10">
            <div className="relative">
                <span className="font-[Eyra-500ExtraBold] text-[56px] leading-tight">
                    Handicapés moteurs et accès aux transports en commun, 
                    <Highlighter> <span className="whitespace-nowrap"> un enjeu pour l’autonomie ? </span> </Highlighter>
                </span>
                <div className="absolute -left-[150px] top-1/2 flex flex-col items-end ">
                    <IntroSectionArrow />
                    {/* <Image 
                        src={"/image/introSection-arrow.svg"}
                        width="49" 
                        height="53"
                        /> */}
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
                <span className="font-['Hynings'] text-2xl font-normal">En effet</span>
                <BigStatNumber noArrow>
                    <span className="font-['Eyra-900ExtraBold'] text-7xl"> 1 pers / 28</span> 
                </BigStatNumber>
            </div>
            <div className="uppercase w-3/5 text-center">
                <p className="font-['Eyra-400Bold'] text-[28px] mb-2 leading-9">
                est reconnue être en situation de handicap moteur en france
                </p>
                <p className="font-['Eyra-400Medium'] text-xl">Soit 3,5% de la population française</p>
            </div>
        </div>
    </div>
}
