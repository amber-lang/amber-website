'use client'

import { useRouter } from "next/navigation";
import styles from "./Button.module.css";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
    href?: string,
    telemetryName?: string,
    styled?: boolean
}

export default function Button({ children, href, telemetryName, styled }: Props) {
    const router = useRouter();

    async function redirectWithTelemetry(href?: string, telemetryName?: string) {
        if (telemetryName) {
            const request = fetch(`/api/visit?name=${telemetryName}`, {
                cache: 'no-store'
            });
            const timeout = new Promise((_, reject) => (
                setTimeout(() => reject(new Error('timeout')), 800)
            ));
            await Promise.race([request, timeout]);
        }
        if (href) {
            router.push(href);
        }
    }

    return (
        <button
            className={styled ? styles.button : styles.unstyled}
            onClick={() => redirectWithTelemetry(href, telemetryName)}
        >
            {children}
        </button>
    );
}
