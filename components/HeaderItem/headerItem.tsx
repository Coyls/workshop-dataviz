import React from 'react';
import { HeaderNumero } from '../HeaderNumero/headerNumero';
import SmoothCollapse from 'react-smooth-collapse';
import cls from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type HeaderItemProps = {
    title: string,
    isDeployed: boolean,
    index: number,
    currentIndex: number,
    setCurrentIndex: Function,
    isLast?: boolean,
    children: any
  }
export function HeaderItem({children, title, isDeployed, index, currentIndex, setCurrentIndex, isLast}: HeaderItemProps) {   
    return <AnchorLink href={"#section-"+index} offset={-50} className={cls('flex-1 flex flex-col self-center justify-center h-full cursor-pointer',currentIndex != index && 'opacity-25' )}
        style={{transition: 'opacity 500ms', WebkitTapHighlightColor: "transparent"}}
    >
        <div className='flex gap-4'>
            <HeaderNumero>0{index}</HeaderNumero>
            {!isLast && <div className='flex-1 self-center'>
                <div className='border-t-[1px] border-dashed border-black h-1 '/>
            </div>}
        </div>
        <div className="pl-[20px] flex-1 font-['Eyra-400Medium'] text-base leading-5">
            <span className="font-['Eyra-400Light'] text-sm uppercase leading-7 text-gray-700">{title} <br/></span>
            <SmoothCollapse expanded={isDeployed}>
                {children}
            </SmoothCollapse>
        </div>
    </AnchorLink>
}