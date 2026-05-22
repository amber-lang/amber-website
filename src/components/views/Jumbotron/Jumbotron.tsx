import styles from "./Jumbotron.module.css";
import CopyInstaller from "@/components/atoms/CopyInstaller/CopyInstaller";
import EditorSimulation from "@/components/views/EditorSimulation/EditorSimulation";
import CountUp from "@/components/atoms/CountUp/CountUp";
import type { GitHubRelease } from "@/lib/github";

const EXTRA_STATS = [
    { n: "Zero", l: "Runtime Deps" },
    { n: "LGPL-3.0", l: "License" },
];

export default function Jumbotron({ stars, release }: { stars: number; release: GitHubRelease | null }) {
    return (
        <section className={styles.hero} id="hero">
            {release && (
                <a
                    href={release.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.badge}
                >
                    <span className={styles.badgeDot} />
                    {release.tag} released
                </a>
            )}
            <h1 className={styles.heading}>
                Shell scripting<br />
                that <em className={styles.headingEm}>doesn&apos;t lie</em>
            </h1>
            <p className={styles.description}>
                Amber is a high-level language that compiles to Bash. Type safety,
                proper error handling, and a syntax your whole team can read —
                with zero runtime dependencies.
            </p>
            <div className={styles.ctas}>
                <a href="#install" className={styles.btnPrimary}>
                    ⚡ Quick Install
                </a>
                <a href="https://docs.amber-lang.com" className={styles.btnGhost}>
                    Read the Docs
                </a>
            </div>
            <div className={styles.sim}>
                <EditorSimulation />
            </div>
            <div className={styles.installSnippet} id="install">
                <CopyInstaller />
            </div>
            <div className={styles.stats}>
                <div className={styles.statGroup}>
                    <div className={styles.stat}>
                        <span className={styles.statN}><CountUp target={stars} /></span>
                        <span className={styles.statL}>GitHub Stars</span>
                    </div>
                </div>
                <div className={styles.statGroup}>
                    <div className={styles.statSep} />
                    <div className={styles.stat}>
                        <span className={styles.statN}><CountUp target={100} suffix='%' /></span>
                        <span className={styles.statL}>Bash output</span>
                    </div>
                </div>
                {EXTRA_STATS.map((s) => (
                    <div key={s.l} className={styles.statGroup}>
                        <div className={styles.statSep} />
                        <div className={styles.stat}>
                            <span className={styles.statN}>{s.n}</span>
                            <span className={styles.statL}>{s.l}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
