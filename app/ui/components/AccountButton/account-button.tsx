import styles from './account-button.module.css';

import { signOut } from '@/auth';

import Image from 'next/image';


export default function AccountButton() {
    return (
        <div className={styles.IconWrapper}>
            <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
            >
                <button>
                    <Image 
                        alt='Account button'
                        height={45}
                        src="/icon-user.png"
                        width={45}
                    />
                </button>
            </form>
        </div>
    );
}