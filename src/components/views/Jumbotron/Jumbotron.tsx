import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Jumbotron.module.css";

export default function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    The Programming
                    Language compiled
                    to Bash.
                </div>
                <div className={styles.paragraph}>
                    Write your scripts in a modern type-safe and
                    runtime-safe programming language that handles
                    many bugs and mistakes during compilation process.
                </div>
                <div className={styles.cta}>
                    <CallToActionButton>
                        Get Started
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
