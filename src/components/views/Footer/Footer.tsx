import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Footer.module.css";
import Link from "next/link";

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
                    <Link href="https://github.com/Ph0enixKM/Amber">
                        See the docs
                    </Link>
                </CallToActionButton>
            </div>
            <div className={styles.footer}>
                © 2024 Paweł Karaś
            </div>
        </div>
    );
}
