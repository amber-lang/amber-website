import Image from "next/image";
import styles from "./SupportedBy.module.css";

const logos = [
    {
        src: "/supportedby/nlnet.svg",
        alt: "NLnet",
        width: 449,
        height: 168,
        href: "https://nlnet.nl/project/Amber/",
    },
    {
        src: "/supportedby/nlnet-zero-commons.svg",
        alt: "NLnet Zero Commons",
        width: 540,
        height: 151,
        href: "https://nlnet.nl/project/Amber/",
    },
    {
        src: "/supportedby/regolo-logo.png",
        alt: "Regolo",
        width: 476,
        height: 120,
        href: "https://regolo.ai",
    },
];

export default function SupportedBy() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.title}>
                    <h1>Supported by</h1>
                </div>
                <div className={styles.logos}>
                    {logos.map((logo) => (
                        <a key={logo.src} href={logo.href}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
