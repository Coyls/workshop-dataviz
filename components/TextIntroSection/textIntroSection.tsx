import React from "react";
import { HeaderNumero } from "../HeaderNumero/headerNumero";

type TextIntroSection = {
    index: number,
    sectionName: string,
    title: string, 
    children: string;
}

export function TextIntroSection({index, sectionName, title, children}: TextIntroSection){
    return <>
        <HeaderNumero>0{index}</HeaderNumero>
        <span className="font-['Eyra-400Light'] text-xl uppercase text-gray-700 mt-5">{sectionName}</span>
        <h3 className="font-['Eyra-400Bold'] text-[28px] mt-1 mb-5 leading-9">
          {title}
        </h3>
        <svg
          width="82"
          height="17"
          viewBox="0 0 82 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10.7653C9.14221 7.35633 12.7664 5.82591 18.9542 3.9057C27.8399 0.429399 19.6122 10.4171 22.145 13.5213C23.5484 15.2412 38.9413 -1.06107 42.9983 3.96695C43.9656 6.60908 41.5097 12.6182 45.7871 13.5213C50.1296 14.4382 54.6029 14.0638 58.6947 12.1739C65.1076 9.21204 71.6044 3.59947 79 3.59947"
            stroke="#ECD6F5"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-6 font-['Eyra-400Regular'] text-xl leading-7">
          {children}
        </div>
    </>
}