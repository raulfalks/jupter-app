import styles from '@/app/ui/components/Logo/logo.module.css';
import Image from 'next/image';


export default function Logo() {
    return (
        <div className={styles.LogoWrapper}>
            <Image 
                alt='Jupter logo'
                className='Logo'
                src="/jupter-logo.png"
                width={200}
                height={50}
            />
        </div>
    );
}