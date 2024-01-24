import Image from 'next/image';
import styles from './deals-component.module.css';
import Link from 'next/link';


export default function AccountButton() {
    return (
        <div className={styles.IconWrapper}>
            <Link href="/">
                <Image 
                    alt='Account button'
                    height={45}
                    src="/icon-user.png"
                    width={45}
                />
            </Link>
        </div>
    );
}