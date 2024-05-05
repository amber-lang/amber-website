import styles from "./CallToActionButton.module.css";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export default function CallToActionButton({ children }: Props) {
    return (
        <div className={styles.cta}>
            {children}
        </div>
    );
}
