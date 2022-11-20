import React from 'react';
import cls from "classnames";
import styles from './logo.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function Logo() {
    return <AnchorLink href='#top' offset={200} className={cls(styles.logofont, "font-normal text-4xl text-color-logo font-family-logo flex flex-1 self-center justify-start pl-2 cursor-pointer")}>
        <span>Siah.</span>
    </AnchorLink>
}