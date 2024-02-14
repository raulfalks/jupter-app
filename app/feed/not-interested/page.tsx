import { NotInterestedButton } from '@/app/ui/components/Buttons/buttons';
import styles from './not-interested.module.css';
import TextArea from '@/app/ui/components/TextArea/text-area';
import AccountButton from '@/app/ui/components/AccountButton/account-button';
import Logo from '@/app/ui/components/Logo/jupter-logo';
import Image from 'next/image';


export default function Page() {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <div className={styles.ModalHeader}>
                            <p className={styles.ModalHeading}>
                                Why you are not interested?
                            </p>
                            <p className={styles.ModalSubtitle}>
                                Help us improve! Tell us why you're not interested, and our algorithm will refine your future deals.
                            </p>
                        </div>
                        <TextArea label=''/>
                        <div className={styles.ButtonsBox}>
                            <NotInterestedButton text="Send"/>
                        </div>
                    </div>
                </div>
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