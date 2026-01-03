export interface Project {
    id: number;
    name: string;
    authors: string[];
    description: string;
    image: string; // name of image in data folder
    imageAltText: string;
    url?: string;
    githubUrl?: string;
    appleUrl?: string;
    frontEndUrl?: string;
    backEndUrl?: string;
    devpostUrl?: string;
    caseStudyUrl?: string;
    tags: string[];
}

export interface Work {
    id: number;
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    bullets: string[];
    companyUrl: string;
    logo?: string; // name of logo in data folder
    tags: string[];
}

export interface Certification {
    id: number;
    title: string;
    issuingBody: string;
    credentialID?: string;
    issuingBodyUrl: string;
    verificationUrl?: string;
    issueDate: Date;
    expiryDate?: Date;
    certificationImage: string;
}

export interface BlogPost {
    id: string;
    title: string;
    date: Date;
    summary: string;
    tags: string[];
    markdown: string;
    showAoCBox?: boolean; // Whether to show the Advent of Code explanation box
}
