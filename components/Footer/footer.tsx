import React from "react";
import {SOURCES} from './../../public/data/sources';
import Image from "next/image";

export function Footer(){

    const tier = Math.ceil(SOURCES.length / 3);    
    const firstTier = SOURCES.slice(0, tier)
    const secondTier = SOURCES.slice(tier, tier*2)
    const thirdTier = SOURCES.slice(tier*2)

    return <div className="flex flex-col mt-[100px]">
        <div className="pt-[61px] pb-[76px] px-[70px] bg-[#F7F7F7]">
            <span className="font-['Eyra-400ExtraLight'] uppercase leading-8">Sources</span>
            <div className="w-full flex gap-10">
                <div className="flex flex-col w-1/3">
                {
                    firstTier.map((s)=>{
                        return <Link key={s.label} href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
                <div className="flex flex-col w-1/3">
                {
                    secondTier.map((s)=>{
                        return <Link key={s.label} href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
                <div className="flex flex-col w-1/3">
                {
                    thirdTier.map((s)=>{
                        return <Link key={s.label} href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
            </div>
        </div>
        <div className="py-9 px-[70px] bg-[#141414] flex">
            <div className="flex gap-10 items-center">
                <Link href="https://www.lecole-cci.fr/">
                    <div>
                        <Image
                            src="/image/logoCCI.png"
                            width={120}
                            height={36}
                            alt="Logo de la CCI" />
                    </div>
                </Link>
                <Link href="https://www.gobelins.fr/">
                    <Image
                        src="/image/logoGobelins.png"
                        width={60}
                        height={60}
                        alt="Logo de Gobelins Paris" />
                </Link>

            </div>
            <div className="flex-1 flex justify-end pr-14 text-[#FEFCFF] font-['Eyra-400Light']">
                <div>
                    Projet réalisé dans le cadre de la formation CCI - École des Gobelins Annecy par <br />
                    <span className="font-['Eyra-400Regular']">
                        Lucas Leperlier, Jean Deleage, Apolline Grember, Jeremy Lagadec, Loïc Greco
                    </span>
                </div>
            </div>
            <div className="font-['Eyra-400ExtraLight'] text-[#FEFCFF]">
                <p>Projet étudiant B3</p>
                <p>Promotion 2022-2023</p>
            </div>
            
        </div>
    </div>
}

function Link({href, children}:any): JSX.Element{
    return <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        style={{textUnderlineOffset: "2px"}}
        className="whitespace-nowrap overflow-hidden text-ellipsis font-['Eyra-400Medium'] underline"
    >
        {children}
    </a>
}