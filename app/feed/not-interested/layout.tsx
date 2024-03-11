import styles from './not-interested.module.css';

import Image from 'next/image';


export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                {children}
            </div>
            <div className={styles.LogoWrapper}>
                <Image 
                    alt='Jupter logo'
                    src="/jupter-logo.png"
                    width={200}
                    height={50}
                />
            </div>
        </div>
    );
}
