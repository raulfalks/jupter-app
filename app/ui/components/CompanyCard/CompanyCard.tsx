import styles from './company-card.module.css';

import { fetchFounderProfileData } from '@/app/lib/data';
import { FounderProfile } from '@/app/lib/definitions';
import { 
    Button, 
    NotInterestedButton 
} from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export default async function CompanyCard({
    id
}: {
    id: number
}) {
    const founderProfile = await fetchFounderProfileData(id);


    return (
        <div className={styles.ModalContent}>
            <p className={styles.ModalHeading}>
                {founderProfile.profileName}’s Startup
            </p>
            <div className={styles.CompanyLogoWrapper}>
                <Image 
                    alt='Company Logo'
                    className={styles.ProfileImage}
                    height={230}
                    src={`${founderProfile.imageFile?.toString()}`}
                    width={230}
                />
            </div>
            <p className={styles.DealDescription}>
                Let’s close a deal?
            </p>
            <div className={styles.ButtonsBox}>
                <Link href="feed/more-info">
                    <Button text="More info"/>
                </Link>
                <Link href="feed/not-interested">
                    <NotInterestedButton text='Not interested'/>
                </Link>
            </div>
        </div>
    );
}
