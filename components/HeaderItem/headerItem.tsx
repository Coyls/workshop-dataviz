import React from 'react';
import { HeaderNumero } from '../HeaderNumero/headerNumero';
import SmoothCollapse from 'react-smooth-collapse';
import cls from 'classnames';

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

    return <div className={cls('flex-1 flex flex-col self-center justify-center h-full cursor-pointer',currentIndex != index && 'opacity-25' )}
        onClick={()=>setCurrentIndex(index)}
        style={{transition: 'opacity 500ms'}}
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
    </div>
}