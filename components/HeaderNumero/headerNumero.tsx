import cls from "classnames";
import React from "react";
import styles from './headerNumero.module.css';

type HeaderNumeroProps = {
    children: any,
    big?: boolean
  }
  
export function HeaderNumero({ children, big }: HeaderNumeroProps) { 
  return <div className={cls(big ? styles.highlightBig : styles.highlight, "flex justify-center")}>
     <span className="pr-[8px]">{ children }</span>
  </div>
}