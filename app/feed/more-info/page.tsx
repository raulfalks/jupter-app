import styles from './more-info.module.css';

import { Suspense } from 'react';

import { MoreInfoCardSkeleton } from '@/app/ui/skeletons/skeletons';
import MoreInfoCard from '@/app/ui/components/MoreInfoCard/MoreInfoCard';
import { fetchCompanyMoreInfo } from '@/app/lib/data';


export default async function Page({
    searchParams
}: {
    searchParams: 
    { 
        id: string 
    }
}) {
    const founderId = Number(searchParams.id);
    const founderProfile = await fetchCompanyMoreInfo(founderId);


    return (
        <div className={styles.ModalContent}>
            <Suspense 
                key={founderId}
                fallback={<MoreInfoCardSkeleton />}
            >
                {founderProfile ? (
                    <MoreInfoCard founderProfile={founderProfile} />
                ) : (
                    <MoreInfoCardSkeleton />
                )}
            </Suspense>
        </div>
    );
}