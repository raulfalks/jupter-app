import styles from './skeletons.module.css';

import { 
    Button, 
    NotInterestedButton 
} from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export function FounderProfileCardSkeleton() {
    return (
        <div className={styles.ModalContent}>
            <p className={styles.ModalHeading}>
                Some Founder’s Startup
            </p>
            <div className={styles.CompanyLogoWrapper}>
                <Image 
                    alt='Company Logo'
                    className={styles.ProfileImage}
                    height={230}
                    src="/icon-user.png"
                    width={230}
                />
            </div>
            <p className={styles.DealDescription}>
                Let’s close a deal?
            </p>
            <div className={styles.ButtonsBox}>
                <Link className={styles.DisabledLink} aria-disabled href="feed/more-info">
                    <Button text="More info"/>
                </Link>
                <Link className={styles.DisabledLink} href="feed/not-interested">
                    <NotInterestedButton text='Not interested'/>
                </Link>
            </div>
        </div>
    );
}
