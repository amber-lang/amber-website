import styles from "./CallToActionButton.module.css";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export default function CallToActionButton({ children }: Props) {
    return (
        <button className={styles.cta}>
            {children}
        </button>
    );
}
