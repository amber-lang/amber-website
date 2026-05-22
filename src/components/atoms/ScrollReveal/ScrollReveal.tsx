"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

interface Props {
    children: React.ReactNode;
    delay?: number; // ms
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${visible ? styles.visible : ""}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
