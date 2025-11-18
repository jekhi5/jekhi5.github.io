import { Work } from 'types';

const technicalWorkData: Work[] = [
    // ALL DATES ENTERED AS UNINDEXED, STANDARD MONTH NUMBER
    // CONVERSION FOR FRONT-END DISPLAY HAPPENS IN COMPONENTS
    {
        id: 1,
        company: "Generate Product Development Studio - Cait's Curates",
        role: 'Software Engineer',
        startDate: new Date('2023-06'),
        endDate: new Date('2023-12'),
        bullets: [
            'Designed and implemented a React and Go-based gift-curator application which nearly doubled existing customer base',
            'Developed a backend system from the ground up for managing user requests and curator suggestions, ensuring data integrity',
            'Created 3 user roles for effective site moderation which enabled the hiring of new full-time moderation staff',
        ],
        companyUrl: 'https://generatenu.com',
        logo: 'Generate.svg',
        tags: ['Go', 'React'],
    },

    {
        id: 2,
        company: 'Wood Mackenzie',
        role: 'Full Stack Software Engineering Co-op',
        startDate: new Date('2023-07'),
        endDate: new Date('2023-12'),
        bullets: [
            'Directly responsible for 8 research initiatives within legacy Typescript codebase and for designing implementation plan for nascent user product',
            'Wrote and maintained new ElasticSearch & GraphQL schemas and queries that enhanced data interaction efficiency across 15+ datasets',
            'Collaborated with global software teams during implementation which ensured zero downtime for existing products throughout deliverable timeline',
            'Finalized implementation of new user product within all deadlines enabling company to bring in 4 new partnerships',
        ],
        logo: 'WoodMac.png',
        companyUrl: 'https://www.woodmac.com/lens/hydrogen/',
        tags: ['TypeScript', 'ElasticSearch', 'GraphQL', 'Jira'],
    },

    {
        id: 3,
        company: 'SimpliSafe',
        role: 'Software Engineer I',
        startDate: new Date('2025-08'),
        bullets: [
            'Author new functionality for and maintain 5 C++ and Go-based services managing communication for hundreds of thousands of wireless cameras',
            'Develop proprietary C++ libraries used across service infrastructure',
            'Investigate and improve CI/CD pipelines to maximize efficiency and cryptographic safety',
        ],
        companyUrl: 'https://simplisafe.com',
        logo: 'SimpliSafe.png',
        tags: ['C++', 'Go', 'Bash', 'Python'],
    },
];

export { technicalWorkData };
