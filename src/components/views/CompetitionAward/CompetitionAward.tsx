import Image from "next/image";
import styles from "./CompetitionAward.module.css";
import imageUniversityWroclaw from "@/../public/university-wroclaw.svg";
import imagePawelKaras from "@/../public/photos/pawel-karas.jpeg";
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
                        src={imageUniversityWroclaw}
                        alt="Logo of Wroclaw University"
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.image}>
                    <Image
                        src={imagePawelKaras}
                        alt="Paweł Karaś - Project Founder"
                        placeholder="blur"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "1rem"
                        }}
                    />
                </div>
                <div className={styles.caption}>
                    Paweł Karaś - Project Founder
                </div>
            </div>
        </div>
    </div>
}
