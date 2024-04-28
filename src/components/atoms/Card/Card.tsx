import styles from "./Card.module.css";
import { ReactNode } from "react";

type StyleVariants = 'default' | 'dark';

type Props = {
    children?: ReactNode,
    style?: StyleVariants
}

const defaultProps: Props = {
    children: null,
    style: 'default'
}

export default function Card({ children, style }: Props = defaultProps) {
    const classNames = [
        styles.container,
        style === 'dark' ? styles.dark : null
    ].filter(Boolean).join(' ')
    return (
        <div className={classNames}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
