import styles from "./Pipeline.module.css";
import Card from "@/components/atoms/Card/Card";

export default function Pipeline() {
    return (
        <div className={styles.container}>
            <Card>
                <div className={[styles.icon, styles.amber].join(' ')} />
                <h1 className={styles.amber}>Write</h1>
                <div className={styles.pipeline}>
                    <Card style="dark">
                        <div className={styles.write} />
                    </Card>
                </div>
            </Card>
            <Card>
                <div className={[styles.icon, styles.bash].join(' ')} />
                <h1>Compile</h1>
                <div className={styles.pipeline}>
                    <Card style="dark">
                        <div className={styles.compile} />
                    </Card>
                </div>
            </Card>
            <Card>
                <div className={[styles.icon, styles.terminal].join(' ')} />
                <h1>Execute</h1>
                <div className={styles.pipeline}>
                    <Card style="dark">
                        <div className={styles.execute} />
                    </Card>
                </div>
            </Card>
        </div>
    );
}
