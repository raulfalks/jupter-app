import styles from './feed.module.css';

import Logo from '@/app/ui/components/Logo/jupter-logo';
import FounderProfileCard from '@/app/ui/components/FounderProfileCard/FounderProfileCard';
import { FounderProfileCardSkeleton } from '@/app/ui/skeletons/skeletons';
import { fetchFeedProfilesData } from '@/app/lib/data';

import { Suspense } from 'react';


export default async function Page({
    params
}: {
    params: {
        page: string
    }
}) {
    const pageNumber = Number(params.page) || 1;
    const founderProfile = await fetchFeedProfilesData(pageNumber);

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
