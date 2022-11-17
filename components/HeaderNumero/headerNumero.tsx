import cls from "classnames";
import React from "react";
import styles from './headerNumero.module.css';

type HeaderNumeroProps = {
    children: any,
  }
  
export function HeaderNumero({ children }: HeaderNumeroProps) { 
  return <div className={cls(styles.highlight, "flex justify-center")}>
     <span className="pr-[8px]">{ children }</span>
  </div>
}