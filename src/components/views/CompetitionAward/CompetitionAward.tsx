import Image from "next/image";
import styles from "./CompetitionAward.module.css";
import Link from "next/link";

export default function CompetitionAward() {
    return <div className={styles.section}>
        <h1 className={styles.title}>#1 Award winning project of 2024</h1>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.headline}>
                    <Link href="https://ii.uni.wroc.pl/instytut/aktualnosci/578">
                        The best Engineering Project in Technology at Wrocław University
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Image
                        src="/university-wroclaw.svg"
                        alt="Logo of Wroclaw University"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '4rem' }}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.image}>
                    <Image
                        src="/photos/project-founder-talk.jpeg"
                        alt="Paweł Karaś - Project Founder"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '100%', maxHeight: '20rem' }}
                    />
                </div>
                <div className={styles.caption}>
                    Paweł Karaś - Project Founder
                </div>
            </div>
        </div>
    </div>
}
