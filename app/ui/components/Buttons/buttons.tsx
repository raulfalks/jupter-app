import styles from './buttons.module.css';

import localFont from 'next/font/local';


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
        <div className={styles.NotInterestedButton}>
            <p className={consolas.className}>
                {text}
            </p>
        </div>
    );
}
