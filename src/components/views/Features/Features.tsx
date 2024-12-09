import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const FEATURES = [
    {
        icon: "/icons/syntax.svg",
        title: "Modern Syntax",
        paragraph: "ECMA Script-like syntax."
    },
    {
        icon: "/icons/runtime.svg",
        title: "Runtime Safety",
        paragraph: "Amber ensures that you handle everything that could fail."
    },
    {
        icon: "/icons/types.svg",
        title: "Type Safety",
        paragraph: "Use strong typing to catch bugs at compile time."
    },
    {
        icon: "/icons/docs.svg",
        title: "Instant Docs",
        paragraph: "Generate documentation automatically."
    },
    {
        icon: "/icons/interop.svg",
        title: "Bash Ready",
        paragraph: "Interoperate with Bash scripts."
    },
    {
        icon: "/icons/stdlib.svg",
        title: "Library baked in",
        paragraph: "Standard library with many useful functions."
    }
];

export default function Features() {
    return (
        <div className={styles.container}>
            {FEATURES.map((feature, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.icon}>
                        <Image src={feature.icon} alt="types" width={0} height={0} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={styles['text-container']}>
                        <div className={styles.title}>{feature.title}</div>
                        <p className={styles.paragraph}>{feature.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
