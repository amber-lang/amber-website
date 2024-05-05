import Image from "next/image";
import styles from "./Nav.module.css";
import Button from "@/components/atoms/Button/Button";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src="/amber-logo.svg"
                    alt="Amber Logo"
                    fill
                />
            </div>
            <div className={styles["logo-title"]}>amber</div>
            <div className={styles["right-nav"]}>
                <div className={styles.discord}>
                    <Button
                        href="https://discord.gg/cjHjxbsDvZ"
                        styled
                    >
                        Join our Discord!
                    </Button>
                </div>
                <Button
                    href="https://amber.marble.software"
                    telemetryName="docs"
                    styled
                >
                    Docs
                </Button>
                <Button
                    href="https://github.com/Ph0enixKM/Amber"
                    telemetryName="github"
                    styled
                >
                    Github
                </Button>
            </div>
        </nav>
    );
}
