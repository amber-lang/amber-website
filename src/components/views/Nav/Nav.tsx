import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";

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
                <Link href="https://amber.marble.software">
                    <div className={styles["button"]}>Docs</div>
                </Link>
                <Link href="https://github.com/Ph0enixKM/Amber">
                    <div className={styles["button"]}>Github</div>
                </Link>
            </div>
        </nav>
    );
}
