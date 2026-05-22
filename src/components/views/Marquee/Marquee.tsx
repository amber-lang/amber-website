import styles from "./Marquee.module.css";

const ITEMS = [
    "✦ Type Safety",
    "✦ Error Handling",
    "✦ Functions & Closures",
    "✦ Compiles to Bash",
    "✦ No Runtime",
    "✦ CI/CD Ready",
    "✦ Readable Syntax",
    "✦ Standard Library",
    "✦ POSIX Compatible",
    "✦ Open Source",
];

export default function Marquee() {
    const doubled = [...ITEMS, ...ITEMS];
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {doubled.map((item, i) => (
                    <span key={i} className={styles.item}>{item}</span>
                ))}
            </div>
        </div>
    );
}
