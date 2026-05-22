import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import styles from "./Footer.module.css";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";

export default function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.glow} />
                <div className={styles.inner}>
                    <h2 className={styles.title}>
                        Start scripting smarter.
                    </h2>
                    <p className={styles.subtitle}>
                        Join thousands of developers who write safer,
                        more maintainable shell scripts with Amber.
                    </p>
                    <div className={styles.actions}>
                        <a href="https://docs.amber-lang.com">
                            <CallToActionButton>
                                <span className={styles.btnPrompt}>$</span>
                                <span>get started</span>
                            </CallToActionButton>
                        </a>
                        <a href="https://discord.gg/cjHjxbsDvZ">
                            <Button>Join Discord</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.author}>© 2024 Amber Lang</div>
                <div className={styles.links}>
                    <a href="https://github.com/amber-lang/Amber">GitHub</a>
                    <a href="https://docs.amber-lang.com">Docs</a>
                    <a href="https://discord.gg/cjHjxbsDvZ">Discord</a>
                    <Link href="/analytics">Analytics</Link>
                </div>
            </div>
        </div>
    );
}
