import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        Get started now
                    </h1>
                </div>
                <CallToActionButton>
                    See the docs
                </CallToActionButton>
            </div>
            <div className={styles.footer}>
                © 2024 Paweł Karaś
            </div>
        </div>
    );
}
