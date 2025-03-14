'use client'

import Image from "next/image";
import styles from "./Nav.module.css";
import Button from "@/components/atoms/Button/Button";
import TopBanner from "@/components/atoms/TopBanner/TopBanner";

export default function Nav() {
    return (
        <>
            <TopBanner>
                Amber 0.4.0 is out! See the <a href="https://docs.amber-lang.com">docs</a> for more info.
            </TopBanner>
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
                    <a href="https://discord.gg/cjHjxbsDvZ">
                        <Button>
                            <div className={styles.discord}>
                                Join our Discord!
                            </div>
                            <div className={styles["discord-short"]}>
                                Discord
                            </div>
                        </Button>
                    </a>
                    <a href="https://docs.amber-lang.com">
                        <Button>Docs</Button>
                    </a>
                    <a href="https://github.com/amber-lang/Amber">
                        <Button>GitHub</Button>
                    </a>
                </div>
            </nav>
        </>
    );
}
