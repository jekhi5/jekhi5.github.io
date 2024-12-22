import { Project } from 'types';

const projects: Project[] = [
  {
    name: 'North Star',
    authors: ['Jacob Kline', 'Ashley Davis', 'Grace Theobald', 'Ken Borrero'],
    description:
      'A question and answer forum designed by and for software developers. Get answers about niche errors, interact with other community members, earn status and show your flair, and so much more at North Star! Authentication functionality is integrated with Firebase and the data is stored securely in MongoDB.These services were chosen due to their ease in integration with web applications and emphasis on security.',
    image: 'NorthStarImage.png',
    imageAltText: 'North Star landing page',
    tags: ['React', 'TypeScript', 'MongoDB', 'Firebase', 'Express', 'Node'],
    url: 'https://askNorthStar.onRender.com',
    githubUrl: 'https://github.com/jekhi5/NorthStar',
  },
];

export { projects };
