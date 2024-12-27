export interface Project {
  id: number;
  name: string;
  authors: string[];
  description: string;
  image: string; // name of image in data folder
  imageAltText: string;
  url?: string;
  githubUrl?: string;
  frontEndUrl?: string;
  backEndUrl?: string;
  devpostUrl?: string;
  caseStudyUrl?: string;
  tags: string[];
}
