import { Work } from 'types';

const workData: Work[] = [
  {
    id: 1,
    company: 'Wood Mackenzie',
    role: 'Full Stack Software Engineering Co-op',
    startDate: '07/2023',
    endDate: '12/2023',
    bullets: [
      'Directly responsible for 8 research initiatives within legacy Typescript codebase and for designing implementation plan for nascent user product',
      'Wrote and maintained new ElasticSearch & GraphQL schemas and queries that enhanced data interaction efficiency across 15+ datasets',
      'Collaborated with global software teams during implementation which ensured zero downtime for existing products throughout deliverable timeline',
      'Finalized implementation of new user product within all deadlines enabling company to bring in 4 new partnerships',
    ],
    companyUrl: 'https://www.woodmac.com/lens/hydrogen/',
    tags: ['TypeScript', 'ElasticSearch', 'GraphQL'],
    type: 'technical',
  },

  {
    id: 2,
    company: "Generate Product Development Studio - Cait's Curates",
    role: 'Software Engineer',
    startDate: '06/2023',
    endDate: '12/2023',
    bullets: [
      'Designed and implemented a React and Go-based gift-curator application which nearly doubled existing customer base',
      'Developed a backend system from the ground up for managing user requests and curator suggestions, ensuring data integrity',
      'Created 3 user roles for effective site moderation which enabled the hiring of new full-time moderation staff',
    ],
    companyUrl: 'https://generatenu.com',
    logo: 'Generate.svg',
    tags: ['Go', 'React'],
    type: 'technical',
  },

  {
    id: 3,
    company: 'Cataldo Ambulance Service',
    role: 'Emergency Medical Technician',
    startDate: '06/2023',
    bullets: [
      'Treat 10+ patients per 16-hour shift in emergencies and accurately activate pre-hospital codes (cardiac, stroke, and trauma alerts)',
      'Maintain clear and concise communication with patient and other first responders in stressful situations, often in multiple languages',
    ],
    companyUrl: 'https://cataldoambulance.com',
    tags: [
      'CPR',
      'Emergency Medicine',
      'Communication',
      'Foreign Language',
      'Zoll PCR system',
      'Zoll Series X monitor',
    ],
    type: 'additional',
  },

  {
    id: 4,
    company: 'Sexual Violence Prevention Educator',
    role: 'Office of Prevention and Education, Northeastern University',
    startDate: '09/2024',
    bullets: [
      'Lead 8+ comprehensive bystander intervention and sexual violence prevention presentations per semester, reaching 350+ freshman',
      'Present 4+ specialized sexual violence prevention programs to Fraternity and Sorority Life organizations per semester, each for 75+ members',
    ],
    companyUrl: 'https://open.northeastern.edu',
    logo: 'Northeastern.svg',
    tags: [
      'Motivational interviewing',
      'Public speaking',
      'Resource navigation',
    ],
    type: 'additional',
  },

  {
    id: 5,
    company: 'Vice President',
    role: 'Northeastern University Sexual Health Advocacy, Resources, and Education',
    startDate: '09/2021',
    bullets: [
      'Lead 8+ comprehensive bystander intervention and sexual violence prevention presentations per semester, reaching 350+ freshman',
      'Present 4+ specialized sexual violence prevention programs to Fraternity and Sorority Life organizations per semester, each for 75+ members',
    ],
    companyUrl: 'https://northeasternshare.wixsite.com/share',
    logo: 'SHARE.avif',
    tags: [
      'Public Speaking',
      'Administration interfacing',
      'Program development',
    ],
    type: 'additional',
  },

  {
    id: 6,
    company: 'Clinical Assistant',
    role: "Boston Children's Hospital, Emergency Department",
    startDate: '07/2024',
    endDate: '09/2024',
    bullets: [
      'Assisted in pediatric trauma stabilization and responded to "Code Blue" emergencies, monitored and reported patient vitals',
      'Supported child life specialist team in patient comfort measures during procedures',
    ],
    companyUrl: 'https://northeasternshare.wixsite.com/share',
    logo: 'BCH.svg',
    tags: [
      'Public Speaking',
      'Administration interfacing',
      'Program development',
    ],
    type: 'additional',
  },
];

export { workData };
