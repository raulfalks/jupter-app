import styles from '../more-info.module.css';

import { Suspense } from 'react';

import { MoreInfoCardSkeleton } from '@/app/ui/skeletons/skeletons';
import MoreInfoCard from '@/app/ui/components/MoreInfoCard/MoreInfoCard';
import { fetchCompanyMoreInfo } from '@/app/lib/data';
import { FounderProfile } from '@/app/lib/definitions';


export default async function Page({
    params
}: {
    params: 
    { 
        id: string 
    }
}) {
    const founderId = Number(params.id);
    var founderProfile: FounderProfile | null; 

    if (founderId)
        founderProfile = await fetchCompanyMoreInfo(founderId);
    else
        founderProfile = null;


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