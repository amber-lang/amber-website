import Image from "next/image";
import styles from "./Nav.module.css";

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
                <div className={styles["button"]}>Docs</div>
                <div className={styles["button"]}>Github</div>
            </div>
        </nav>
    );
}
