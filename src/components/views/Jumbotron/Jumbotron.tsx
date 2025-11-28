import CallToActionButton from "@/components/atoms/CallToActionButton/CallToActionButton";
import JumbotronCode from "./JumbotronCode";
import styles from "./Jumbotron.module.css";
import CopyInstaller from "@/components/atoms/CopyInstaller/CopyInstaller";
import SeasonalLogoType from "@/components/atoms/LogoType/LogoType";

export default function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <SeasonalLogoType />
                </div>
                <div className={styles.subheading}>
                    A language compiled to Bash.
                </div>
                <div className={styles.paragraph}>
                    A modern, type-safe programming language that catches bugs and errors at compile time.
                </div>
                <CopyInstaller />
                <div className={styles.cta}>
                    <a href="https://docs.amber-lang.com">
                        <CallToActionButton>
                            show_docs
                        </CallToActionButton>
                    </a>
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.card}>
                    <div className={styles.code}>
                        <JumbotronCode />
                    </div>
                </div>
            </div>
        </div>
    );
}
