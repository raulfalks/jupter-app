import { authConfig } from "@/auth.config";
import { FounderProfile } from './definitions';

import { unstable_noStore as noStore } from "next/cache";
import getServerSession from 'next-auth';


// await new Promise((resolve) => setTimeout(resolve, 5000)); // For testing
export async function fetchFounderProfileData(companyId: number) {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try { 
        const result = await fetch(`http://localhost:5065/api/FounderProfile/GetById?id=${companyId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        });

        const response = await result.json();
        const image = `data:${response.profileImage.contentType};base64,${response.profileImage.fileContents}`;

        return { 
            id: response.founderProfile.id, 
            contentType: response.profileImage.contentType,
            createdAt: response.founderProfile.createdAt, 
            profileImage: response.founderProfile.profileImage, 
            profileName: response.founderProfile.profileName, 
            updatedAt: response.founderProfile.updatedAt, 
            userId: response.founderProfile.userId, 
            imageFile: image
        } as FounderProfile;
    } catch (error) {
        console.error('API Error: ', error);
        throw new Error('Failed to fetch the Founder Profile Data.');
    }
}

export async function fetchCountCompanies() {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try {
        const result = await fetch("http://localhost:5065/api/FounderCompany/GetAmountOfCompanies", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        });

        const total = await result.json();

        return total;
    } catch (error) {
        console.log('API Error: ', error);
        throw new Error('Failed to fetch count companies.');
    }
}
