import { Project } from 'types';

const projects: Project[] = [
  {
    id: 1,
    name: 'North Star',
    authors: ['Ashley Davis', 'Jacob Kline', 'Grace Theobald', 'Ken Borrero'],
    description:
      'A question and answer forum designed by and for software developers. Get answers about niche errors, interact with other community members, earn status and show your flair, and so much more at North Star! Authentication functionality is integrated with Firebase and the data is stored securely in MongoDB. These services were chosen due to their ease in integration with web applications and emphasis on security.',
    image: 'NorthStarImage.png',
    imageAltText: 'North Star landing page',
    tags: ['React', 'TypeScript', 'MongoDB', 'Firebase', 'Express', 'Node'],
    url: 'https://askNorthStar.onRender.com',
    githubUrl: 'https://github.com/jekhi5/NorthStar',
    caseStudyUrl:
      'https://docs.google.com/document/d/1DEHWC5ttwJw-DoJJbQdMyonwALabD3zeaDjGg0DcumM/edit?usp=sharing',
  },
  {
    id: 2,
    name: 'ViPER',
    authors: ['Emery Jacobowitz', 'Jacob Kline'],
    description:
      'An x86_64 compiler for a robust functional language implementing features such as exception handling, garbage collection, and register allocation',
    image: 'ViPER.png',
    imageAltText: 'ViPER text with the text "Verifying Programs Execute Right',
    githubUrl:
      'https://github.com/jekhi5/ViPER-compiler?tab=readme-ov-file#the-viper-compiler',
    tags: [
      'Compiler Design',
      'OCaml',
      'C Programming Language',
      'Programming Language Design',
    ],
  },
  {
    id: 3,
    name: 'SNAPpy',
    authors: [
      'Andrew Caplan',
      'Emery Jacobowitz',
      'Jacob Kline',
      'Daniel Ostapenko',
    ],
    description:
      'A web app created for SNAP benefits users living in Massachusetts. SNAPpy assists people living in food deserts to locate accessible grocery stores that accept SNAP benefits in their area and to find healthy recipes with minimal ingredients already on their shopping list. This project was created as part of the HackBeanpot hackathon and won the award: "Most Impactful on the Boston Community"',
    image: 'SNAPpyImage.png',
    imageAltText: 'Home page of SNAPpy site',
    tags: ['Django', 'Google-Maps', 'Python', 'JavaScript', 'JQuery'],
    devpostUrl: 'https://devpost.com/software/snappy-rb81ku',
    githubUrl: 'https://github.com/jekhi5/SNAPpy',
  },
  {
    id: 4,
    name: 'Kanbas',
    authors: ['Henry Renninger', 'Lizzie Jones', 'Jacob Kline'],
    description: 'A simulation of the teaching and learning software, Canvas',
    image: 'KanbasImage.png',
    imageAltText: 'List of courses on the Kanbas Courses page',
    url: 'https://kanbas-project.netlify.app/#/Kanbas',
    tags: ['React', 'TypeScript', 'MongoDB', 'Express', 'Node'],
    frontEndUrl: 'https://github.com/jekhi5/Kanbas',
    backEndUrl: 'https://github.com/jekhi5/Kanbas-backend',
  },
];

export { projects };
