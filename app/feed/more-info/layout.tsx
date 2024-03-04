import Image from 'next/image';
import styles from './more-info.module.css';


export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    {children}
                    <div className={styles.LogoWrapper}>
                        <Image 
                            alt='Jupter logo'
                            className='Logo'
                            src="/jupter-logo.png"
                            width={200}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
