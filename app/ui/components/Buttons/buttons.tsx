import localFont from 'next/font/local';
import styles from './buttons.module.css';
import Link from 'next/link';


const consolas = localFont({
    src: '../../Consolas.ttf',
});

export function Button({
    text 
}: {
    text: string
}) {
    return (
        <div className={styles.ButtonWrapper}>
            <button className={consolas.className}>
                {text}
            </button>
        </div>
    );
}

export function NotInterestedButton({
    text
}: {
    text: string
}) {
    return (
        <div className={styles.ButtonWrapper}>
            <Link href="/deals">
                <button className={consolas.className}>
                        {text}
                </button>
            </Link>
        </div>
    );
}
