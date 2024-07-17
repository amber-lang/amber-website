import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Footer.module.css";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";

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
                    <Button href="https://docs.amber-lang.com" telemetryName="docs">
                        See the docs
                    </Button>
                </CallToActionButton>
            </div>
            <div className={styles.footer}>
                <div>© 2024 Paweł Karaś</div>
                <Link href="/analytics">View the telemetry data</Link>
            </div>
        </div>
    );
}
