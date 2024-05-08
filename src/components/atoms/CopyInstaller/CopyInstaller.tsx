'use client'

import { useEffect, useState } from "react";
import styles from "./CopyInstaller.module.css";

type Contents = {
    name: string;
    snippet: string;
}

function getContents(): Contents | null {
    const userAgent = (typeof window !== "undefined") ? window.navigator.userAgent : "";
    switch (true) {
        case /Mac/img.test(userAgent):
            return {
                name: "Download for ",
                snippet: "sudo ruby -e \"require 'open-uri'; puts open('https://raw.githubusercontent.com/Ph0enixKM/AmberNative/master/setup/install.sh').read\" | $(echo $SHELL)'`"
            };
        case /Linux/img.test(userAgent):
            return {
                name: "Download for Linux",
                snippet: "sudo curl \"https://raw.githubusercontent.com/Ph0enixKM/AmberNative/master/setup/install.sh\" | $(echo $SHELL)"
            };
        case /Windows/.test(userAgent):
            return {
                name: "Download for WSL",
                snippet: "sudo curl \"https://raw.githubusercontent.com/Ph0enixKM/AmberNative/master/setup/install.sh\" | $(echo $SHELL)"
            };
        default:
            return null;
    }
}

export default function CopyInstaller() {
    const [contents, setContents] = useState<Contents>();
    const [copied, setCopied] = useState<string>();

    useEffect(() => {
        const contents = getContents();
        if (contents) {
            setContents(contents);
        }
    }, []);

    const onClick = () => {
        if (copied) return;
        setCopied(styles.copied);
        navigator.clipboard.writeText(contents?.snippet ?? '');

        fetch("/api/visit?name=download", {
            cache: 'no-store'
        });

        setTimeout(() => {
            setCopied('');
        }, 1000);
    }

    if (contents) {
        return (
            <div className={styles.container}>
                <div className={styles.name}>
                    {contents.name}
                </div>
                <div className={[styles.copy, copied].join(' ')} onClick={onClick} />
                <div className={styles.code}>
                    {contents.snippet}
                </div>
            </div>
        );
    }
}
