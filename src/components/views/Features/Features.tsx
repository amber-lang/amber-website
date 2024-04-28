import Card from "@/components/atoms/Card/Card";
import styles from "./Features.module.css";

export default function Features() {
    return (
        <div className={styles.container}>
            <Card style="dark">
                <h1>Modern Syntax</h1>
                <p>
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
            <Card style="dark">
                <h1>Runtime Safety</h1>
                <p>
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
            <Card style="dark">
                <h1>Type Safety</h1>
                <p>
                    The evolution of programming language syntax has significantly enhanced the ability of developers to create robust solutions efficiently. Modern programming languages, with their intuitive and concise syntax, empower users to write clearer, more maintainable code, facilitating quicker debugging and easier collaboration.
                </p>
            </Card>
        </div>
    );
}
