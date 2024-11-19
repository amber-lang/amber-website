import styles from './TopBanner.module.css';

interface Props {
    children: React.ReactNode;
}

export default function TopBanner({ children }: Props) {
    return (
        <>
            <div className={styles.topbanner}>
                {children}
            </div>
        </>
    );
}
