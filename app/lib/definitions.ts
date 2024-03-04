export type Company = {
    id: string;
    assetsUnderManagement: string;
    createdAt: string;
    companyName: string;
    companyTypeId: number;
    companyWebsite: string;
    founderProfileId: string;
    stateWithMoreActivity: string;
    updatedAt: string;
};


export type GetFounderProfileResponse = {
    founderProfile: FounderProfile;
    profileImage?: any;
    contentType?: string;
}


export type FounderProfile = {
    id: string;
    amountOfStartupsInPortfolio: string;
    contentType?: string;
    createdAt: string;
    dryPowder: string;
    imageFile?: string;
    investmentFunds: string;
    isAgnosticFounder: boolean;
    leadOrParticipate: number;
    maxTicket: string;
    minTicket: string;
    profileImage?: string;
    profileName: string;
    recurrentTicket: string;
    updatedAt: string;
    userId: string;

    company?: Company;
};


export type User = {
    id: string;
    email: string;
    name: string;
    token: string;
};
