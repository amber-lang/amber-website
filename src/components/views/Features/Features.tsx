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
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
            <Card style="dark">
                <Image src="/icons/runtime.svg" alt="types" width={32} height={32} />
                <div className={styles.title}>Runtime Safety</div>
                <p className={styles.paragraph}>
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
            <Card style="dark">
                <Image src="/icons/types.svg" alt="types" width={32} height={32} />
                <div className={styles.title}>Type Safety</div>
                <p className={styles.paragraph}>
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
        </div>
    );
}
