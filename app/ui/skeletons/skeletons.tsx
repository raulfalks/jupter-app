import Button from "@/app/ui/components/Buttons/buttons";

import styles from './skeletons.module.css';
import Image from "next/image";
import Link from "next/link";


export function DealPageSkeleton() {
    return (
        <div>
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
                        href="deal/description"
                    >
                        <Button text="I'm onboard!"/>
                    </Link>
                    <Link href="deal/negative">
                        <Button text="Not interested"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
