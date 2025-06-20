import styles from './TopBanner.module.css';

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
}

export default function TopBanner({ children, disabled }: Props) {
    return (
        <>
            {!disabled && (
                <div className={styles.topbanner}>
                    {children}
                </div>
            )}
        </>
    );
}
