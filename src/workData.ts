import { Work } from 'types';

const workData: Work[] = [
  {
    id: 1,
    company: 'Wood Mackenzie',
    role: 'Full Stack Software Engineering Co-op',
    duration: '07/2023 - 12/2023',
    bullets: [
      'Directly responsible for 8 research initiatives within legacy Typescript codebase and for designing implementation plan for nascent user product',
      'Wrote and maintained new ElasticSearch & GraphQL schemas and queries that enhanced data interaction efficiency across 15+ datasets',
      'Collaborated with global software teams during implementation which ensured zero downtime for existing products throughout deliverable timeline',
      'Finalized implementation of new user product within all deadlines enabling company to bring in 4 new partnerships',
    ],
    companyUrl: 'https://www.woodmac.com/lens/hydrogen/',
    image: './data/WoodMac.jpeg',
    imageAltText: 'Wood Mackenzie logo',
    technologies: ['TypeScript', 'ElasticSearch', 'GraphQL'],
  },

  {
    id: 1,
    company: "Generate Product Development Studio - Cait's Curates",
    role: 'Software Engineer',
    duration: '06/2023 - 12/2023',
    bullets: [
      'Designed and implemented a React and Go-based gift-curator application which nearly doubled existing customer base',
      'Developed a backend system from the ground up for managing user requests and curator suggestions, ensuring data integrity',
      'Created 3 user roles for effective site moderation which enabled the hiring of new full-time moderation staff',
    ],
    companyUrl: 'https://generatenu.com',
    image: './data/Generate.jpeg',
    imageAltText: 'Generate logo',
    technologies: ['Go', 'React'],
  },
];

export { workData };
