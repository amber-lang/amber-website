import styles from "./Compare.module.css";

const bashLines = [
    { cls: "cm", code: "#!/bin/bash" },
    { cls: "", code: "" },
    { cls: "cm", code: "# No type checking — version might be empty" },
    { cls: "", code: "<kw>VERSION</kw>=<cmd>$(git describe --tags --abbrev=0)</cmd>" },
    { cls: "", code: "" },
    { cls: "cm", code: "# Silently fails, VERSION becomes empty" },
    { cls: "op", code: "<kw>docker push</kw> myapp:<cmd>$VERSION</cmd>" },
    { cls: "", code: "" },
    { cls: "cm", code: "# Script continues even after failure!" },
    { cls: "", code: "<fn>echo</fn> <str>\"Deployed version $VERSION\"</str>" },
];

const amberLines = [
    { code: "<kw>fun</kw> <fn>get_version</fn>(): <ty>Text?</ty> {" },
    { code: "    <kw>let</kw> <va>tag</va> = <cmd>$ git describe --tags --abbrev=0 $</cmd><kw>?</kw>" },
    { code: "    <kw>return</kw> <va>tag</va>" },
    { code: "}" },
    { code: "" },
    { code: "<kw>fun</kw> <fn>deploy</fn>(<va>env</va>: <ty>Text</ty>) {" },
    { code: "    <kw>let</kw> <va>v</va> = <fn>get_version</fn>()" },
    { code: "    <cmd>$ docker push myapp:{v} $</cmd> <kw>failed</kw> {" },
    { code: "        <fn>echo</fn>(<str>\"Push failed — aborting\"</str>)" },
    { code: "        <kw>fail</kw> 1" },
    { code: "    }" },
    { code: "    <fn>echo</fn>(<str>\"✅ Deployed to {env}\"</str>)" },
    { code: "}" },
];

function renderLine(raw: string) {
    return raw
        .replace(/<kw>(.*?)<\/kw>/g, (_, t) => `<span class="${styles.kw}">${t}</span>`)
        .replace(/<fn>(.*?)<\/fn>/g, (_, t) => `<span class="${styles.fn}">${t}</span>`)
        .replace(/<str>(.*?)<\/str>/g, (_, t) => `<span class="${styles.str}">${t}</span>`)
        .replace(/<cmd>(.*?)<\/cmd>/g, (_, t) => `<span class="${styles.cmd}">${t}</span>`)
        .replace(/<ty>(.*?)<\/ty>/g, (_, t) => `<span class="${styles.ty}">${t}</span>`)
        .replace(/<va>(.*?)<\/va>/g, (_, t) => `<span class="${styles.va}">${t}</span>`)
        .replace(/<op>(.*?)<\/op>/g, (_, t) => `<span class="${styles.op}">${t}</span>`);
}

export default function Compare() {
    return (
        <section className={styles.section} id="compare">
            <div className={styles.eyebrow}>Amber vs Bash</div>
            <h2 className={styles.title}>The same script.<br />One you can trust.</h2>
            <p className={styles.subtitle}>
                Bash fails silently. Amber forces you to handle every failure — and compiles down to clean Bash anyway.
            </p>
            <div className={styles.grid}>
                <div className={`${styles.pane} ${styles.paneBad}`}>
                    <div className={styles.paneHeader}>
                        <span className={styles.paneBadge}>deploy.sh</span>
                        <span className={`${styles.verdict} ${styles.verdictBad}`}>✗ Bash</span>
                    </div>
                    <pre className={styles.code}>
                        {bashLines.map((l, i) => (
                            <div key={i} className={styles.line}>
                                <span className={styles.ln}>{i + 1}</span>
                                <span
                                    className={l.cls === "cm" ? styles.cm : undefined}
                                    dangerouslySetInnerHTML={{ __html: l.cls === "cm" ? l.code : renderLine(l.code) }}
                                />
                            </div>
                        ))}
                    </pre>
                    <div className={styles.callout}>
                        <span className={styles.calloutIcon}>⚠</span>
                        Silent failures — script continues even when deployment fails
                    </div>
                </div>
                <div className={`${styles.pane} ${styles.paneGood}`}>
                    <div className={styles.paneHeader}>
                        <span className={styles.paneBadge}>deploy.ab</span>
                        <span className={`${styles.verdict} ${styles.verdictGood}`}>✓ Amber</span>
                    </div>
                    <pre className={styles.code}>
                        {amberLines.map((l, i) => (
                            <div key={i} className={styles.line}>
                                <span className={styles.ln}>{i + 1}</span>
                                <span dangerouslySetInnerHTML={{ __html: renderLine(l.code) }} />
                            </div>
                        ))}
                    </pre>
                    <div className={`${styles.callout} ${styles.calloutGood}`}>
                        <span className={styles.calloutIcon}>✓</span>
                        Every failure handled — compiles to portable Bash
                    </div>
                </div>
            </div>
        </section>
    );
}
