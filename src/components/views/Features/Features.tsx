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
        paragraph: "Familiar JavaScript-like syntax — readable, expressive, and easy to pick up.",
        span: 7,
    },
    {
        icon: iconRuntime,
        title: "Runtime Safety",
        paragraph: "Amber ensures every failure path is handled. No more silent script errors.",
        span: 5,
    },
    {
        icon: iconTypes,
        title: "Type Safety",
        paragraph: "Strong static typing catches bugs at compile time before they reach production.",
        span: 4,
    },
    {
        icon: iconDocs,
        title: "Auto-generated Docs",
        paragraph: "Ship documentation alongside your code — generated automatically, always in sync.",
        span: 4,
    },
    {
        icon: iconInterop,
        title: "Bash Native",
        paragraph: "Zero-friction interop with existing Bash scripts, tools, and shell pipelines.",
        span: 4,
    },
    {
        icon: iconStdlib,
        title: "Built-in Library",
        paragraph: "A rich standard library with utilities for text, files, http and more — ready out of the box.",
        span: 12,
    }
];

export default function Features() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.header}>
                <div className={styles.eyebrow}>Why Amber</div>
                <h2 className={styles.title}>Everything you need<br />to write great scripts</h2>
            </div>
            <div className={styles.grid}>
                {FEATURES.map((feature, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        style={{ '--span': feature.span } as React.CSSProperties}
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.icon}>
                                <Image src={feature.icon} alt={feature.title} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.cardTitle}>{feature.title}</div>
                            <p className={styles.paragraph}>{feature.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
