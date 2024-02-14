import styles from './deals.module.css';

import AccountButton from '@/app/ui/components/AccountButton/account-button';
import Logo from '@/app/ui/components/Logo/jupter-logo';
import CompanyCard from '@/app/ui/components/CompanyCard/CompanyCard';
import { 
    fetchFounderProfileData, 
    fetchCountCompanies 
} from '@/app/lib/data';


export default async function Page({
    searchParams
}: {
    searchParams: {
        founderProfileId?: string,
    }
}) {
    const founderProfileId = Number(searchParams.founderProfileId) || 1;
    const founderProfile = await fetchFounderProfileData(founderProfileId);
    const companiesCount = await fetchCountCompanies();


    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <CompanyCard founderProfile={founderProfile}/>
                </div>
            </div>
            <AccountButton />
            <Logo />
        </div>
    );
}
