'use client';

import styles from './company-card.module.css';

import { FounderProfile } from '@/app/lib/definitions';
import { Button } from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export default function CompanyCard({
    founderProfile
}: {
    founderProfile: FounderProfile
}) {
    return (
        <div className={styles.ModalContent}>
            <p className={styles.ModalHeading}>
                Let’s close the deal?
            </p>
            <div className={styles.CompanyLogoWrapper}>
                <Image 
                    alt='Company Logo'
                    height={230}
                    src={`${founderProfile.imageFile?.toString()}`}
                    width={230}
                />
            </div>
            <p className={styles.DealDescription}>
                {founderProfile.profileName}’s Startup has closed a deal with: NoCams Company and <span className={styles.DealDescriptionSpan}>two more.</span>
            </p>
            <div className={styles.ButtonsBox}>
                <Link className={styles.ButtonLink}
                    href="feed/onboard"
                >
                    <Button text="I'm onboard!"/>
                </Link>
                <Link href="feed/not-interested">
                    <Button text="Not interested"/>
                </Link>
            </div>
        </div>
    );
}
