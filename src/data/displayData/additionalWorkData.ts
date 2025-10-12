import { Work } from 'types';

const additionalWorkData: Work[] = [
    // ALL DATES ENTERED AS UNINDEXED, STANDARD MONTH NUMBER
    // CONVERSION FOR FRONT-END DISPLAY HAPPENS IN COMPONENTS

    {
        id: 1,
        company: 'English for Speakers of Other Languages Teacher',
        role: 'Boston Public Library',
        startDate: new Date('2022-10'),
        endDate: new Date('2023-12'),
        bullets: [
            'Taught weekly comprehensive English language sessions to 10-15 adult students',
            'Constructed detailed lesson plans about conversational English topics such as idioms and common phrases',
            `Invited outside speakers to share about personal studies, allowing students to ask questions in a conversational manner`,
        ],
        companyUrl: 'https://www.bpl.org/esol/',
        logo: 'BPL.png',
        tags: [
            'Curriculum development',
            'Teaching',
            'Compassion',
            'Foreign language',
        ],
    },

    {
        id: 2,
        company: 'Clinical Assistant',
        role: "Boston Children's Hospital, Emergency Department",
        startDate: new Date('2024-07'),
        endDate: new Date('2024-09'),
        bullets: [
            'Assisted in pediatric trauma stabilization and responded to "Code Blue" emergencies, monitored and reported patient vitals',
            'Supported child life specialist team in patient comfort measures during procedures',
        ],
        companyUrl:
            'https://www.childrenshospital.org/departments/emergency-medicine',
        logo: 'BCH.svg',
        tags: [
            'Public speaking',
            'Administration interfacing',
            'Program development',
        ],
    },

    {
        id: 3,
        company: 'Vice President',
        role: 'Northeastern University Sexual Health Advocacy, Resources, and Education',
        startDate: new Date('2021-09'),
        endDate: new Date('2025-05'),
        bullets: [
            'Lead weekly meetings for 30+ students on interpersonal communication, boundary setting, and healthy relationship development',
            'Advocate for accessible sexual health resources, securing an 88% markdown on essential products',
            'Partnered with university administrators and 2 student groups to bring 2 new medical procedures to university health center',
        ],
        companyUrl: 'https://northeasternshare.wixsite.com/share',
        logo: 'SHARE.avif',
        tags: [
            'Public speaking',
            'Administration interfacing',
            'Program development',
        ],
    },

    {
        id: 4,
        company: 'Sexual Violence Prevention Educator',
        role: 'Office of Prevention and Education, Northeastern University',
        startDate: new Date('2024-09'),
        endDate: new Date('2025-05'),
        bullets: [
            'Lead 8+ comprehensive bystander intervention and sexual violence prevention presentations per semester, reaching 350+ freshman',
            'Present 4+ specialized sexual violence prevention programs to Fraternity and Sorority Life organizations per semester, each for 75+ members',
        ],
        companyUrl: 'https://open.northeastern.edu',
        logo: 'Northeastern.png',
        tags: [
            'Motivational interviewing',
            'Public speaking',
            'Resource navigation',
        ],
    },

    {
        id: 5,
        company: 'Cataldo Ambulance Service',
        role: 'Emergency Medical Technician',
        startDate: new Date('2023-06'),
        bullets: [
            'Treat 10+ patients per 16-hour shift in emergencies and accurately activate pre-hospital codes (cardiac, stroke, and trauma alerts)',
            'Maintain clear and concise communication with patient and other first responders in stressful situations, often in multiple languages',
        ],
        companyUrl: 'https://cataldoambulance.com',
        logo: 'Cataldo.png',
        tags: [
            'CPR',
            'Emergency medicine',
            'Communication',
            'Foreign language',
            'Zoll PCR system',
            'Zoll Series X monitor',
        ],
    },
];

export { additionalWorkData };
