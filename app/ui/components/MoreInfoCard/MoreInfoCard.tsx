import styles from './more-info-card.module.css';

import { 
    CompanyType, 
    FounderProfile, 
    InvestmentSector, 
    InvestmentStage, 
    LeadOrParticipate, 
    StateWithMoreActivity 
} from "@/app/lib/definitions";

import Link from "next/link";
import { Button } from '@/app/ui/components/Buttons/buttons';


function getFoundersSectorsText(sectors: InvestmentSector[]) {
    var sectorsString = [];
    
    for (let i = 0; i < sectors.length; i++) {
        var sectorName = getInvestmentSectorName(sectors[i]);
        sectorsString.push(sectorName);
    }
    
    return sectorsString.join(', ');
}

function getInvestmentSectorName(id: number) {
    return InvestmentSector[id];
}

function getLeadOrParticipateText(leadOrParticipate: number) {
    var leadOrParticipateText = "";

    if (LeadOrParticipate[leadOrParticipate] === LeadOrParticipate[1])
        leadOrParticipateText = "Prefers to lead investment rounds";
    else if (LeadOrParticipate[leadOrParticipate] === LeadOrParticipate[2])
        leadOrParticipateText = "Either leads and participates of investment rounds";
    else
        leadOrParticipateText = "Prefers to participate of investment rounds";

    return leadOrParticipateText;
}


export default function MoreInfoCard({
    founderProfile
}: {
    founderProfile: FounderProfile
}) {
    var leadOrParticipateText = getLeadOrParticipateText(founderProfile.leadOrParticipate);
    var foundersSectorsText = getFoundersSectorsText(founderProfile.sectors);


    return (
        <>
            <div className={styles.ModalHeader}>
                <p className={styles.ModalHeading}>
                    That is awesome!
                </p>
                <p className={styles.ModalSubtitle}>
                    Check below some other infos about {founderProfile.company?.companyName} that might bring you interest.
                </p>
            </div>
            <div className={styles.DealInformation}>
                {founderProfile ? (
                    <div className={styles.DealInformationSection}>
                        <p className={styles.DealInformationTitle}>Role or function within the startups ecosystem: <span className={styles.DealBulletPoints}>Represents an organization</span></p>
                    </div>
                ) : (
                    <div className={styles.DealInformationSection}>
                        <p className={styles.DealInformationTitle}>Role or function within the startups ecosystem: <span className={styles.DealBulletPoints}>Represents an investor</span></p>
                    </div>
                )}

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Organization's name: <span className={styles.DealBulletPoints}>{founderProfile.company?.companyName}</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Website: <a className={styles.DealLink}>{founderProfile.company?.companyWebsite}</a></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>State the organization is more active: <span className={styles.DealBulletPoints}>{StateWithMoreActivity[founderProfile.company?.stateWithMoreActivity!]}</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>How many funds or investment vehicles the org has: <span className={styles.DealBulletPoints}>R${founderProfile.investmentFunds.toFixed(2)}</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Preferences of the Organization:</p>
                    
                    <p className={styles.DealBulletPoints}>
                        - Describes itself as a {InvestmentStage[founderProfile.company?.companyTypeId!]}
                    </p>
                    
                    <p className={styles.DealBulletPoints}>
                        - Organization is more used to invest in {InvestmentStage[founderProfile.stageUsedToInvest]} stage
                    </p>
                    
                    <p className={styles.DealBulletPoints}>
                        - The main funding stage is {InvestmentStage[founderProfile.participationStage]}
                    </p>
                    
                    {founderProfile.isAgnosticFounder ? (
                        <p className={styles.DealBulletPoints}>
                            - The organization is open to invest in different sectors
                        </p>
                    ) : (
                        <p className={styles.DealBulletPoints}>
                            - The organization isn't likely to invest in many sectors
                        </p>
                    )}
                    
                    <p className={styles.DealBulletPoints}>
                        - Focused on the following sectors: {foundersSectorsText}
                    </p>
                    
                    {founderProfile.amountOfStartupsInPortfolio && founderProfile.amountOfStartupsInPortfolio > 1 ? (
                        <p className={styles.DealBulletPoints}>
                            - There're {founderProfile.amountOfStartupsInPortfolio} startups that are part of their portfolio
                        </p>
                    ) : (
                        <p className={styles.DealBulletPoints}>
                            - There's {founderProfile.amountOfStartupsInPortfolio} startup that is part of their portfolio
                        </p>
                    )}
                    
                    <p className={styles.DealBulletPoints}>
                        - R${founderProfile.company?.assetsUnderManagement.toFixed(2)} under management
                    </p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Org's numbers:</p>

                    <p className={styles.DealBulletPoints}>
                        - {leadOrParticipateText}
                    </p>

                    <p className={styles.DealBulletPoints}>
                        - Dry Powder of R${founderProfile.dryPowder.toFixed(2)}
                    </p>

                    <p className={styles.DealBulletPoints}>
                        - Min ticket of R${founderProfile.minTicket.toFixed(2)}
                    </p>

                    <p className={styles.DealBulletPoints}>
                        - Max ticket of R${founderProfile.maxTicket.toFixed(2)}
                    </p>

                    <p className={styles.DealBulletPoints}>
                        - Most recurrent investment ticket of R${founderProfile.recurrentTicket.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className={styles.ButtonsBox}>
                <Link className={styles.ButtonLink} href="/deals"><Button text="Reserve my quota"/></Link>
                <Link href="/deals/not-interested"><Button text="Unfollow Deal"/></Link>
            </div>
        </>
    );
}