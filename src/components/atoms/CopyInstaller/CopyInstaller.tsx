'use client'

import { useEffect, useState } from "react";
import styles from "./CopyInstaller.module.css";

const SNIPPET = "bash <(curl -sL \"https://github.com/amber-lang/amber/releases/download/0.5.0-alpha/install.sh\")"

function getOSName(): string | null {
    const userAgent = (typeof window !== "undefined") ? window.navigator.userAgent : "";
    switch (true) {
        case /Mac/img.test(userAgent):
            return "Download for ";
        case /Linux/img.test(userAgent):
            return "Download for Linux";
        case /Windows/.test(userAgent):
            return "Download for WSL";
        default:
            return null;
    }
}

export default function CopyInstaller() {
    const [osName, setOsName] = useState<string>();
    const [copied, setCopied] = useState<string>();

    useEffect(() => {
        const osName = getOSName();
        if (osName) {
            setOsName(osName);
        }
    }, []);

    const onClick = () => {
        if (copied) return;
        setCopied(styles.copied);
        navigator.clipboard.writeText(SNIPPET);

        fetch("/api/visit?name=download", {
            cache: 'no-store'
        });

        setTimeout(() => {
            setCopied('');
        }, 1000);
    }

    if (osName) {
        return (
            <div className={styles.container}>
                <div className={styles.name}>
                    {osName}
                </div>
                <div className={[styles.copy, copied].join(' ')} onClick={onClick} />
                <div className={styles.code}>
                    {SNIPPET}
                </div>
            </div>
        );
    }
}
