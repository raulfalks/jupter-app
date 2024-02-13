import AccountButton from '@/app/ui/components/AccountButton/account-button';
import Logo from '@/app/ui/components/Logo/jupter-logo';
import { Button } from '@/app/ui/components/Buttons/buttons';
import {
    DealPageSkeleton 
} from '@/app/ui/skeletons/skeletons';

import styles from './deals.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';


export default function Deals() {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <p className={styles.ModalHeading}>
                            Let’s close the deal?
                        </p>
                        <div className={styles.CompanyLogoWrapper}>
                            <Image 
                                alt='Company Logo'
                                height={230}
                                src='/estus-logo.png'
                                width={230}
                            />
                        </div>
                        <p className={styles.DealDescription}>
                            Raul’s Startup has closed a deal with: investor name and <span className={styles.DealDescriptionSpan}>two more.</span>
                        </p>
                        <div className={styles.ButtonsBox}>
                            <Link className={styles.ButtonLink}
                                href="deals/onboard"
                            >
                                <Button text="I'm onboard!"/>
                            </Link>
                            <Link href="deals/not-interested">
                                <Button text="Not interested"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <AccountButton />
            <Logo />
        </div>
    );
}
