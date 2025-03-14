'use client'

import styles from "./Button.module.css";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export default function Button({ children }: Props) {
    return (
        <div className={styles.button}>
            {children}
        </div>
    );
}
