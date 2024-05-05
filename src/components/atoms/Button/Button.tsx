'use client'

import { useRouter } from "next/navigation";
import styles from "./Button.module.css";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
    href?: string,
    telemetryName?: string
}

export default function Button({ children, href, telemetryName }: Props) {
    const router = useRouter();

    async function redirectWithTelemetry(href?: string, telemetryName?: string) {
        if (telemetryName) {
            const res = await fetch(`/api/visit?name=${telemetryName}`);
            console.log(await res.text());
        }
        if (href) {
            router.push(href);
        }
    }

    return (
        <button className={styles.button} onClick={() => redirectWithTelemetry(href, telemetryName)}>
            {children}
        </button>
    );
}
