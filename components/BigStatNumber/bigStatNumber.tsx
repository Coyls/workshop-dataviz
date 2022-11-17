import React from "react";
import styles from './bigStatNumber.module.css';
import cls from 'classnames';

type BigStatNumberProps = {
    children: any,
    noArrow?: boolean
}

export function BigStatNumber({children, noArrow}:BigStatNumberProps){
    return <div className={cls(styles.highlight, "p-[1.2rem] text-center relative")}>
        {!noArrow && <>
            <div className="absolute left-[55%] -top-1/2">
                <span className="font-['Hynings'] text-xl"> Le chiffre à retenir </span>
            </div>
            <div className={cls(styles.arrow, "absolute left-1/2 -top-[40%]")} />
        </>}
        {children}
    </div>
}