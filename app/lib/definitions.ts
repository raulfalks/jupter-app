export type Company = {
    id: string;
    createdAt: string;
    companyName: string;
    updatedAt: string;
    founderProfileId: string;
};


export type GetFounderProfileResponse = {
    founderProfile: FounderProfile;
    profileImage?: any;
    contentType?: string;
}


export type FounderProfile = {
    id: string;
    contentType?: string;
    createdAt: string;
    imageFile?: string;
    profileImage?: string;
    profileName: string;
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
