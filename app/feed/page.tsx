import styles from './deals.module.css';

import Logo from '@/app/ui/components/Logo/jupter-logo';
import CompanyCard from '@/app/ui/components/CompanyCard/CompanyCard';
import { CompanyCardSkeleton } from '@/app/ui/skeletons/skeletons';

import { Suspense } from 'react';


export default async function Page({
    searchParams
}: {
    searchParams: {
        founderId: string
    }
}) {
    const founderProfileId = Number(searchParams.founderId) || 1;
    // const companiesCount = await fetchCountCompanies();


    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <Suspense
                        key={founderProfileId}
                        fallback={<CompanyCardSkeleton />}
                    >
                        <CompanyCard id={founderProfileId}/>
                    </Suspense>
                </div>
            </div>
            <Logo />
        </div>
    );
}
