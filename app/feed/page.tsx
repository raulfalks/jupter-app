import styles from './feed.module.css';

import Logo from '@/app/ui/components/Logo/jupter-logo';
import FounderProfileCard from '@/app/ui/components/FounderProfileCard/FounderProfileCard';
import { FounderProfileCardSkeleton } from '@/app/ui/skeletons/skeletons';
import { fetchFeedProfilesData } from '@/app/lib/data';

import { Suspense } from 'react';


export default async function Page({
    searchParams
}: {
    searchParams: {
        pageNumber: string
    }
}) {
    const pageNumber = Number(searchParams.pageNumber) || 1;
    const founderProfile = await fetchFeedProfilesData(pageNumber);
    // const companiesCount = await fetchCountCompanies();

    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <Suspense
                        key={pageNumber}
                        fallback={<FounderProfileCardSkeleton />}
                    >
                        {founderProfile && founderProfile != null ? (
                            <FounderProfileCard data={founderProfile}/>
                        ) : (
                            <FounderProfileCardSkeleton />
                        )}
                    </Suspense>
                </div>
            </div>
            <Logo />
        </div>
    );
}
