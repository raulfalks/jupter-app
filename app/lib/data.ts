import { unstable_noStore as noStore } from "next/cache";

export async function fetchDealsPages() {
    noStore();

    try { 
        const result = await fetch("", {
            method: 'GET'
        });

        const totalDeals = await result.json();

        return totalDeals as number;
    } catch (error) {
        console.error('API Error:', error);
        throw new Error('Failed to fetch total number of deals.');
    }
}