import Card from "@/components/atoms/Card/Card";
import styles from "./Features.module.css";
import Image from "next/image";

export default function Features() {
    return (
        <div className={styles.container}>
            <Card style="dark">
                <Image src="/icons/syntax.svg" alt="types" width={32} height={32} />
                <div className={styles.title}>Modern Syntax</div>
                <p className={styles.paragraph}>
                    You will find many of the language features familiar, allowing you to get up and running much faster than if you were learning Bash from scratch.
                </p>
            </Card>
            <Card style="dark">
                <Image src="/icons/runtime.svg" alt="types" width={32} height={32} />
                <div className={styles.title}>Runtime Safety</div>
                <p className={styles.paragraph}>
                    It’s one of the key components missing from regular shell scripts. It can help you catch many bugs at compile time.
                </p>
            </Card>
            <Card style="dark">
                <Image src="/icons/types.svg" alt="types" width={32} height={32} />
                <div className={styles.title}>Type Safety</div>
                <p className={styles.paragraph}>
                    Amber ensures that you handle everything that could fail. Each Bash command and function that could fail must be handled in some way.
                </p>
            </Card>
        </div>
    );
}
