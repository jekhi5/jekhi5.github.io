import { Certification } from 'types';

const certificationsData: Certification[] = [
    // ALL DATES ENTERED AS UNINDEXED, STANDARD MONTH NUMBER
    // CONVERSION FOR FRONT-END DISPLAY HAPPENS IN COMPONENTS

    {
        id: 1,
        title: 'Certificate in Interfaith Leadership',
        issuingBody: 'Interfaith America',
        issuingBodyUrl: 'https://www.interfaithamerica.org/',
        verificationUrl:
            'https://www.credly.com/badges/ea3f73bf-f861-4c0c-90a8-9044a7460038/linked_in_profile',
        issueDate: new Date('2023-08-16'),
        certificationImage: 'InterfaithAmerica.png',
    },
    {
        id: 2,
        title: 'Basic Life Support',
        issuingBody: 'American Heart Association',
        credentialID: '255416368457',
        issuingBodyUrl: 'https://www.heart.org/',
        verificationUrl:
            'https://ecards.heart.org/student/eCards?cid=48D9DAEA-F975-49E7-B210-59A387091993',
        issueDate: new Date('2025-01-09'),
        expiryDate: new Date('2027-01'),
        certificationImage: 'AHA.png',
    },
    {
        id: 3,
        title: 'Emergency Medical Technician - Basic',
        issuingBody: 'State of Massachusetts',
        credentialID: 'E0925087',
        issuingBodyUrl:
            'https://www.mass.gov/orgs/office-of-emergency-medical-services',
        verificationUrl:
            'https://checkahealthlicense.mass.gov/profiles/1340000',
        issueDate: new Date('2023-04-26'),
        expiryDate: new Date('2027-03-31'),
        certificationImage: 'MAStateSeal.png',
    },
    {
        id: 4,
        title: 'Bachelor of Science in Computer Science',
        issuingBody:
            'Northeastern University, Khoury College of Computer Science',
        credentialID: '25ZN-L1GJ-J2E7',
        issuingBodyUrl: 'https://www.northeastern.edu/',
        verificationUrl:
            'https://neu-events-platform.public-apps.okd4-prod.okd4-prod.northeastern.edu/onlinediplomas/',
        issueDate: new Date('2025-08-23'),
        certificationImage: 'Northeastern.png',
    },
];

export { certificationsData };
