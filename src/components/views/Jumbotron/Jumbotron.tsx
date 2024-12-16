import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Jumbotron.module.css";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import CopyInstaller from "@/components/atoms/CopyInstaller/CopyInstaller";
import Image from "next/image";
import AmberHatLogo from "@/../public/amber-hat.svg";

function SeasonalLogo() {
    const month = new Date().getMonth();
    if (month === 11 || month === 0) {
        return <ChristmasHat />
    }
    return <span>amber</span>;
}

function ChristmasHat() {
    return (
        <div className={styles["amber-hat"]}>
            <Image
                src={AmberHatLogo}
                alt="amber"
                style={{ height: '1em' }} />
        </div>
    );
}

export default function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <SeasonalLogo />
                </div>
                <div className={styles.subheading}>
                    A language compiled to Bash.
                </div>
                <div className={styles.paragraph}>
                    A modern, type-safe programming language that catches bugs and errors at compile time.
                </div>
                <CopyInstaller />
                <div className={styles.cta}>
                    <CallToActionButton>
                        <Button
                            href="https://docs.amber-lang.com"
                            telemetryName="docs"
                        >
                            show_docs
                        </Button>
                    </CallToActionButton>
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.card}>
                    <div className={styles.code} />
                </div>
            </div>
        </div>
    );
}
