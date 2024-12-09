import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

import iconSyntax from "@/../public/icons/syntax.svg";
import iconRuntime from "@/../public/icons/runtime.svg";
import iconTypes from "@/../public/icons/types.svg";
import iconDocs from "@/../public/icons/docs.svg";
import iconInterop from "@/../public/icons/interop.svg";
import iconStdlib from "@/../public/icons/stdlib.svg";

const FEATURES = [
    {
        icon: iconSyntax,
        title: "Modern Syntax",
        paragraph: "ECMA Script-like syntax."
    },
    {
        icon: iconRuntime,
        title: "Runtime Safety",
        paragraph: "Amber ensures that you handle everything that could fail."
    },
    {
        icon: iconTypes,
        title: "Type Safety",
        paragraph: "Use strong typing to catch bugs at compile time."
    },
    {
        icon: iconDocs,
        title: "Instant Docs",
        paragraph: "Generate documentation automatically."
    },
    {
        icon: iconInterop,
        title: "Bash Ready",
        paragraph: "Interoperate with Bash scripts."
    },
    {
        icon: iconStdlib,
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
                        <Image src={feature.icon} alt={feature.title} style={{ width: '100%', height: '100%' }} />
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
