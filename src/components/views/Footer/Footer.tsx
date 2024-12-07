import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Footer.module.css";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";

export default function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div className={styles.title}>
                        <h1>
                            Discover the joy of shell scripting
                        </h1>
                    </div>
                    <CallToActionButton>
                        <Button href="https://docs.amber-lang.com" telemetryName="docs">
                            show_docs
                        </Button>
                    </CallToActionButton>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.author}>© 2024 Amber</div>
                <Link href="/analytics">View telemetry data</Link>
            </div>
        </div>
    );
}
