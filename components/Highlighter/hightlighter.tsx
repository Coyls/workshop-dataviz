import React from 'react';
import styles from './highlighter.module.css';

export function Highlighter({children}: any) {
    return <span className={styles.highlightContainer}>
        <span className={styles.highlight}>{children}</span>
    </span>
}