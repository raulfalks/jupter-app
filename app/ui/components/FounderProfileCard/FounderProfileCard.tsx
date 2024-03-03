'use client';

import styles from './founder-profile-card.module.css';

import { GetFounderProfileResponse } from '@/app/lib/definitions';
import { 
    Button, 
    NotInterestedButton 
} from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export default function FounderProfileCard({
    data
}: {
    data: GetFounderProfileResponse
}) {
    return (
        <div className={styles.ModalContent}>
            <p className={styles.ModalHeading}>
                {data.founderProfile.profileName}’s Startup
            </p>
            <div className={styles.CompanyLogoWrapper}>
                {data.profileImage ? (
                    <Image 
                        alt='Company Logo'
                        className={styles.ProfileImage}
                        height={230}
                        src={`data:${data.contentType};base64,${data.profileImage.fileContents}`}
                        width={230}
                    />
                ) : (
                    <Image 
                        alt='Company Logo'
                        className={styles.ProfileImage}
                        height={230}
                        src="/icon-user.png"
                        width={230}
                    />
                )}
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
