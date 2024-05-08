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
            const res = await fetch(`/api/visit?name=${telemetryName}`, {
                cache: 'no-store'
            });
            console.log(await res.text());
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
