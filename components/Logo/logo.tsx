import React from 'react';
import cls from "classnames";
import styles from './logo.module.css';

export function Logo() {
    return <div className={cls(styles.logofont, "font-normal text-4xl text-color-logo font-family-logo flex flex-1 self-center justify-start pl-2")}>
        <span>Siah.</span>
    </div>
}