import styles from './more-info-card.module.css';

import { FounderProfile } from "@/app/lib/definitions";

import Link from "next/link";
import { Button } from '../Buttons/buttons';


export default function MoreInfoCard({
    founderProfile
}: {
    founderProfile: FounderProfile
}) {
    return (
        <>
            <div className={styles.ModalHeader}>
                <p className={styles.ModalHeading}>
                    That is awesome!
                </p>
                <p className={styles.ModalSubtitle}>
                    Check below some other organization's infos that might bring you interest.
                </p>
            </div>
            <div className={styles.DealInformation}>
                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Role or function within the startups ecosystem: <span className={styles.DealBulletPoints}>Represents an organization.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Organization's name: <span className={styles.DealBulletPoints}>The New Org.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Website: <a className={styles.DealLink}>http://localhost:3000</a></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>State the organization is more active: <span className={styles.DealBulletPoints}>PR.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>How many funds or investment vehicles the org has: <span className={styles.DealBulletPoints}>R$2000,00.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Preferences of the Organization:</p>
                    <p className={styles.DealBulletPoints}>- Describes itself as a Private Equity.</p>
                    <p className={styles.DealBulletPoints}>- Organization is more used to invest in Pre-seed stage.</p>
                    <p className={styles.DealBulletPoints}>- The main funding stage is Angel.</p>
                    <p className={styles.DealBulletPoints}>- The organization is open to invest in different sectors.</p>
                    <p className={styles.DealBulletPoints}>- Mostly focused on Agrotech and Fintech.</p>
                    <p className={styles.DealBulletPoints}>- There're 15 startups that are part of their portfolio.</p>
                    <p className={styles.DealBulletPoints}>- R$180.000,00 under management.</p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Org's numbers:</p>
                    <p className={styles.DealBulletPoints}>- Either leads and participates in investment rounds.</p>
                    <p className={styles.DealBulletPoints}>- Dry Powder of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Min ticket of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Max ticket of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Most recurrent investment ticket of R$45.000,00.</p>
                </div>
            </div>
            <div className={styles.ButtonsBox}>
                <Link className={styles.ButtonLink} href="/deals"><Button text="Reserve my quota"/></Link>
                <Link href="/deals/not-interested"><Button text="Unfollow Deal"/></Link>
            </div>
        </>
    );
}