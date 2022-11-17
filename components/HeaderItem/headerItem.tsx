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
        <div className='flex gap-5'>
            <HeaderNumero>0{index}</HeaderNumero>
            {!isLast && <div className='flex-1 self-center'>
                <div className='border-[1px] border-dashed border-black h-0 '/>
            </div>}
        </div>
        <div className="pl-6 pr-4 flex-1 font-['Eyra-500Bold'] text-base leading-5">
            <span className="font-['Eyra-200Light'] uppercase tracking-wider leading-7 text-gray-700">{title} <br/></span>
            <SmoothCollapse expanded={isDeployed}>
                {children}
            </SmoothCollapse>
        </div>
    </div>
}