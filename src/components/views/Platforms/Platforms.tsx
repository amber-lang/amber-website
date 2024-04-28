import Image from "next/image";
import styles from "./Platforms.module.css";

export default function Platforms() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                    A portable solution for Unix<br/>
                    based operating systems
                </h1>
            </div>
            <div className={styles["image-container"]}>
                <Image src="/computers.png" alt="Platforms" fill />
            </div>
            <div className={styles.caption}>
                <h1>
                    macOS &nbsp; & &nbsp; Linux
                </h1>
            </div>
        </div>
    );
}
